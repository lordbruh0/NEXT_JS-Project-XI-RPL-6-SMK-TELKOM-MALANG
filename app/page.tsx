import Image from "next/image";
import profilePic from "../public/image/profile.jpg";

export default function Home() {
  return (
    <div className="bg-home bg-no-repeat bg-cover">
      <div className="bg-brown w-screen">
        <main className="container mx-auto">
          <section className="flex items-center p-10 h-screen">
            <div className="w-1/4">
              <Image
                src={profilePic}
                alt="Profile Picture"
                width={100}
                height={100}
                className="rounded-full w-64 h-64 object-cover" />
            </div>
            <div className="w-3/4">
              <h1 className="text-4xl font-bold text-soft-brown mb-4">Halo, aku Ryo</h1>
              <p className="mb-4">Frontend Developer</p>
              <p className="mb-4">Aku membuat sebuah pengalaman digital pengguna melihat dan berintraksi. Dari layout yang cantik hinggah desain yang rensponsive</p>
              {/* <div className="space-x-4 mt-2">
<Link href={`/portofolio`} target="_blank" className="border
border-soft-brown text-soft-brown py-2 px-4 rounded hover:bg-soft-brown
hover:text-brown">
Know Me More
</Link>
</div> */}
            </div>
          </section>
          <section className="flex items-center p-10 h-screen">
            {/* <div className="flex flex-col md:flex-row items-center
md:items-start py-12 px-4 md:px-16"> */}
            {/* Text Section */}
            <div className="w-3/4">
              <h2 className="text=soft-brown text-sm font-semibold uppercase mb-2">A bit of My Story</h2>
              <h3 className="text-3xl font-bold mb-4">How it all began</h3>
              <p className="font-semibold mb-4">
                I hidup dengan rasa penasaran, analisis, dan pemecah masalah di mana dunia teknologi sangat mudah saya gapai.
              </p>
              <p className="mb-4">
              My fascination with technology started at an early age,
experimenting with computers and simple code. After pursuing a degree in
software engineering, I began my journey as a frontend developer, where I
found my passion for creating beautiful and functional user interfaces. I
immersed myself in learning JavaScript, CSS, and various frontend
frameworks, refining my skills to build responsive and accessible
websites.

              </p>
              <p className="mb-4">
              Over the years, I’ve worked with teams across the globe,
honing my skills in modern development practices. Now, I take every
opportunity to create engaging digital experiences, continuously learning
and adapting to the ever-evolving world of frontend development.
              </p>
            </div>
            {/* Image Section */}
            <div className="w-1/4 m-12">
            <Image
            alt="Bakery shopping application"
            src="https://i.pinimg.com/736x/ef/08/f9/ef08f972e1b70c29f00398d52ee4ae55.jpg"
            width={50}
            height={50}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"unoptimized></Image>
            </div>
            {/* </div> */}
          </section>
        </main>
      </div>
    </div>
  );
}
