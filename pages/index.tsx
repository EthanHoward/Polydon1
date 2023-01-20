import {Roboto} from '@next/font/google'
import HeadDefs from '../components/HeadDefs'
import NavBar from '../components/Navbar'
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: "400",
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <HeadDefs title={"Polydon Industries - Home"}/>
      <div className="bg-white dark:bg-neutral-500 w-screen max-w-100 overflow-x-hidden min-h-fit">
        <NavBar/>
        <div className="bg-white dark:bg-neutral-500">
          &nbsp; {/* Removing this &nbsp; will cause the drop-shadow to not render because... idk, CSS? */}
        </div>
        <Footer/>
      </div>
    </>
  )
}
