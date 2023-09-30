"use client"

import React from "react"
import CustomEditor from "../../components/editor/CustomEditor"

const page = () => {
  const a = 1
  return (
    <div className="tw-min-h-screen">
      <h1>page</h1>
      {a}
      <CustomEditor />
    </div>
  )
}

export default page
