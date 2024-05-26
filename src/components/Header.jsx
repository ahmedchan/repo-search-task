import React from 'react'
import ThemeToggler from "./ThemeToggler"
import Link from "next/link"

const Header = ({appName}) => {
  return (
    <div className="flex align-items justify-between gap-3">
      <div className="logo fex gap-3 justify-between align-center">
        <h1 className="font-bold text-2xl"><Link href="/">{appName}</Link></h1>
        <span className="text-stone-500 dark:text-stone-400 text-sm">
          Feel free to search repos and save them for later use
        </span>
      </div>

      <div className="flex items-center gap-5">
        <Link href="/fav" className='text-teal-500 underline text-sm'>Favorte Repos</Link>
        <ThemeToggler />
      </div>
      
    </div>
  )
}

export default Header
