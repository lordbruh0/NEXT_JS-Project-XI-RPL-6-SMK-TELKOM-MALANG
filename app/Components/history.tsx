import Image from "next/image";
import profilePic from "../../public/image/profile.jpg";

const History = () => {
  return (
    <section className="items-center p-10 ">
    <div className="flex">
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

  </div>
  </section>
  )
}

export default History