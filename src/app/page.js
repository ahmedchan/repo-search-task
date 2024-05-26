// "use client"
import {Suspense} from "react"
import Search from "@/components/Search"
import HomePage from "@/components/Home"
import RepoSkeleton from "@/components/RepoSkeleton"

export default async function Page({ searchParams }) {
  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1

  return (
    <div className="flex flex-col justify-between gap-3">
      {/* searh input container */}
      <section className="">
        <Search />
      </section>

      {/* search result */}
      <section className="mt-5">
        <Suspense key={query} fallback={<RepoSkeleton />}>
          <HomePage query={query} currentPage={currentPage} />
        </Suspense>
      </section>
    </div>
  )
}
