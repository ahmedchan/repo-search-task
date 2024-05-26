"use client"

import React from 'react'
import { IoStarOutline } from "react-icons/io5"
import Image from "next/image"
import Button from "@/components/ui/Button"
import { maxLength } from "@/utils"

function FavItem({ item, setFavRepos }) {
  const handleRemove = (favId) => {
    console.log({ favId })
    let favs = JSON.parse(localStorage.getItem("fav_repos")) || []
    let modifiedFavs = favs.filter((i) => i.id !== favId)
    localStorage.setItem("fav_repos", JSON.stringify(modifiedFavs))
    setFavRepos(modifiedFavs)
  }

  return (
    <div className="mt-3 border border-stone-200 dark:border-stone-600 p-3 rounded-md flex justify-between gap-7">
      <div className="flex-1 flex flex-col gap-1">
        <h3 className="">
          <a
            href={item.html_url}
            target="_blank"
            rel="nofollow"
            className="text-teal-600 underline"
          >
            {item.full_name}
          </a>
        </h3>
        <p>
          {maxLength(item.description) || (
            <span className="text-stone-400 text-sm italic dark:text-stone-500">
              No description provided
            </span>
          )}
        </p>
        <ul className="text-stone-400 mt-1 dark:text-stone-500 flex items-center gap-4">
          <li className="flex items-center gap-2">
            <a
              href={item.owner.html_url}
              target="_blank"
              rel="nofollow"
              className="flex items-center gap-2 underline"
            >
              <Image
                src={item.owner.avatar_url}
                loading="lazy"
                width={20}
                height={20}
                className="rounded-full object-fill"
                alt={item.owner.login}
              />
              <span>{item.owner.login}</span>
            </a>
          </li>
          <li className="text-stone-400  dark:text-stone-500 flex items-center gap-1">
            <IoStarOutline />
            <span>{item.stargazers_count}</span>
          </li>
        </ul>
      </div>
      <div className="">
        <Button
          variant="secondary"
          size="sm"
          //  icon={<IoStarOutline />}
          onClick={() => handleRemove(item.id)}
        >
          Remove
        </Button>
      </div>
    </div>
  )
}

export default FavItem