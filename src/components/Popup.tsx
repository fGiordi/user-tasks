import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface Props {
  open: boolean,
  onClose: () => void,
  onOpen?: () => void,
}

export default function MyModal({ open, onClose }: Props) {
  // const [isOpen, setIsOpen] = useState(true)

  // function closeModal() {
  //   setIsOpen(false)
  // }

  // function openModal() {
  //   setIsOpen(true)
  // }

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
                  <div className="mt-2">

                    <p className="text-sm text-gray-500">
                      Please enter the user details below
                    </p>

                  </div>

                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    User Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="border mt-1 mb-2 w-full h-[40px] rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />

                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="border mt-1 w-full h-[40px] rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={onClose}
                    >
                      Add User
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
