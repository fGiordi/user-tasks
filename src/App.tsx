import {  useState, useEffect,  } from "react";
import { useGraphQLStore } from "./store";
import MyModal from "./components/Popup";
import UserCard from "./components/UserCard";
import { useGlobalStore } from "./globals";
 
export default function TodoList(): JSX.Element {

  const { users, fetchTasksAndUsers, registerUser } = useGraphQLStore();

  const {email, username} = useGlobalStore();


  useEffect(() => {
    fetchTasksAndUsers();
  }, []);

  const [isOpen, setIsOpen] = useState(true)


  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const handleRegisterUser = async () => {
    await registerUser(username, email);
    closeModal();
  };
 
  return (
    <div className="min-h-[100vh] z-100 md:overflow-y-scroll ">
      <div className="flex items-center flex-col ">
      <h2 className="text-[60px] text-indigo-500 text-center my-10">Task Manager Application</h2>

        <button
          onClick={openModal}
          className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 "
        >
          Add User
        </button>
        
      </div>
      {isOpen  && <MyModal open={isOpen} onClose={closeModal} onOpen={openModal} action={handleRegisterUser} />}

      <div className="px-10 flex flex-col md:grid md:grid-cols-3 max-w-[1200px] gap-10 mt-10">
       {users?.map((user) => <UserCard id={user.id} key={user.id} username={user.username} email={user.email} tasks={user.tasks} />)}
      </div>      

    </div>
  );
}