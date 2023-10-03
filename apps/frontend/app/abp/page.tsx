import Link from "next/link"

type ABP = {
  catchmentName: string
  id: string
  status: string
}

const page = () => {
  const abps: ABP[] = [
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
              <Link href="/abp/edit/1" type="button" className="btn btn-primary tw-flex tw-bg-[#38598a] tw-items-center">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-pencil-square"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fillRule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>{" "}
                <h1 className="tw-ml-2">Edit</h1>
              </Link>
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
                <h1 className="tw-ml-2">Full View</h1>
              </button>
              <button type="button" className="btn btn-primary tw-flex tw-bg-[#38598a] tw-items-center tw-ml-2">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-box-arrow-in-up"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
                  />
                </svg>{" "}
                <h1 className="tw-ml-2">Submit</h1>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default page
