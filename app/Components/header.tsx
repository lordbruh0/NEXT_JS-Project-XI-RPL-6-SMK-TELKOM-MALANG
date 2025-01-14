import Link from "next/link"

const Header = () => {
  return (

    <header className="bg-cyan-950 text-soft-brown py-4 sticky top-0">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href={"/"} className="text-2xl font-bold">
        Ryo
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href={"/"} className="hover:text-white">
            Home
            </Link>
          </li>
          <li>
            <Link href="/portofolio" className="hover:text-white">
            Portofolio
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-white">
            Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    
    // navbar lama
    // <header className="w-full items-center h-24 flex justify-between pl-10 pr-10 mb-16 ">
    //   <div className="font-bold text-4xl">Ryo</div>
    //   <nav>
    //     <ul className="flex gap-4">
    //       <li><Link href={"/"}>Home</Link></li>
    //       <li><Link href={"/"}>About</Link></li>
    //       <li><Link href={"/"}>Service</Link></li>
    //       <li><Link href={"/"}>Portofolio</Link></li>
    //       <li><Link href={"/"}>Contact</Link></li>
    //     </ul>
    //   </nav>
    // </header>
  )
}

export default Header
