import Image from "next/image";
import profilePic from "../../public/image/profile.jpg";

const About = () => {
  return (
    <section className="p-10  ">
      <div className="flex justify-between items-center">
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
        </div>
        {/* Image Section */}
        <div className="w-1/4 m-12">
          <Image
            alt="Bakery shopping application"
            src="https://suarajember.com/wp-content/uploads/2023/11/smk-min.jpg"
            width={50}
            height={50}
            className="h-96 w-96 object-cover object-center" unoptimized></Image>
        </div>
      </div>

    </section>
  )
}

export default About