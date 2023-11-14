import {create} from 'zustand';
import axios from 'axios';

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface User {
  id: string;
  username: string;
  email: string;
}

interface GraphQLStore {
  tasks: Task[];
  users: User[];
  fetchTasksAndUsers: () => Promise<void>;
}

export const useGraphQLStore = create<GraphQLStore>((set) => ({
  tasks: [],
  users: [],
  fetchTasksAndUsers: async () => {
    try {
      const response = await axios.post(
        'https://p3xyeb9kt4.execute-api.eu-north-1.amazonaws.com/prod',
        {
          query: `
            {
              tasks {
                id
                title
                description
                completed
              }
              users {
                id
                username
                email
              }
            }
          `,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const { tasks, users } = response.data.data;
			console.log('response', response)

      set({
        tasks,
        users,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));
