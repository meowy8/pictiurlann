import PageHeading from "./PageHeading"
import { useAuth } from "./AuthProvider"
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const { signIn } = useAuth()
  const navigateTo = useNavigate()

  const handleSignIn = (e) => {
    e.preventDefault()
    signIn()
    navigateTo('/')
  }

  return (
    <section className="w-full text-[#030637]">
      <PageHeading>Sign In</PageHeading>
      <form type="submit" onSubmit={(e) => handleSignIn(e)} className="flex flex-col gap-4 py-8">
        <label htmlFor="username">
          Username:
          <input type="text" id="username" value="user123" readOnly className="text-black"/>
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" id="password" value="vd6vc6s7v6cs7" readOnly className="text-black"/>
        </label>
        <button>Sign In</button>
      </form>
    </section>
  )
}

export default SignIn