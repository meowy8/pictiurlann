const PageHeading = ({ children }) => {
  const texture = 'media/bank-note.svg'

  return (
    <div className="flex p-4 rounded-xl"
    style={{
      backgroundImage: `url(${texture})`
    }}
    >
        <h1 className="bg-[#A94438] rounded-lg bg-opacity-100 p-2 text-4xl text-[#030637]">{children}</h1>
    </div>
  )
}

export default PageHeading