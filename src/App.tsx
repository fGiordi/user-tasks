import {  useState, useEffect,  } from "react";
import { useGraphQLStore } from "./store";
import MyModal from "./components/Popup";
 

 
export default function TodoList(): JSX.Element {

  const { tasks, users, fetchTasksAndUsers } = useGraphQLStore();

  useEffect(() => {
    // fetchTasksAndUsers();
  }, []);


  const [isOpen, setIsOpen] = useState(true)

  console.log('isOpen', isOpen)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
 
  return (
    <div className="min-h-screen relative z-100">

      <div className="flex items-center flex-col ">
      <h2 className="text-[60px] text-indigo-500 text-center my-10">Task Manager Application</h2>

      <button
          onClick={openModal}
          className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 "
        >
          Add User
        </button>
        
      </div>
      {isOpen  && <MyModal open={isOpen} onClose={closeModal} onOpen={openModal} />}
      

    </div>
  );
}