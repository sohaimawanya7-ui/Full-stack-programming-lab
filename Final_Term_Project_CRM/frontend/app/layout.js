import './globals.css'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'CRM System - Air University',
  description: 'Customer Relationship Management System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: '10px',
              fontSize: '14px',
            },
          }}
        />
        {children}
      </body>
    </html>
  )
}
