import Link from "next/link"

const Header = () => {
  return (

    <header className="bg-cyan-950 text-soft-brown py-4 sticky top-0">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href={"/"} className="font-bold text-4xl hover:text-[#ff4e4e] hover:font-bold text-white">
        Ryo
        </Link>
        <ul className="flex gap-4 text-white">
          <li><Link href={"/"} className="hover:text-[#ff4e4e] hover:font-bold">Home</Link></li>
          <li><Link href={"/"} className="hover:text-[#ff4e4e] hover:font-bold">About</Link></li>
          <li><Link href={"/"} className="hover:text-[#ff4e4e] hover:font-bold">Service</Link></li>
          <li><Link href="/portofolio" className="hover:text-[#ff4e4e] hover:font-bold">Portofolio</Link></li>
          <li><Link href="/blog" className="hover:text-[#ff4e4e] hover:font-bold">Blog</Link></li> 
          <li><Link href={"/"} className="hover:text-[#ff4e4e] hover:font-bold">Contact</Link></li>
        </ul>
      </nav>
    </header>
    
    // navbar lama
    // bg-cyan-950 text-soft-brown py-4 sticky top-0
    // <header className="bg-cyan-950 text-white py-4  sticky top-0">
    //   <div className="font-bold text-4xl hover:text-[#ff4e4e] hover:font-bold text-white">Ryo</div>
    //   <nav className="container mx-auto flex justify-between items-center">
    //     <ul className="flex gap-4 text-white">
    //       <li><Link href={"/"} className="hover:text-[#ff4e4e] hover:font-bold">Home</Link></li>
    //       <li><Link href={"/"} className="hover:text-[#ff4e4e] hover:font-bold">About</Link></li>
    //       <li><Link href={"/"} className="hover:text-[#ff4e4e] hover:font-bold">Service</Link></li>
    //       <li><Link href="/portofolio" className="hover:text-[#ff4e4e] hover:font-bold">Portofolio</Link></li>
    //       <li><Link href="/blog" className="hover:text-[#ff4e4e] hover:font-bold">Blog</Link></li> 
    //       <li><Link href={"/"} className="hover:text-[#ff4e4e] hover:font-bold">Contact</Link></li>
    //     </ul>
    //   </nav>
    // </header>
  )
}

export default Header
