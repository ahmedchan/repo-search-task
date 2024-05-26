"use client"
import React from 'react'

const renderColor = (color) => {
  switch (color) {
    case "primary":
      return "bg-teal-600 dark:bg-teal-700 border-teal-600 dark:border-teal-800 hover:bg-teal-700 dark:hover:bg-teal-800"
    case "secondary":
      return "bg-gray-800 dark:bg-white disabled:bg-gray-200 disabled:text-gray-400 dark:disabled:bg-gray-900 dark:disabled:text-gray-500 border-black-800 dark:border-white disabled:dark:border-gray-800 hover:bg-gray-900 dark:hover:bg-gray-200 text-stone-100 dark:text-stone-900"
  }
}

const renderSize = (size) => {
  switch (size) {
    case 'sm': return "text-sm px-2 py-1"
    default: return "text-normal px-3 py-2"
  }
}

const Button = ({ type="button", variant="primary", size="md", icon, children, ...props }) => {

  return (
    <button
      type={type}
      className={` border rounded-md ${renderColor(
        variant
      )} ${renderSize(size)} trasition-all duration-200 text-white`}
      {...props}
    >
      <span className="inline-flex items-center gap-2">
        {icon ? icon : null}
        <span>{children}</span>
      </span>
    </button>
  )
}

export default Button
