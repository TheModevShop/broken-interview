import React, {useEffect} from 'react'

function Modal({children, open}) {
  return open ? (
    <div className="modal">
      <div className="modal-overlay" />
      <div className="modal-body">{children}</div>
    </div>
  ) : null
}

export default Modal
