import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [ isAuth, setAuth ] = useState(false)

  const signIn = () => {
    setAuth(true)
  }

  return (
    <AuthContext.Provider value={{ isAuth, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
