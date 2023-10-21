import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import NewsData from '@/components/context/data'
import News from '@/components/news'
import MostVisited from '@/components/mostVisited'
import Link from 'next/link'
import About from './about'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {



  
  return (
    <main
      className={`flex min-h-screen flex-col items-start justify-between px-24 py-14 bg-slate-200`}
    >
      <News/>
      <br/>
    </main>
  )
}
