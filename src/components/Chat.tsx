"use client"

import { collection, orderBy, query } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { useCollection } from "react-firebase-hooks/firestore"
import { db } from "../../firebase"
import Message from "./Message"

type Props = {
    chatId: string
}
function Chat({ chatId } : Props) {

    //get session
    const { data: session } = useSession()

    // get all messages from chatId
    const [messages] = useCollection(session && query(
        collection(db, "users", session?.user?.email!, "chats", chatId,"messages"),
        orderBy("createdAt", "asc")
    ))

    return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
        {/* display if no messages  */}
        {messages?.empty && (
            <p className="mt-10 text-center text-white">
                Type a prompt in below to get started!
            </p>
        )}

        {/* Display list of messages */}
        {messages?.docs.map((message) => (
            <Message key={message.id} message={message.data()} />
        ))}
        
    </div>
  )
}

export default Chat