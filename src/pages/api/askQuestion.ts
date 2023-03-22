import query from '@/lib/queryApi'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Timestamp  } from 'firebase-admin/firestore'
import { adminDb } from '../../../firebaseAdmin'

type Data = {
    answer: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { prompt, chatId, model,  session } = req.body

    //check for valid prompt and chatId
    if(!prompt){
        res.status(400).json({ answer: "Please provide a prompt!"})
        return
    }
    if(!chatId){
        res.status(400).json({ answer: "Please provide a valid chatId!"})
        return
    }

    //ChatGPT Query
    const response = await query(prompt, chatId, model)

    const message: Message = { 
        text: response || "ChatGPT was unable to find an answer for that!",
        createdAt: Timestamp.now(),
        user: {
            _id: 'ChatGPT',
            name: "ChatGPT",
            avatar: "https://cdn.cdnlogo.com/logos/c/38/ChatGPT.svg"
        }
    }

    //save the response to firestore
    await adminDb
        .collection('users')
        .doc(session?.user?.email)
        .collection('chats')
        .doc(chatId)
        .collection('messages')
        .add(message)

    res.status(200).json({ answer: message.text})
}
