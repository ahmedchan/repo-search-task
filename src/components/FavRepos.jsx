"use client"
import {useState, useEffect} from 'react'
import FavItem from "./FavItem"

function FavRepos() {
  const [isLoading, setIsLoading] = useState(true)
   const [favRepos, setFavRepos] = useState([])

   useEffect(() => {
    async function loadFavs(params) {
      try {
        let favs = JSON.parse(window.localStorage.getItem("fav_repos")) || []

        setFavRepos(favs)
      } catch (error) {
        console.log("errror: ", error)
      } finally {
        setIsLoading(false)
      }
    }
     
    loadFavs()
   }, [])

   if (isLoading) return <div>loading...</div>

   // render variable
  const renderList =
    favRepos?.length > 0 ? (
      favRepos?.map((item) => (
        <FavItem
          key={item.id}
          // favRepos={favRepos}
          setFavRepos={setFavRepos}
          item={item}
        />
      ))
    ) : (
      <div className="text-strone-400 dark:text-stone-500 text-sm">
        There are no Repos in fav list!
      </div>
    )

  return renderList
}

export default FavRepos