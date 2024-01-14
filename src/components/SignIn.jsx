import PageHeading from "./PageHeading"
import { useAuth } from "./AuthProvider"

const SignIn = () => {
  const { signIn } = useAuth()

  return (
    <section className="w-full">
      <PageHeading>Sign In</PageHeading>
      <form className="flex flex-col gap-4 py-8">
        <label htmlFor="username">
          Username:
          <input type="text" className="text-black"/>
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" className="text-black"/>
        </label>
      </form>
    </section>
  )
}

export default SignIn