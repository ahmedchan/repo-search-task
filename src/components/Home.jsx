import ReposList from "./ReposList"
import {fetchRepos} from "@/lib/repos"
import Pagination from "./Pagination"

export default async function HomePage({ query, currentPage }) {
  const repos = await fetchRepos(query, currentPage)
  
  return (
    <>
      <ReposList repos={repos} query={query} currentPage={currentPage} />

      <div className="mt-5">
        <Pagination
          items={repos?.total_count || 0}
          query={query}
          currentPage={currentPage}
          pageSize={10}
        />
      </div>
    </>
  )
}
