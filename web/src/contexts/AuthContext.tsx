import { ReactNode, createContext, useEffect, useState } from "react";
import Cookies  from "js-cookie";
import { api } from "../api/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type SignInProps = {
  email: string
  password: string
}

type AuthContextProps = {
  user: UserProps
  signIn(data : SignInProps): Promise<void>
  logOut: () => void
  isAuthenticated: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

type UserProps = {
  id: number
  name: string
  email: string
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children } : AuthProviderProps) {
  const navigate = useNavigate()
  const [ user, setUser ] = useState<UserProps>({} as any)
  const [ isAuthenticated, setIsAuthenticated ] = useState(false)

  async function getUser() {
    await api.get<UserProps>("/users/auth/me").then(x => setUser(x.data))
  }

  useEffect(() => {
    const token = Cookies.get("tokenJWT")
    if (token) {
      try {
        api.defaults.headers.Authorization = `Bearer ${token}`
        getUser()
        setIsAuthenticated(true)
      } catch (error : any) {
        logOut()
        toast.error("Token invalido!", {
          style: {
            borderRadius: '6px',
            background: '#323238',
            color: '#E1E1E6',
          },
        })
      }
      
    }
  }, [])

  async function signIn({ email, password }: SignInProps) {
    try {
      const jwt = await api.post("/users/auth", {email, password})
      Cookies.set("tokenJWT", jwt.data)
      api.defaults.headers.Authorization = `Bearer ${jwt.data}`
      getUser()
      setIsAuthenticated(true)
      toast.success("Autorizado!", { style: {
        borderRadius: '6px',
        background: '#323238',
        color: '#E1E1E6' } }
      )
      navigate("/")
    } catch (err : any) {
      setIsAuthenticated(false);
      toast.error(err.response.data, {
        style: {
          borderRadius: '6px',
          background: '#323238',
          color: '#E1E1E6',
        },
      })
    }
  }

  function logOut() {
    Cookies.remove("tokenJWT")
    setIsAuthenticated(false)
    delete api.defaults.headers.Authorization
    navigate("/login")
  }

  return (
    <AuthContext.Provider value={{isAuthenticated, signIn, logOut, user}}>
      {children}
    </AuthContext.Provider>
  )
}