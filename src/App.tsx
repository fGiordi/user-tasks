import {  useState, useEffect,  } from "react";
import { useGraphQLStore } from "./store";
import MyModal from "./components/Popup";
import UserCard from "./components/UserCard";
 
export default function TodoList(): JSX.Element {

  const { users, fetchTasksAndUsers } = useGraphQLStore();

  useEffect(() => {
    fetchTasksAndUsers();
  }, []);

  console.log('users', users)


  const [isOpen, setIsOpen] = useState(true)


  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
 
  return (
    <div className="min-h-full relative z-100">

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

      <div className="flex flex-col md:grid md:grid-cols-3 max-w-[1200px] gap-10 mt-10">
       {users?.map((user) => <UserCard key={user.id} username={user.username} email={user.email} tasks={[]} />)}
      </div>      

    </div>
  );
}