import { UserType } from "../types/user";


export const getUsers = async (offset: number = 0, limit: number = 30): Promise<UserType[] | boolean> => {
    const response = await fetch(`https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${limit}`);
    if (response.ok) {
        const userData = await response.json();
        return userData.users;
    }
    return response.ok
}