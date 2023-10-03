"use client"

import "./Header.css"
import Link from "next/link"

const Header = () => (
  <header>
    <div className="banner tw-pt-2">
      <a href="https://gov.bc.ca">
        <img width="175px" src="/BCID_H_rgb_rev.svg" alt="Go to the Government of British Columbia website" />
      </a>
      <Link type="button" className="tw-text-xl tw-no-underline hover:tw-text-white focus:tw-text-white" href="/">
        <h2> WorkBC Annual Bussiness Plan</h2>
      </Link>
      <div aria-label="This application is currently in Beta phase" className="Beta-PhaseBanner">
        {process.env.NEXT_APP_ENVIRONMENT || "Beta"}
      </div>
    </div>
  </header>
)

export default Header
