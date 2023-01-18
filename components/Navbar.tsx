import { ReactElement } from "react";

interface IProps {
  hamburgerItems: []
}

function NavBar({ hamburgerItems }: IProps): ReactElement {

  return (
    <>
      <div>
        <nav className="px-2 py-2 dark:bg-slate-900 dark:text-white text-black flex text-center">
          <div className="text-center flex">
            <img src="/PDI.svg" alt="Polydon Industries Logo" className="h-16 w-16 inline-block" />
            <h1 className="text-center font-bold xl:text-3xl">Polydon Industries</h1>
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar