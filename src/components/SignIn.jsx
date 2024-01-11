import PageHeading from "./PageHeading"

const SignIn = () => {
  return (
    <section className="w-full">
      <PageHeading>Sign In</PageHeading>
      <div className="flex flex-col gap-4 py-8">
        <label htmlFor="username">
          Username:
          <input type="text" className="text-black"/>
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" className="text-black"/>
        </label>
      </div>
    </section>
  )
}

export default SignIn