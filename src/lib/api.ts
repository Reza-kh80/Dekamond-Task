
import { User } from "../../types";

export async function fetchRandomUser(): Promise<User | null> {
    try {
        const response = await fetch('https://randomuser.me/api/?results=1&nat=us');
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        const data = await response.json();
        return data.results[0] as User;
    } catch (error) {
        console.error('API Error:', error);
        return null;
    }
}