"use client"

import "./Header.css"
import Link from "next/link"

const Header = () => (
  <header>
    <div className="banner tw-pt-2">
      <a href="https://gov.bc.ca">
        <img width="175px" src="/BCID_H_rgb_rev.svg" alt="Go to the Government of British Columbia website" />
      </a>
      <h2 className=" tw-text-xl">
        <Link className=" tw-no-underline hover:tw-text-white focus:tw-text-white " href="/">
          {" "}
          WorkBC Annual Bussiness Plan
        </Link>
      </h2>
      <div aria-label="This application is currently in Beta phase" className="Beta-PhaseBanner">
        {process.env.VITE_REACT_ENVIRONMENT || "Beta"}
      </div>
    </div>
  </header>
)

export default Header
