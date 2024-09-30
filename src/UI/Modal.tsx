import {  Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import clsx from 'clsx';
import { ReactNode } from 'react'

interface ModalProps {
    isOpen: boolean,
    closeModal: () => void,
    title?: string,
    children: ReactNode

}

const Modal = ({isOpen, closeModal, title, children} :ModalProps) => {


  return (
    <>
    <Transition show={isOpen}>
      <Dialog open={isOpen} onClose={closeModal} className={clsx([
            // Base styles for the modal panel
            'fixed inset-0 flex items-center justify-center p-4 transition duration-500 ease-in-out z-50',
            // Open & close state styles
            'data-[closed]:scale-50',
            'data-[enter]:duration-200 data-[enter]:data-[closed]:scale-100',
            'data-[leave]:duration-200 data-[leave]:data-[closed]:scale-50',
          ]) }>
            <DialogPanel className="max-w-lg z-50 space-y-4 border bg-white p-12 shadow-lg rounded-lg">
                {title && (
                    <DialogTitle className="font-bold text-xl">
                    {title}
                </DialogTitle>
                )}
                {children}
            </DialogPanel>
            <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Dialog>
    </Transition>
    </>
  )
}

export default Modal