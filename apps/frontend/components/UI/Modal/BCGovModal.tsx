import Box from "@mui/material/Box"
import React, { ReactNode } from "react"
import Modal from "react-modal"
// import ModalButton from "./BCGovModalButton"

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "6px",
    boxShadow: "0 0 30px 0 rgb(0 0 0 / 15%)",
    maxHeight: "80%"
  },
  overlay: {
    backgroundColor: "rgba(210, 210, 210, 0.58)"
  }
}

interface BCGovModalProps {
  isOpen: boolean
  save: () => void
  cancel: () => void
  contentLabel: string
  children: ReactNode
}

const BCGovModal: React.FC<BCGovModalProps> = ({ isOpen, save, cancel, contentLabel, children }) => (
  <Modal isOpen={isOpen} onRequestClose={cancel} style={modalStyles} contentLabel={contentLabel}>
    <h1 className="tw-text-2xl tw-font-bold">{contentLabel}</h1>
    <Box width="75vw">
      <div>{children}</div>
      <Box paddingRight="2em" textAlign="right" paddingTop="4em">
        <button type="submit" className="btn btn-primary tw-m-2 tw-ml-auto" onClick={save}>
          Save
        </button>
        <button type="button" className="btn btn-secondary" onClick={cancel}>
          Cancel
        </button>
      </Box>
    </Box>
  </Modal>
)

export default BCGovModal
