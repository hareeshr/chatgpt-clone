
# ChatGPT Clone

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Deploy](#deploy)
- [Run Locally](#run-locally)
- [Contact](#contact)

## Overview

This project is designed to be a clone of Chatagpt, a chatbot developed by OpenAI. The goal of the project is to create a clone of the Chatagpt chatbot that exhibits similar behaviors to the original version. The project will use natural language processing (NLP) techniques to develop an AI-based chatbot based on OpenAI API. The chatbot will be able to understand and respond to user input in a natural language. Thank you for checking out the Chatagpt Clone Project!

[Demo Link](https://chatgpt-clone.hareeshr.me/)

### Built With

 - [Next.js](https://nextjs.org/)
 - [React.js](https://react.dev/)
 - [Typescript](https://www.typescriptlang.org/)
 - [Node.js](https://nodejs.org/)
 - [Tailwind CSS](https://tailwindcss.com/)
 - [NextAuth.js](https://next-auth.js.org/)
 - [Google Firestore](https://firebase.google.com/)
 - [OpenAI API](https://platform.openai.com/)

## Features

 - Authentication using Google Account
 - Chat UI with access to history of previous chats
 - Delete a chat collection
 - Select a NLP model from OpenAI API
 - Use the selected model to generate responses to the given prompts from OpenAI API

## Prerequisites

 - Get your OpenAI API key from [here](https://platform.openai.com/account/api-keys).
 - Get your Google Cloud ID and Secret from [here](https://console.cloud.google.com/apis/credentials).
 - Get your Firebase Private Key from [here](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk).
 - Git -  [Download & Install Git](https://git-scm.com/downloads) for Windows users. (OSX and Linux machines has it preinstalled).
 - Node.js -  [Download & Install Node.js](https://nodejs.org/en/download/).

## Deploy

**Vercel**
Host your own live version of Chatbot UI with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhareeshr%2Fchatgpt-clone&env=GOOGLE_ID,GOOGLE_SECRET,NEXTAUTH_URL,NEXTAUTH_SECRET,OPENAI_API_KEY,FIREBASE_SERVICE_KEY&project-name=chatgpt-clone&repository-name=chatgpt-clone&demo-title=ChatGPT%20CLone&demo-description=A%20functional%20clone%20of%20ChatGPT%20using%20OpenAI%20API&demo-url=https%3A%2F%2Fchatgpt-clone.hareeshr.me%2F)
    
## Run Locally
**1. Clone Repo**

**2. Install Dependencies**

    npm i
**3. Provide API Key**
Create a .env.local file in the root of the repo with your configuration and API Keys:

    GOOGLE_ID=YOUR_GOOGLE_CLIENT_ID
    GOOGLE_SECRET=YOUR_GOOGLE_CLIENT_SECRET
    NEXTAUTH_URL=YOUR_APP_URL
    NEXTAUTH_SECRET=ANY_SECRET_KEY
    OPENAI_API_KEY=YOUR_OPENAI_API_KEY
    FIREBASE_SERVICE_KEY=YOUR_FIREBASE_PRIVATE_KEY_JSON
**4. Run App**

    npm run dev
    
**5. Happy chatting**
You can now login using your Google account and start a conversation with ChatGPT

## Contact

If you have any questions, feel free to reach out to me on [hareeshr.me](https://hareeshr.me)