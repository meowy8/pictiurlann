import Contact from "./components/Contact"
import BodyContainer from "./components/BodyContainer"
import NavBar from "./components/NavBar"
import WelcomeSection from "./components/WelcomeSection"
import MainContainer from "./components/MainContainer"
import { Outlet } from "react-router-dom"

function App() {


  return (
    <div className="bg-[#15061c] min-w-screen min-h-screen text-white flex flex-col items-center font-mono">
      <BodyContainer>
        <NavBar />
        <MainContainer>
          <Outlet />
        </MainContainer>
      </BodyContainer>
    </div>
  )
}

export default App
