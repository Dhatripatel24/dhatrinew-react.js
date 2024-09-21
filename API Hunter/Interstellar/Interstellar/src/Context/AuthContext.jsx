import { createContext, useState } from "react";

let authdata = {
    isAuth: false,
    token: null
}

export const AuthContext = createContext()

function AuthContextProvider({children}) {

    const [auth, setauth] = useState(authdata)

    const loginUser = (value) => {
        setauth({ isAuth: true, token: value })
    }
    const logoutUser = (value) => {
        setauth({ isAuth: false, token: null })
    }

    return <AuthContext.Provider value={{ loginUser, logoutUser, auth }}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;
