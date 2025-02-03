import afterHero from "../assets/afterHero.png";

export default function AfterHero() {
  return (
    <div className="relative rounded-xl container mx-auto pt-10 md:pt-20 px-4">
      <div className="mx-auto max-w-6xl relative">
        <div className="flex flex-col p-6 sm:p-12 rounded-3xl bg-[#020B2D] items-center gap-6 md:flex-row md:justify-between md:gap-8">
          <div className="max-w-md space-y-4 text-center md:text-left">
            <h1 className="text-2xl font-bold leading-tight text-white md:text-4xl">
              Early Learning AI Teacher
            </h1>
            <p className="text-sm text-gray-300 md:text-base">
              Develop the skills your child needs to succeed with 1:1 voice-based learning games and lessons.
            </p>
            <button  className="transform rounded-lg bg-[#B372B0] px-4 py-2 md:px-6 md:py-3 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95">
             <a href="https://buddy.ai/en/" target="_blank"> Try Buddy Free </a>
            </button>
          </div>
        </div>

        {/* Image positioned outside the main div, hidden on mobile */}
        <div className="absolute top-[-50px] right-[12px] md:top-[-80px] md:right-[24px] hidden md:block">
          <img src={afterHero} className="w-48 sm:w-60 md:w-72" alt="After Hero Image" />
        </div>
      </div>
    </div>
  );
}
