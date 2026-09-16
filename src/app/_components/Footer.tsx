import Link from 'next/link'

export default function Footer() {
    return (

        <footer className="bg-teal-950 text-white/80 font-light py-5">

          {/* Top footer */}
          <div className="flex flex-wrap md:gap-20 gap-10 justify-between w-[85%] mx-auto py-15">

            {/* Main Column */}
            <div className="flex flex-col flex-wrap gap-3 h-full max-w-md">

              {/* Logo */}
              <Link href="/">
                <div className="flex items-center gap-x-2 text-white">
                    <svg className="text-teal-200 size-5 md:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                    <p className="font-bold font-heading text-2xl md:text-3xl">EnerTrack</p>
                </div>
              </Link>
              
              <p className="text-sm">
                Intelligent energy monitoring solutions for more efficient and sustainable industrial operations
              </p>
            
              {/* Socialmedia */}
              <div className="flex mt-auto h-full gap-5 pt-5 text-teal-200">
                <Link href='#'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 1024 1024">
                    <path d="M0 0h1024v1024H0z" fill="none" />
                    <path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6c44.2 0 82.1 3.3 93.2 4.8v107.9z" />
                  </svg>                
                </Link>
                <Link href='#'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="currentColor" fillRule="evenodd" d="M1 2.838A1.84 1.84 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.84 1.84 0 0 1 21.161 23H2.838A1.84 1.84 0 0 1 1 21.161zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708zm-5.5 10.403h3.208V9.25H4.208zM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0" clipRule="evenodd" />
                  </svg>                
                </Link>
                <Link href='#'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="currentColor" fillRule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1s3.362.013 4.534.066s1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12s-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.4 5.4 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066s-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.4 5.4 0 0 1-1.949-1.268a5.4 5.4 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12s.013-3.362.066-4.534s.24-1.972.511-2.672a5.4 5.4 0 0 1 1.27-1.948a5.4 5.4 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511m8.98 1.98c-1.16-.053-1.508-.064-4.445-.064s-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.4 3.4 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445s.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064s3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445s-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.4 3.4 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379m-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986M8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996m10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89" clipRule="evenodd" />
                  </svg>                
                </Link>
              </div>
            </div>
            
            {/* Sections column */}
            <div className="flex flex-wrap md:gap-20 gap-10 leading-12">
                <ul>
                  <li>
                    <h4 className="font-heading text-white font-semibold tracking-[0.25em]">COMPANY</h4>
                  </li>

                  <li><Link href='/about'>About us</Link></li>
                  <li><Link href='/products'>Our products</Link></li>
                  <li><Link href='/contact'>Contact</Link></li>
                </ul>

                <ul>
                  <li>
                    <h4 className="font-heading text-white font-semibold tracking-[0.25em]">SOLUTIONS</h4>
                  </li>
                  
                  <li><Link href="/products?tab=energy-monitoring">Energy Monitoring</Link></li>  
                  <li><Link href="/products?tab=power-quality">Power quality</Link></li>
                  <li><Link href="/products?tab=energy-management">Energy Management</Link></li>
                </ul>

              {/* TODO. Routes - mailto... */}
                <ul>
                  <li>
                    <h4 className="font-heading text-white font-semibold tracking-[0.25em]">CONTACT</h4>
                  </li>
                  
                  <li><Link href="mailto:info@enertrack.com">info@enertrack.com</Link></li>
                  <li><Link href="tel:+000000000">+00 000 00 00</Link></li>
                  <li>Street, city, country</li>
                </ul>

                <ul>
                  <li><h4 className="font-heading text-white font-semibold tracking-[0.25em]">LEGAL</h4></li>
                  <Link href='#'><li>Privacy Policy</li></Link>
                  <Link href='#'><li>Terms of use</li></Link>
                </ul>
            </div>
          </div>

          {/* Bottom footer */}
          <div className="font-extralight text-sm text-center text-white/80">
            © 2026 EnerTrack · Designed and developed by Desirée Rueda Torres
          </div>
        </footer>
    );
}
