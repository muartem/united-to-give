'use client'

import CloseModal from '@/assets/svg/closeModal.jsx'
import {useEffect, useState} from 'react'

export function Modal({isOpen, onClose, classNames, children}) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEsc)

    return () => document.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!isOpen) return null

  const handleClickOutside = (e) => {
    if (e.target.id === 'modal-overlay') onClose()
  }

  return (
    <div
      id="modal-overlay"
      onClick={handleClickOutside}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div
        className={`
          bg-background w-full h-full max-w-screen-xl relative
          md:h-auto md:max-h-[90vh] md:w-full md:mx-4 md:my-10 md:rounded-3xl
          
          ${classNames}
        `}
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-4 md:top-10 md:right-16 text-light-black hover:text-black-text text-xl p-4 hover:opacity-80"
          aria-label="Close modal"
        >
          <CloseModal/>
        </button>
        <div className={`overflow-y-auto h-full px-8 py-20 md:p-20 ${classNames}`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export function ModalHandler({handler, modalContent, modalStyles, children}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <span className="cursor-pointer" onClick={() => setIsOpen(true)}>{handler}</span>
      <Modal classNames={modalStyles} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {children || modalContent}
      </Modal>
    </>
  )
}
