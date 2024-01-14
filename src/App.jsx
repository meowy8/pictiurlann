import BodyContainer from "./components/BodyContainer"
import NavBar from "./components/NavBar"
import MainContainer from "./components/MainContainer"
import { Outlet } from "react-router-dom"
import { AuthProvider } from "./components/AuthProvider"

function App() {


  return (
    <div className="bg-[#15061c] min-w-screen min-h-screen text-white flex flex-col items-center font-mono">
      <AuthProvider>
        <BodyContainer>
          <NavBar />
          <MainContainer>
            <Outlet />
          </MainContainer>
        </BodyContainer>
      </AuthProvider>
    </div>
  )
}

export default App
