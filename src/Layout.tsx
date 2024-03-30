import { Outlet } from 'react-router'
import Navbar from './containers/Navbar/Navbar'

function Layout() {
  return (
    <main>
        <Navbar />
        <Outlet />
    </main>
  )
}

export default Layout