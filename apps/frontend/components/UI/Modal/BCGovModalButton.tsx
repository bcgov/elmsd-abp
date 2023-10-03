import React from "react"
import "./BCGovModalButton.css"

interface ModalButtonProps {
  text: string
  showIcon: boolean
  onClick: () => void
  ariaLabel?: string
  ariaHasPopup?: boolean | "dialog" | "menu" | "grid" | "true" | "false" | "listbox" | "tree"
}

const ModalButton: React.FC<ModalButtonProps> = ({ text, showIcon, onClick, ariaLabel, ariaHasPopup }) => {
  let extLinkIcon
  if (showIcon) {
    extLinkIcon = (
      <img width="20em" src="/external-link-alt-solid.svg" alt="" style={{ transform: "translate(0.5em, 0.12em)", padding: "0em 1.25em 0em 0em" }} />
    )
  } else {
    extLinkIcon = <span />
  }

  return (
    <button className="bc-gov-modal-button" type="button" onClick={onClick} aria-label={ariaLabel} aria-haspopup={ariaHasPopup}>
      {text}
      {extLinkIcon}
    </button>
  )
}

ModalButton.defaultProps = {
  ariaLabel: "",
  ariaHasPopup: "false"
}

export default ModalButton
