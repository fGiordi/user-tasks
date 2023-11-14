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
  registerUser: (username: string, email: string) => Promise<void>;
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
            query ExampleQuery {
              users {
                id
                username
                email
                tasks {
                  id
                  title
                  description
                  completed
                }
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
      console.log('response', response.data)

      set({
        tasks,
        users,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  registerUser: async (username: string, email: string) => {
    try {
      const response = await axios.post(
        'https://p3xyeb9kt4.execute-api.eu-north-1.amazonaws.com/prod',
        {
          query: `
            mutation RegisterUser($username: String!, $email: String!) {
              registerUser(username: $username, email: $email) {
                id
                username
                email
              }
            }
          `,
          variables: {
            username,
            email,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const newUser = response.data.data.registerUser;
      console.log('new User', newUser)

      set((state) => ({
        users: [...state.users, newUser],
      }));
    } catch (error) {
      console.error('Error registering user:', error);
    }
  },
}));
