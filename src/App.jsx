import BodyContainer from "./components/BodyContainer"
import NavBar from "./components/NavBar"
import MainContainer from "./components/MainContainer"
import { Outlet } from "react-router-dom"
import { AuthProvider } from "./components/AuthProvider"
import { SavedArticlesProvider } from "./components/SavedArticlesContext"

function App() {


  return (
    <div className="bg-[#F4DFB6] min-w-screen min-h-screen text-white flex flex-col items-center font-mono">
      <AuthProvider>
        <BodyContainer>
          <NavBar />
          <SavedArticlesProvider>
            <MainContainer>
              <Outlet />
            </MainContainer>
          </SavedArticlesProvider>
        </BodyContainer>
      </AuthProvider>
    </div>
  )
}

export default App
