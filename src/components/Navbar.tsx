import Histories from "./Histories"
import Search from "./Search"

const Navbar = () => {
  return (
    <nav className="flex item-center justify-between">
      <div className="w-full max-w-5xl mx-auto flex item-center justify-between">
        <div>
          <a href="/" className="text-2xl font-semibold">
            Forecast
          </a>
        </div>
        <Search />
        <Histories />
      </div>
    </nav>
  )
}

export default Navbar
