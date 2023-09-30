import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="tw-min-h-screen tw-px-8 tw-pt-16">
      <div className=" tw-mt-4 tw-px-8">
        <h1 className="tw-text-4xl tw-mb-2">WorkBC Annual Business Plan</h1>
        <p>
          The WorkBC Annual Business Plan (ABP) describes the Contractor&apos;s plan to deliver services during each fiscal year term under the WorkBC
          Employment Services Contract, the Apprentice Services Contract or the Assistive Technology Services Contract. The ABP serves as a baseline
          for the Ministry to evaluate the Contractor&apos;s service delivery performance and budget management as well as a standardized and
          consistent approach for managing contract performance.
        </p>
      </div>
      <div className="tw-flex tw-justify-center tw-p-6 tw-max-w-full">
        <div className="tw-w-1/3 tw-h-96 tw-m-4 tw-min-w-[300px] hover:tw-text-white tw-cursor-pointer ">
          <Image src="/0.jpg" alt="User guides" width={500} height={500} />
          <p className=" tw-relative tw-top-[-47px] tw-min-h-[48px]  tw-text-gray-100 tw-text-center tw-font-bold tw-bg-gray-800 tw-bg-opacity-70 hover:tw-bg-opacity-100">
            ANNUAL BUSINESS PLAN ONLINE TOOL USER GUIDE
          </p>
        </div>
        <Link className="tw-w-1/3 tw-h-96 tw-m-4 tw-min-w-[300px] hover:tw-text-white tw-cursor-pointer " href="/abp">
          <Image src="/1.jpg" alt="ABP" width={500} height={500} />
          <p className=" tw-relative tw-top-[-47px] tw-min-h-[48px]  tw-text-gray-100 tw-text-center tw-font-bold tw-bg-gray-800 tw-bg-opacity-70 hover:tw-bg-opacity-100">
            ANNUAL BUSINESS PLAN CREATE, SUBMIT & MANAGE
          </p>
        </Link>
        <div className="tw-w-1/3 tw-h-96 tw-m-4 tw-min-w-[300px] hover:tw-text-white tw-cursor-pointer ">
          <Image src="/2.jpg" alt="Documentation" width={500} height={500} />
          <p className=" tw-relative tw-top-[-72px] lg:tw-top-[-47px] tw-min-h-[48px]  tw-text-gray-100 tw-text-center tw-font-bold tw-bg-gray-800 tw-bg-opacity-70 hover:tw-bg-opacity-100">
            ANNUAL BUSINESS PLAN DOCUMENTATION & RESOURCE LIBRARY
          </p>
        </div>
      </div>
    </main>
  )
}
