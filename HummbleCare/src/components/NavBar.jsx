function NavBar() {
    return <nav className="border-b-1 pb-5 border-green-500">
        <div className="flex justify-between mx-10 mt-5 items-center">
          <div className="text-3xl font-bold text-green-500">Hummble Care</div>
          <div className="flex gap-10 text-xl items-center text-gray-700 font-medium ">
            <div className="hover:cursor-pointer hover:text-green-600">Services</div>
            <div className="hover:cursor-pointer hover:text-green-600">About</div>
            <div className="hover:cursor-pointer hover:text-green-600">Contact</div>
            <div className="rounded-4xl bg-green-600 hover:bg-green-800 px-6 py-3 text-white hover:cursor-pointer">Get Started</div>
          </div>
        </div>
      </nav>
}
export default NavBar;