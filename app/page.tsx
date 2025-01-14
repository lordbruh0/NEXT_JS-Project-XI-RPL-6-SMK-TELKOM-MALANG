import Image from "next/image";
import profilePic from "../public/image/profile.jpg";
import Header from "../app/Components/header";
import Hero from "./Components/hero";
import Skill from "./Components/skill";
import About from "./Components/about";
import History from "./Components/history";
import Footer from "./Components/footer";
import Policy from "./Components/policy";

export default function Home() {
  return (
    <div className="bg-home bg-no-repeat bg-cover">
      <div className="bg-black w-screen">
        <main className="container mx-auto">

          {/* <Header /> */}
          <Hero />
          <Skill />
          <About />
          <History />
          <Footer />
          <Policy />


          {/* <nav className="w-full items-center h-24 flex justify-between pl-10 pr-10 mb-16">
            <div className="font-bold text-4xl">Ryo</div>
            <ul className="flex gap-4">
              <li><Link href={"/"}>Home</Link></li>
              <li><Link href={"/"}>About</Link></li>
              <li><Link href={"/"}>Service</Link></li>
              <li><Link href={"/"}>Portofolio</Link></li>
              <li><Link href={"/"}>Contact</Link></li>
            </ul>
          </nav> */}



          {/* 

          <section className="items-center p-10 mb-10">
            <div className="flex">
              
              <div className="w-2/5 ">
                <Image
                  src={profilePic}
                  alt="Profile Picture"
                  width={100}
                  height={100}
                  className="w-96 h-96 object-cover rounded-3xl" />
              </div>
              <div className="w-2/4">

                
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">Hai, I'am Ryo</h1>
                  <h1 className="text-4xl mb-4">UI / UX DESIGNER</h1>
                  <p className="mb-5">Aku adalah seorang designer di sekolah SMK Telkom Malang. Aku telah mengikuti banyak project dari sekolah ataupun project dari luar sekolah. Saya juga sering mengikuti lomba - lomba software dev</p>
                </div>

                
                <div className="mb-9">
                  <div className="flex">
                    <p className="text-white font-bold text-lg mr-auto">Email:</p>
                    <p className="text-white font-bold text-lg mr-2">Github:</p>

                  </div>
                  <div className="flex">
                    <p className="text-white-50 font-normal text-lg mr-auto">ryohariyono17@gmail.com</p>
                    <p className="text-white-50 font-normal text-lg mr-2">lordbruh0</p>
                    
                  </div>
                </div>


                <div className="mt-5 flex">
                  <button className="bg-[#ff4e4e] text-white font-semibold text-lg py-2 px-4 rounded-lg mr-24 w-1/4">More About Me</button>
                  <button className="bg-white text-[#ff4e4e] font-semibold text-lg py-2 px-4 rounded-lg w-1/4">Contact Me</button>
                </div>
              </div>
            </div>

            
            <div className="flex justify-center mt-24">
              <div className="bg-white p-4 rounded-lg shadow-lg m-20 w-1/5">
                <p className="text-[#ff4e4e] font-bold text-xl mb-2">UI/UX Designer</p>
                <p className="text-black">Desain App Mobile dan Website</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg m-20 w-1/5">
                <p className="text-[#ff4e4e] font-bold text-xl mb-2">Mobile Dev</p>
                <p className="text-black">App Mobile menggunakan Flutter</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg m-20 w-1/5">
                <p className="text-[#ff4e4e] font-bold text-xl mb-2">Web Dev</p>
                <p className="text-black">Frontend Developer</p>
              </div>
            </div>
          </section> */}


          {/* <section className="flex items-center p-10 mb-10">
            <div className="w-3/4">
              <h2 className="text=soft-brown text-sm font-semibold uppercase mb-2">A bit of My Story</h2>
              <h3 className="text-3xl font-bold mb-4">How it all began</h3>
              <p className="font-semibold mb-4">
                Aku selalu suka dengan namanya teknologi, sejak kelas 10 saya jatuh cinta dengan coding.
              </p>
              <p className="mb-4">
                Aku memulai perjalanan karir saya sebagai seorang designer, lebih tepatnya UI/UX Designer. Seiring perjalanan waktu, desain ku semakin berkembang dan aku merasa bahwa aku lahir untuk desain. Karena ini aku menjadi hipster dari tim yang bernama Grounded, tim yang bergerak di bidang IoT dan Software Development.

              </p>
              <p className="mb-4">
                Aku mulai belajar Flutter, sebuah bahasa yang digunakan untuk membuat aplikasi mobile. Aku belajar Flutter karena keperluan lomba dan juga project. Dari kelas 10, aku mulai belajar Flutter dan aku merasa bahwa Flutter adalah bahasa yang sangat mudah dipelajari. Bersama dengan teman saya, Haza, kami adalah salah satu Mobile Dev terbaik di sekolah kami. Saat ini saya hanya ingin berfokus kepada frontend dari web atau mobile.
              </p>
            </div> */}
          {/* Image Section */}
          {/* <div className="w-1/4 m-12">
              <Image
                alt="Bakery shopping application"
                src="https://suarajember.com/wp-content/uploads/2023/11/smk-min.jpg"
                width={50}
                height={50}
                className="h-96 w-96 object-cover object-center" unoptimized></Image>
            </div>
          </section> */}

          {/* <section className="items-center p-10"> */}
          {/* <div className="flex">
              <div className="w-1/2 mr-auto">
                <p className="font-semibold text-2xl text-[#ff4e4e] pb-3">My Story</p>
                <h1 className="font-bold text-5xl ">Some History of My Life,</h1>
                <h1 className="font-bold text-5xl pb-4">2007-2025</h1>

                <div className="p-5">
                  <p>Saat jalan terasa sulit, berarti anda berada di jalan yang benar, karena untuk berkembang, harus berani sulit.</p>
                  <div className="w-1/3 flex items-center">
                    <Image
                      src={profilePic}
                      alt="Profile Picture"
                      width={100}
                      height={100}
                      className="w-20 h-20 object-cover rounded-full mt-4" />
                    <div className="ml-7">
                      <p className="text-[#ff4e4e] text-lg font-bold">Date Of Birth</p>
                      <p className="text-white-50 text-base">17 Oktober 2007</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>

                <div className="flex pb-4">
                  <p className="font-bold text-xl pr-10">2007</p>
                  <p className="text-xl">Aku lahir di Surabaya.</p>
                </div>
                <div className="flex pb-4">
                  <p className="font-bold text-xl pr-10">2012</p>
                  <p className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="flex pb-4">
                  <p className="font-bold text-xl pr-10">2017</p>
                  <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="flex pb-4">
                  <p className="font-bold text-xl pr-10">2020</p>
                  <p className="text-xl">Lorem ipsum, dolor sit amet consectetur.</p>
                </div>
                <div className="flex pb-4">
                  <p className="font-bold text-xl pr-10">2022</p>
                  <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit.  </p>
                </div>
                <div className="flex pb-4">
                  <p className="font-bold text-xl pr-10">2025</p>
                  <p className="text-xl">Lorem ipsum dolor sit amet, consectetur.</p>
                </div>

                <button className="bg-[#ff4e4e] text-white font-semibold text-lg py-3 px-5 rounded-lg w-auto mt-5">Download My CV</button>


              </div>

            </div> */}
          {/* <div className="justify-center flex bg-transparent mt-28 p-10" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
              <h1 className="text-3xl font-bold m-auto">Send Me a Message</h1>
              <input type="text" className="w-96 p-3 rounded-sm border m-auto] " placeholder="Your message" />

              <button className="bg-[#ff4e4e] text-white font-semibold text-lg p-3 px-5 rounded-md w-auto m-auto">Send Message</button>
            </div> */}
          {/* </section> */}
        </main>
      </div>
    </div>
  );
}
