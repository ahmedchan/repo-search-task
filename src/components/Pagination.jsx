"use client"
import { usePathname, useRouter } from "next/navigation"

const Pagination = ({items, pageSize, currentPage = 1, query}) => {
   const pathname = usePathname()
   const router = useRouter()

   const pagecount = Math.ceil(items / pageSize)

   if (pagecount === 1) return null 
   const pages = Array.from({ length: pagecount}, (_, i) => i + 1)

   const onPageChange = (page) => {
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
            className={`flex rounded-md justify-center items-center `}
          >
            <span
              className={`cursor-pointer rounded-md w-[2rem] -[2rem]  border block bg-transparent ${
                page === Number(currentPage)
                  ? "bg-gray-600 cursor-default hover:bg-gray-600 border-gray-600 text-white "
                  : "hover:bg-stone-300 dark:hover:bg-stone-900 border-stone-300 dark:border-stone-500"
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Pagination
