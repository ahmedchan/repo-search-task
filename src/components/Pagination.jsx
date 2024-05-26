"use client"
import { usePathname, useRouter } from "next/navigation"

const Pagination = ({items, pageSize, currentPage, query}) => {
   const pathname = usePathname()
   const router = useRouter()

   const pagecount = Math.ceil(items / pageSize)

   if (pagecount === 1) return null 
   const pages = Array.from({ length: pagecount}, (_, i) => i + 1)

   const onPageChange = (event, page) => {
     event && event.preventDefault()
     const url = page
       ? `${pathname}?query=${query}&page=${Number(page)}`
       : pathname
     router.replace(url)
   }

  return (
    <div className="text-center flex justify-center flex-wrap">
      <ul className="flex max-width m-auto items-center gap-2 flex-wrap">
        {pages.slice(0, 100).map((page) => (
          <li
            key={page}
            className={`flex rounded-md justify-center items-center  border border-stone-300 dark:border-stone-500`}
          >
            <button
              className={`cursor-pointer rounded-md w-[2rem] -[2rem] block bg-transparent hover:bg-stone-300 dark:hover:bg-stone-900 ${
                page === currentPage
                  ? "bg-stone-600 cursor-default hover:bg-stone-600 border-stone-600 text-white "
                  : ""
              }`}
              onClick={(event) => onPageChange(event, page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Pagination
