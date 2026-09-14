import Link from 'next/link'

export default function Header() {
  return (
    
    <header className="sticky top-0 z-50 flex items-center justify-between bg-black text-white 
    px-4 py-4 md:px-10 md:py-6">

        {/* Logo */} 
        <Link href="/">
            <div className="flex items-center gap-x-2">
                <svg className="text-teal-200 size-5 md:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>

                <p className="font-bold font-heading text-2xl md:text-3xl">EnerTrack</p>
            </div>
        </Link>


        {/* Navigation */}        
        <nav className="hidden md:flex gap-6"> 
            <Link href="/products">
                <p className="hover:text-teal-300 transition duration-300 ease-in-out">Products</p> 
            </Link>

            <Link href="/about">
                <p  className="hover:text-teal-300 transition duration-300 ease-in-out">About</p>
            </Link>

            <Link href="/contact">
                <p className="hover:text-teal-300 transition duration-300 ease-in-out">Contact</p> 
            </Link>
        </nav> 

        {/* Mobile menu button */}
        {/* TODO. OPEN MENU FUNCTIONALITY */}
        <button className="md:hidden" aria-label="Open menu">
            <svg className="size-7"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
    </header>
  );
}
