"use client"
import React, { useEffect, useState } from "react"
import RepoItem from "./RepoItem"

const ReposList = ({ query = "", repos }) => {
  const [favRepos, setFavRepos] = useState([])

  useEffect(() => {
      let favs = JSON.parse(window.localStorage.getItem("fav_repos")) || []

      setFavRepos(favs)
  }, [])

  // render variable
  const renderList =
    repos?.items?.length > 0 ? (
      repos?.items?.map((item) => (
        <RepoItem
          key={item.id}
          favRepos={favRepos}
          setFavRepos={setFavRepos}
          item={item}
        />
      ))
    ) : (
      <div className="text-strone-400 dark:text-stone-500 text-sm">
        There are no results showing up, Start searing Repos!
      </div>
    )

  return (
    <div className="flex flex-col gap-4">
      {query ? (
        <p className="text-stone-400 dark:text-stone-500">
          You are searching for:{" "}
          <span className="italic underline text-stone-900 dark:text-stone-100">
            {query}
          </span>
        </p>
      ) : null}

      <div className="flex flex-col gap-4">{renderList}</div>
    </div>
  )
}

export default ReposList