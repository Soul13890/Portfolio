import { Link } from 'react-router-dom'
import Navbar from '../Navbar/navbar'

function Header() {

  return (
    <header className="flex justify-between content-center p-5 m-auto max-w-[1240px] w-full sticky">
      <Link to="/">
        <h1>Florian Badenes</h1>
      </Link>
      <Navbar/>
    </header>
  )
}

export default Header