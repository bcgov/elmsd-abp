"use client"

import React from "react"
// import CustomEditor from "../../components/editor/CustomEditor"

const page = () => {
  const abps: any[] = [
    {
      catchmentName: "Catchment 1 - Vancouver Island North",
      id: "1",
      status: "In Creation"
    }
  ]

  return (
    <div className="tw-min-h-screen tw-p-8">
      {abps.map((abp) => (
        <div key={abp.id} className="card">
          <div className="card-body tw-flex tw-justify-between">
            <div className="titles-container">
              <h2 className="card-title-main tw-font-semibold tw-text-xl"> 2023-2024 WorkBC Employment Services Annual Business Plan </h2>
              <h5 className="card-title-sub tw-underline tw-font-bold tw-text-lg"> {abp.catchmentName}</h5>
              <h6 className="Status tw-font-semibold tw-text-gray-400 tw-text-base">
                Status: {abp.status}
                <br />
                Previous Years:{" "}
                <a href="/" target="_blank">
                  2022-2023
                </a>
                ,{" "}
                <a href="/" target="_blank">
                  2021-2022
                </a>
              </h6>
            </div>
            <div className="button-container tw-flex tw-flew-row  tw-max-h-[44px]">
              <button type="button" className="btn btn-primary tw-flex tw-bg-[#38598a] tw-items-center">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-card-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
                  />
                </svg>{" "}
                <h1 className="tw-ml-2">Full View</h1>
              </button>
              <button type="button" className="btn btn-primary tw-flex tw-bg-[#38598a] tw-items-center tw-ml-2">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-card-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
                  />
                </svg>{" "}
                <h1 className="tw-ml-2">Edit</h1>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default page
