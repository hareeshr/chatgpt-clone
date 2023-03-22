"use client"

import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { FormEvent, useState } from "react"
import toast from 'react-hot-toast'
import useSWR from "swr"
import { db } from "../../firebase"
import ModelSelection from "./ModelSelection"

type Props = {
    chatId: string
}

function ChatInput({ chatId } : Props) {

    //State for prompt input
    const [prompt, setPrompt] = useState("")

    //get session
    const { data: session } = useSession()
    
    //get chat-gpt model
    const { data:model} = useSWR('model', {
        fallbackData: 'text-davinci-003'
    })

    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!prompt) return

        const input = prompt.trim()
        setPrompt("")

        const message : Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image! || 'https://ui-avatars.com/api/?name=${session?.user?.name}',
            }
        }

        // add message to firestore
        await addDoc(
            collection(db, "users", session?.user?.email!, "chats", chatId, 'messages')
            , message
        )

        //Notification notification to say Loading...
        const notification = toast.loading('ChatGPT is thinking...')

        //API call to get send prompt and get ChatGPT response
        await fetch('/api/askQuestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: input, chatId, model, session
            })
        }).then(() => {
            //Toast notification to say successful
            toast.success('ChatGPT has responded!', {
                id: notification
            })
        })

    }
  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
        <form className="p-5 space-x-5 flex"
            onSubmit={sendMessage}>
            <input type="text" 
                className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
                disabled={!session}
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                placeholder="Type your message here..."
            />
            <button 
                disabled={!prompt || !session} 
                className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 "
                type="submit">
                <PaperAirplaneIcon className="h-4 w-4 -rotate-45"  />
            </button>
        </form>

        <div className="md:hidden">
           <ModelSelection />
        </div>
    </div>
  )
}

export default ChatInput