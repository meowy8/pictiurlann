const BodyContainer = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-5/6 md:w-4/6 lg:w-3/6">
      {children}
    </div>
  )
}

export default BodyContainer