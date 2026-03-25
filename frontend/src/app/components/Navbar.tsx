import { Link } from "react-router";

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-[#FBFBF9]/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center">
            <span className="font-serif text-2xl lg:text-3xl tracking-wide text-stone-900">
              BadoPadron.
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-12 items-center">
            <a href="#gallery" className="text-xs font-medium text-stone-500 hover:text-stone-900 uppercase tracking-[0.2em] transition-colors">Gallery</a>
            <a href="#services" className="text-xs font-medium text-stone-500 hover:text-stone-900 uppercase tracking-[0.2em] transition-colors">Services</a>
          </div>

          <div className="flex items-center">
            <Link 
              to="/login"
              className="text-xs font-medium text-stone-50 bg-stone-900 px-8 py-3.5 hover:bg-stone-800 transition-colors uppercase tracking-[0.15em]"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}