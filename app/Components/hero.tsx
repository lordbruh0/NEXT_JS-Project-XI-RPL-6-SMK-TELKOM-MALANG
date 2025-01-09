import Image from "next/image";
import profilePic from "../../public/image/profile.jpg";

const Hero = () => {
  return (
    <section className="items-center p-10 ">
    <div className="flex justify-between items-center">
                  {/* Profile picture */}
                  <div className="w-2/5 ">
                    <Image
                      src={profilePic}
                      alt="Profile Picture"
                      width={100}
                      height={100}
                      className="w-96 h-96 object-cover rounded-3xl" />
                  </div>
                  <div className="w-2/4">
    
                    {/* Keterangan data diri */}
                    <div>
                      <h1 className="text-4xl font-bold text-white mb-2">Hai, I'am Ryo</h1>
                      <h1 className="text-4xl mb-4">UI / UX DESIGNER</h1>
                      <p className="mb-5">Aku adalah seorang designer di sekolah SMK Telkom Malang. Aku telah mengikuti banyak project dari sekolah ataupun project dari luar sekolah. Saya juga sering mengikuti lomba - lomba software dev</p>
                    </div>
    
                    {/* Email dan Github */}
                    <div className="mb-9">
                      <div className="flex">
                        <p className="text-white font-bold text-lg mr-auto">Email:</p>
                        <p className="text-white font-bold text-lg mr-2">Github:</p>
                        {/* <p>GitHub</p> */}
                      </div>
                      <div className="flex">
                        <p className="text-white-50 font-normal text-lg mr-auto">ryohariyono17@gmail.com</p>
                        <p className="text-white-50 font-normal text-lg mr-2">lordbruh0</p>
                        {/* <p>GitHub</p> */}
                      </div>
                    </div>
    
                    {/* tombol */}
                    <div className="mt-5 flex">
                      <button className="bg-[#ff4e4e] text-white font-semibold text-lg py-2 px-4 rounded-lg mr-24 w-1/4">More About Me</button>
                      <button className="bg-white text-[#ff4e4e] font-semibold text-lg py-2 px-4 rounded-lg w-1/4">Contact Me</button>
                    </div>
                  </div>
                </div>
              </section>
  )
}

export default Hero