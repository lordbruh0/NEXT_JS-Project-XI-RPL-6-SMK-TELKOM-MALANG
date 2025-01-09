import Link from "next/link"

const Header = () => {
  return (
    <header className="w-full items-center h-24 flex justify-between pl-10 pr-10 mb-16 ">
      <div className="font-bold text-4xl">Ryo</div>
      <nav>
        <ul className="flex gap-4">
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/"}>About</Link></li>
          <li><Link href={"/"}>Service</Link></li>
          <li><Link href={"/"}>Portofolio</Link></li>
          <li><Link href={"/"}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
