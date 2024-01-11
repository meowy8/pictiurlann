import { useNavigate } from 'react-router-dom'

const GoBackButton = () => {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate(-1)}>Go Back</button>
  )
}

export default GoBackButton