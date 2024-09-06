import logo from '../assets/foodLogo.jpg';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-5 py-2 sm:flex-row flex-col">
        <div className="flex items-center">
            <img className="w-[60px]" src={logo} alt="" />
            <h2 className="font-bold text-gray-600 ml-2">WOW FOODS</h2>
        </div>
        <div className="flex gap-x-5 items-center">
            <h2 className="text-gray-600 hover:text-pink-600 hover:font-semibold hover:cursor-pointer">Home</h2>
            <h2 className="text-gray-600 hover:text-pink-600 hover:font-semibold hover:cursor-pointer">About</h2>
            <h2 className="text-gray-600 hover:text-pink-600 hover:font-semibold hover:cursor-pointer">Foods</h2>
            <h2 className="text-gray-600 hover:text-pink-600 hover:font-semibold hover:cursor-pointer">Contact</h2>
        </div>
    </nav>
  )
}

export default Navbar