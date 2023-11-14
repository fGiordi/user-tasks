import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useGlobalStore } from '../globals';

interface Props {
  open: boolean,
  onClose: () => void,
  onOpen?: () => void,
  action: () => void
  type: 'edit' | 'add'
}

export default function MyModal({ open, onClose, action, type = 'add' }: Props) {
  // import global store username and email get and set
  const {  setUsername, setEmail} = useGlobalStore();
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">

      </div>

      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    User Details
                  </Dialog.Title>

                  {type === 'add' ? (
                    <div>
                      <div className="mt-2">

                        <p className="text-sm text-gray-500">
                          Please enter the user details below
                        </p>

                      </div>

                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700"
                      >
                        User Name
                      </label>

                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="border mt-1 mb-2 w-full h-[40px] rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        onChange={(e) => setUsername(e.target.value)}
                      />

                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>

                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="border mt-1 w-full h-[40px] rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        onChange={(e) => setEmail(e.target.value)}
                      />

                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={action}
                        >
                          Add User
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Title
                      </label>

                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="border mt-1 w-full h-[40px] rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        onChange={(e) => setEmail(e.target.value)}
                        defaultValue={""}
                      />
                       <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>

                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="border mt-1 w-full h-[40px] rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        onChange={(e) => setEmail(e.target.value)}
                        defaultValue={""}
                      />
                    </div>
                  )}

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
