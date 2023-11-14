import {create} from 'zustand';
import axios from 'axios';

// create a global store with username and email state and setter
interface GlobalStore {
	username: string;
	email: string;
	setUsername: (username: string) => void;
	setEmail: (email: string) => void;
}

// create the global store
export const useGlobalStore = create<GlobalStore>((set) => ({
	username: '',
	email: '',
	setUsername: (username: string) => set({username}),
	setEmail: (email: string) => set({email}),
}));