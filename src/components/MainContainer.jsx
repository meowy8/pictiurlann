import PropTypes from 'prop-types'

const MainContainer = ({ children }) => {

  return (
    <div className="flex p-2 w-full">
      {children}
    </div>
  )
}

export default MainContainer

MainContainer.propTypes = {
  children: PropTypes.object
}