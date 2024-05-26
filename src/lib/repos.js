const LIMIT = 10

export async function fetchRepos(query, currentPage) {
  if (!query) return

  try {
    const resp = await fetch(
      `https://api.github.com/search/repositories?q=${query}&order=desc&page=${currentPage}&per_page=${LIMIT}`,
      {
        cache: "no-store"
      }
    )
    const data = await resp.json()
    return {
      total_count: data.total_count,
      items: data?.items?.map((item) => ({
        id: item.id,
        full_name: item.full_name,
        owner: item.owner,
        stargazers_count: item.stargazers_count,
        description: item.description,
        html_url: item.html_url
      }))
    }
  } catch (error) {
    return error
  }
}
