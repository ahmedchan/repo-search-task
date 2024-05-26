import React, { Suspense } from 'react'
import FavRepos from "@/components/FavRepos"
import RepoSkeleton from "@/components/RepoSkeleton"

function page() {
  return (
    <div>
      <div className="page-title p-2 px-3 bg-stone-100 border border-stone-200 rounded">
        <h3 className="font-bold">Faviorte Repos</h3>
      </div>

      <div className="mt-5">
        <Suspense fallback={<RepoSkeleton />}>
          <FavRepos />
        </Suspense>
      </div>
    </div>
  )
}

export default page