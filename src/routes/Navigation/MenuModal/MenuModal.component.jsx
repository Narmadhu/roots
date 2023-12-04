import React from "react"

import { createPortal } from "react-dom"

import MenuList from "../MenuList/MenuList.component"

import "./MenuModal.styles.scss"

const MenuModal = ({
  closeModal,
  scrollPosition,
  showModal
}) => {
  return (
    showModal && createPortal(
      <div
        aria-hidden={!showModal}
        aria-labelledby="navigationModalLabel"
        className={`modal fade header-modal ${showModal ? "show" : ""}`.trim()}
        onClick={closeModal}
        tabIndex="-1"
      >
        <div className={`modal-dialog ${scrollPosition > 46 ? "scrolled" : ""}`.trim()}>
          <div className="modal-content">
            <MenuList
              showModal={showModal}
            />
          </div>
        </div>
      </div>,
      document.getElementById("modal-root")
    )
  )
}

export default MenuModal
