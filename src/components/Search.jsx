"use client"
import { useState, useEffect } from "react"
import { IoSearch } from "react-icons/io5"
import Button from "@/components/ui/Button"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const Search = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("query")?.toString() || ""
  )

  useEffect(() => {
    setSearchTerm("TenStack")
    router.replace(`${pathname}?query=TenStack`)
  }, [])
  
  const onSubmit = (event) => {
    event.preventDefault()
    const url = searchTerm ? `${pathname}?query=${searchTerm}` : pathname
    router.replace(url)
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex items-center relative bg-stone-200 dark:bg-stone-700 rounded-md px-1 pl-10 bg-opacity-30 focus-within:ring-4 ring-gray-400 ring-opacity-20 focus-within:bg-opacity-100 transition-colors duration-200">
        <span className="absolute top-0 bottom-0 left-0 w-10 flex items-center justify-center ">
          <IoSearch size={18} className="dark:text-stone-500 text-stone-400" />
        </span>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="search repos by name...."
          className="flex-1 focus-0 outline-0 px-2 bg-transparent h-12 "
        />
        <Button type="submit" variant="primary">
          Search
        </Button>
      </div>
    </form>
  )
}

export default Search
