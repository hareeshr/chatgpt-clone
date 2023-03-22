"use client"

import { Toaster } from "react-hot-toast"


//Client Provider for Notifications
function ClientProvider() {
  return (
    <>
        <Toaster position="top-right" />
    </>
  )
}

export default ClientProvider