"use client"

import React, { useCallback } from "react"
import BCGovModal from "../../../../components/UI/Modal/BCGovModal"
import CustomEditor from "../../../../components/editor/CustomEditor"

export default function Page({ params }: { params: { catchment: string } }) {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [text, setText] = React.useState("")

  const openModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])
  return (
    <main className="tw-min-h-screen">
      <div className=" tw-mx-8 tw-p-4">
        <h1 className="tw-font-bold tw-text-4xl tw-mb-4">Catchment {params.catchment}</h1>
        <div className="tw-mt-4 tw-p-4 tw-bg-yellow-100">
          <h3 className="tw-font-bold tw-text-2xl tw-mb-4">Table 2 Review</h3>
          <div className="tw-min-h-[150px] tw-font-semibold tw-border tw-border-black tw-m-4 tw-p-4 tw-bg-red-100">CM CAPA Comments</div>
          <div className="tw-min-h-[150px] tw-font-semibold tw-border tw-border-black tw-m-4 tw-mt-2  tw-p-4 tw-bg-red-100">
            Agreed-Upon Contractor Revisions
          </div>
          <h3 className="tw-font-bold tw-text-2xl tw-mb-4">Table 2 - Service Area Model</h3>
          <button type="button" onClick={openModal} className="btn btn-primary tw-flex tw-bg-[#38598a] tw-items-center tw-mt-4">
            Edit
          </button>
          <article className="tw-max-w-none tw-prose" dangerouslySetInnerHTML={{ __html: text }} />
          <BCGovModal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Edit Section">
            <CustomEditor text={text} setText={setText} />
          </BCGovModal>
        </div>
      </div>
    </main>
  )
}
