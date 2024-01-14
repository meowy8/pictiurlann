import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [ isAuth, setAuth ] = useState(false)

  const signIn = () => {
    setAuth(true)
  }

  const signOut = () => [
    setAuth(false)
  ]

  return (
    <AuthContext.Provider value={{ isAuth, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
