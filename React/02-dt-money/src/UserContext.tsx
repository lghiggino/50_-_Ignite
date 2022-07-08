import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Transaction, User } from "./App";

interface UserProviderProps {
    children: ReactNode
}

export const UserContext = createContext<User>({} as User);

export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<User>({
        token: "",
        userForToken: {
          email: "",
          firstname: "",
          id: "",
          lastname: "",
          phonenumber: "",
        }
      })

    async function getUserUser(user: any) {
        const axiosConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        };

        const { data } = await axios.get(
            `http://localhost:3333/transaction/${user.userForToken.id}`,
            axiosConfig
        )

        return data
    }
    
    useEffect(() => {
        const localToken = localStorage.getItem("@userToken")
        // descobrir uma maneira de passar o expiry do token e comparar de alguma forma
        if (!localToken) {
          return
        }
        const parsedLocalToken: User = JSON.parse(localToken)
        setUser(parsedLocalToken)
      }, [])


    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}