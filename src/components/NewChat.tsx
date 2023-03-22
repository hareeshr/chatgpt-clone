'use client'

import { PlusIcon } from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { db } from "./../../firebase"
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

function NewChat() {

  const router =useRouter()

  //get session
  const {data:session } = useSession()

  //create new chat object and add it to firestore
  const createNewChat = async() => {
    const doc = await addDoc( 
      collection(db, "users", session?.user?.email!, "chats"), {
        userId: session?.user?.email,
        createdAt: serverTimestamp()
      }
    )

    router.push(`/chat/${doc.id}`)
  }
  return (
    <div className='border-gray-700 border chatRow' onClick={createNewChat}>
        <PlusIcon className="h-4 w-4" />
        <p>New Chat</p>
    </div>
  )
}

export default NewChat