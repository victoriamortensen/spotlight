export default function NavBar() {
    return (
        <nav id="footermenu" className="flex justify-center z-50">
        <div className="fixed top-10 block w-fit">
            <ul className="flex rounded-full bg-white/70 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
                <li>
                    <a className="relative block px-3 py-2 transition hover:text-pink-600 no-underline" href="#home">Home</a>
                </li>
                <li>
                    <a className="relative block px-3 py-2 transition hover:text-pink-600 no-underline" href="#showcase">Showcase</a>
                </li>
                <li>
                    <a className="relative block px-3 py-2 transition hover:text-pink-600 no-underline" href='/Product-Manager-Victoria-Mortensen.pdf' target='_blank' rel='noopener noreferrer' >Resume</a>
                </li>
            </ul>
        </div>
        </nav>

    )
  }