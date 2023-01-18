import { Inter } from '@next/font/google'
import Head from 'next/head'
import HeadDefs from '../components/HeadDefs'
import NavBar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HeadDefs title={"Polydon Industries - Home"}/>
      <NavBar hamburgerItems={[]}/>
    </>
  )
}
