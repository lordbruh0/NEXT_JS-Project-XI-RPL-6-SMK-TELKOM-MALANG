
const Footer = () => {
  return (
    <section className="items-center pl-20 pr-20  ">
      <div className="flex bg-transparent  justify-between items-center" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
        <h1 className="text-3xl font-bold m-10  text-white">Send Me a Message</h1>
        <input type="text" className="w-96 p-3 rounded-sm border m-10" placeholder="Your message" />

        <button className="bg-[#ff4e4e] text-white font-semibold text-lg p-3 px-5 rounded-md w-auto m-10">Send Message</button>
      </div>
    </section>
  )
}
export default Footer

