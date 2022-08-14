import { Outlet } from "react-router-dom"
import Header from "../partials/Header"
import Sidebar from "../partials/Sidebar"
import ToastContainer from "../partials/ToastContainer"

const MainLayout = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-slate-200">
      <Header />
      <div className="flex-1 flex h-0">
        <Sidebar />
        <div className="flex-1 w-0 h-full overflow-y-auto relative">
          <ToastContainer />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MainLayout