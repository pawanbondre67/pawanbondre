import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="text-white xl:py-2 sticky top-0 flex items-center justify-between px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 z-50 lg:static">
      <a className="flex items-center gap-2" href="/">
        <span className="text-lg font-bold">PB</span>
      </a>
      <nav className="hidden lg:flex items-center gap-6">
        <a className="text-sm font-medium hover:underline" href="/#intro">Intro</a>
        <a className="text-sm font-medium hover:underline" href="/#experience">Experience</a>
        <a className="text-sm font-medium hover:underline" href="/#skills">Skills</a>
        <a className="text-sm font-medium hover:underline" href="/#projects">Projects</a>
        <a className="text-sm font-medium hover:underline" href="/#education">Education</a>
        <a className="text-sm font-medium hover:underline" href="/#services">Services</a>
        <a className="text-sm font-medium hover:underline" href="/#contact">Contact</a>
      </nav>



      <button
        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 lg:hidden"
        type="button"
        aria-haspopup="dialog"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={toggleMenu}
      >
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
        <span className="sr-only">Toggle navigation menu</span>
        
      </button>


      {menuOpen && (
        <div id="mobile-menu" className="absolute top-16 flex flex-col items-start px-8 right-0 h-screen bg-secondary w-72 text-white p-4 lg:hidden">
          <a className="block text-lg font-medium py-2" href="#intro">Intro</a>
          <a className="block text-lg font-medium py-2" href="#experience">Experience</a>
          <a className="block text-lg font-medium py-2" href="#skills">Skills</a>
          <a className="block text-lg font-medium py-2" href="#projects">Projects</a>
          <a className="block text-lg font-medium py-2" href="#education">Education</a>
          <a className="block text-lg font-medium py-2" href="#services">Services</a>
          <a className="block text-lg font-medium py-2" href="#contact">Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header;