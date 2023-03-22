"use client"

import { collection, orderBy, query } from 'firebase/firestore'
import NewChat from './NewChat'
import { useSession, signOut } from 'next-auth/react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from "./../../firebase"
import ChatRow from './ChatRow'
import ModelSelection from './ModelSelection'
import Image from 'next/image'

function SideBar() {
  const { data: session} = useSession()

  //get all chats row for display
  const [chats, loading, error] = useCollection(
    session && query(
      collection(db, "users", session?.user?.email!, "chats"),
      orderBy('createdAt', 'desc')
    )
  )

  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            <div>

                {/* display new chat button */}
                <NewChat/>

                {/* display model selection component */}
                <div className="hidden sm:inline">
                    <ModelSelection />
                </div>

                {/* display loading message while loading */}
                <div className="flex flex-col space-y-2 my-2">
                  {loading && (
                    <div className="animate-pulse text-center text-white">
                      <p>Loading Chats...</p>
                    </div>
                  )}
                </div>

                {/* map through array of chats for display */}
                {
                  chats?.docs.map(chat => (
                    <ChatRow key={chat.id} id={chat.id} />
                  ))
                }

            </div>
        </div>

        {/* sign out component */}
        {session && <div onClick={() => signOut()}>
          <Image src={session.user?.image!} alt="Profile picture"
              className='h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50'/>
         <p className='text-center text-white'>Sign Out</p></div> }
    </div>
  )
}

export default SideBar