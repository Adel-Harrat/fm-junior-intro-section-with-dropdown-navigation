function Main() {
  return (
    <main className="md:flex md:justify-between md:flex-row-reverse md:max-w-5xl mx-auto md:mx-10 lg:mx-auto md:gap-20">
      <picture>
        <source
          media="(max-width:768px)"
          srcSet="./images/image-hero-mobile.png"
        />
        <source
          media="(min-width:769px)"
          srcSet="./images/image-hero-desktop.png"
        />
        <img
          src="./images/image-hero-mobile.png"
          alt="illustration"
          className="md:max-w-sm"
        />
      </picture>

      <section>
        <article className="my-10 text-center md:text-left">
          <h1 className="text-4xl font-bold text-tw-black md:text-7xl">
            Make <br className="hidden md:block" />
            remote work
          </h1>
          <p className="text-tw-gray px-3 md:px-0 md:max-w-md mt-5 md:mt-10">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-tw-black text-white font-bold px-5 py-3 rounded-2xl mt-5 md:mt-10 border-2 border-tw-black hover:bg-tw-white hover:text-tw-black transition duration-300">
            Learn more
          </button>
        </article>

        <section className="grid grid-cols-4 gap-5 px-5">
          <img
            src="./images/client-databiz.svg"
            alt="client databiz"
            className="w-20"
          />
          <img
            src="./images/client-audiophile.svg"
            alt="client audiophile"
            className="w-20"
          />
          <img
            src="./images/client-meet.svg"
            alt="client meet"
            className="w-20"
          />
          <img
            src="./images/client-maker.svg"
            alt="client maker"
            className="w-20"
          />
        </section>
      </section>
    </main>
  );
}

export default Main;
