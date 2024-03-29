import Navbar from "./components/Navbar"
import imageDesktop from "/images/image-intro-desktop.jpg"
import imagemobile from "/images/image-intro-mobile.jpg"
import Body from "./components/Body"
import Footer from "./components/Footer"
import bgheaderRightDesktop from "/images/bg-pattern-intro-right-desktop.svg"
import bgheaderLeftdesktop from "/images/bg-pattern-intro-left-desktop.svg"

export default function App() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col">
        {/* header */}
        <article id="Header" className=" bg-DarkViolet ">
          <Navbar />
          <div className="absolute right-0">
            <img src={bgheaderRightDesktop} alt="" className="hidden sm:block"/>
          </div>

          <div className="flex flex-col-reverse sm:flex-row text-white sm:p-16 sm:mt-8">
            <div className="flex flex-col gap-4 sm:justify-start justify-center items-center sm:items-start sm:w-1/2 w-full p-8
            bg-bg-headerLeft-mobile bg-no-repeat sm:bg-none">
              <hr className="border-2 w-32" />
              <h1 className="font-semibold text-4xl text-center sm:text-start">Humanizing your insurance.</h1>
              <p className="text-VeryLiGray text-center sm:text-justify">Get your life insurance coverage easier and faster. We blend our expertise
                and technology to help you find the plan that’s right for you. Ensure you
                and your loved ones are protected.</p>
              <button className="uppercase px-2 border-2 ">view plans</button>
            </div>
            <div className="sm:w-1/2 w-full">
              <img src={imageDesktop} alt="" className="hidden sm:block absolute w-96" />
              <img src={imagemobile} alt="" className="sm:hidden w-full" />
            </div>
          </div>
          <div className="absolute -translate-y-[30%]">
              <img src={bgheaderLeftdesktop} alt="" className="hidden sm:block"/>
          </div>
        </article>
        {/* body */}
        <article id="Body" className="sm:mt-60 mt-20 p-16">
          <Body />
        </article>
        {/* footer */}
        <article className="mt-10 sm:p-16">
          <Footer />
        </article>

      </section>
    </main>
  )
}