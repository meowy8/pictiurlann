import MainContainer from "./components/MainContainer"
import NavBar from "./components/NavBar"

function App() {


  return (
    <div className="bg-[#15061c] min-w-screen min-h-screen text-white flex flex-col items-center">
      <MainContainer>
        <NavBar />
      </MainContainer>
      
      
    </div>
  )
}

export default App
