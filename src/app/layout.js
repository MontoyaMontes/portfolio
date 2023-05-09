'use client';

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Montoya Montes ',
  description: 'Montoya Montes ',
}

export default function ({ children }) {

  return (
    <div lang="en">
      <body className={inter.className}>{children}</body>
    </div>
  )
}
