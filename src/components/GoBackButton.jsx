import { useNavigate } from 'react-router-dom'

const GoBackButton = () => {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate(-1)} className='text-sm py-2 flex items-center gap-2 hover:underline underline-offset-4'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
      </svg>
      Go Back
    </button>
  )
}

export default GoBackButton