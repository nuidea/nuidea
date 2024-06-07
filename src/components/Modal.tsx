import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { useState, type FormEvent } from 'react'
import React from 'react';

export default function Modal({ children, className }: { children: React.ReactNode, className?: string | undefined }) {
  let [isOpen, setIsOpen] = useState(false)
  let [email, setEmail] = useState('');
  let [message, setMessage] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;

    setMessage(true);
    setEmail('')
    hideMessage();
  };

  const hideMessage = () => {
    const timer = setTimeout(() => {
      setMessage(false);
    }, 8000);

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={className} >
        {children}
      </button>

      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-30 focus:outline-none" onClose={() => setIsOpen(false)}>
          <div className="fixed inset-0 z-20 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild enter="ease-out duration-100" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                <div className="fixed inset-0 backdrop-blur-sm bg-black/40" />
              </TransitionChild>
              <TransitionChild enter="ease-out duration-100" enterFrom="opacity-0 transform-[scale(95%)]" enterTo="opacity-100 transform-[scale(100%)]" leave="ease-in duration-100" leaveFrom="opacity-100 transform-[scale(100%)]" leaveTo="opacity-0 transform-[scale(95%)]">
                <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl">
                  <p className="text-sm/6 text-slate-600 mb-3">
                    Thank you for your interest in our service! Due to high demand and to ensure the highest quality, we are currently limiting the number of clients we serve.
                    Please leave us your email address and we will inform you as soon as we have availability for new projects.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-600">Your email</label>
                      {!message ?
                        <input type="email" id="helper-text" value={email} onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-lg border-0 p-3 text-sm text-gray-600 ring-1 ring-inset ring-slate-200 placeholder:text-gray-400 focus:outline-none focus:ring-inset focus:shadow-md focus:ring-slate-300"
                          placeholder="Enter your email" required />
                        :
                        <div className="w-full rounded-lg py-[9px] px-3 text-green-700 border border-green-300" role="alert">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">Email sent successfully.</h3>
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                          </div>
                        </div>
                      }
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                      <button type="button" onClick={() => setIsOpen(false)} className="p-2 text-slate-600 rounded-full hover:backdrop-blur-sm hover:bg-black/5">
                        Cerrar
                      </button>
                      <button type="submit" disabled={message} className="p-2 text-white rounded-full bg-indigo-600 hover:bg-indigo-800">
                        Enviar
                      </button>
                    </div>
                  </form>
                  <p className="mt-3 text-sm text-gray-500">We will contact you when your space is available.</p>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
