import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <div>
      <h1>Praktikum Next.js Pages Router</h1>
      <p>Mahasisawa D4 Pengembangan Web</p>
     </div>
     <a href="/about">Tentang Saya</a>
    </>
  )
}
