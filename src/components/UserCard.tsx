import { useState } from "react"
import { Task, User } from "../store"
import MyModal from "./Popup"

export default function UserCard({ username, email, tasks }: User) {
  const [clickedTask, setClickedTask] = useState(false)
  const [selectedTask, setSelectedTask] = useState<Task | null>()

  const onClose = () => {
    setClickedTask(false)
  }
  
  return (
    <article className="rounded-xl scrollbar-hide overflow-y-scroll border border-gray-700 bg-gray-800 p-4 max-h-[500px]  overflow-hidden">
      <div className="flex items-center gap-4">
        <img
          alt="Developer"
          src={`https://ui-avatars.com/api/?name=${username[0]}`}
          // src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>
          <h3 className="text-lg font-medium text-white">{username}</h3>
          <div className="flow-root">
            <ul className="-m-1 flex flex-wrap">
              <li className="p-1 leading-none">
                <a href="#" className="text-xs font-medium text-gray-300"> {email} </a>
              </li>

              <li className="p-1 leading-none">
                <a href="#" className="text-xs font-medium text-gray-300"> GitHub </a>
              </li>

              <li className="p-1 leading-none">
                <a href="#" className="text-xs font-medium text-gray-300">Website</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ul className="mt-4 space-y-2">
        <li>
          {tasks?.map((task) => {
            const isCheck = task.completed 
            return (
              <div
                onClick={() => {
                  setClickedTask(true)
                  setSelectedTask(task)
                }}
                className={`cursor-pointer block h-full rounded-lg border ${isCheck ? 'border-green-400' : 'border-gray-700 '} p-4 hover:border-pink-600`}
              >
                <div className="flex justify-between">
                  <div>
                  <strong className="font-medium text-white">{task.title}</strong>
                  <p className="mt-1 text-xs font-medium text-gray-300">
                    {task.description}
                  </p>
                  </div>
                  <input type="checkbox" className="h-6 w-6 text-indigo-600 rounded-md" checked={isCheck} />
                </div>
              </div>
            )
          })}
        </li>
      </ul>
      <MyModal open={clickedTask} onClose={onClose} type="edit" action={() => null} />
    </article>
  )
}
