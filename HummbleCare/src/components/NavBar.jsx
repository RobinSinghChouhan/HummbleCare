function NavBar() {
    return <nav className="bg-white fixed border-b-1 py-1 border-green-500 z-40 w-full">
        <div className="flex justify-center sm:justify-between mx-5 sm:mx-10 items-center">
          <div className="flex items-center text-3xl font-bold">
            <img src="/tagline.png" className="h-10 sm:h-16"/>
            </div>
          <div className="hidden md:flex gap-10 text-md items-center text-gray-700 font-medium ">
            <div className="hover:cursor-pointer hover:text-green-600">Services</div>
            <div className="hover:cursor-pointer hover:text-green-600">About</div>
            <div className="hover:cursor-pointer hover:text-green-600">Contact</div>
            <div className="rounded-full bg-green-600 hover:bg-green-800 px-6 py-2 shadow-lg text-white hover:cursor-pointer">Get Started</div>
          </div>
        </div>
      </nav>
}
export default NavBar;