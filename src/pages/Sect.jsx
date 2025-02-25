import { Star, Shield, Send } from "lucide-react"

export default function CreditCardHero() {
  return (
    <div className="text-white">
      <div className="container mx-auto px-6 sm:px-12 md:px-28 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          {/* Left Column */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Empowering Your Business,
              <br />
             
            </h1>
            <p className="text-slate-400 mt-12 text-base sm:text-lg md:text-xl max-w-lg">
              With the right credit card, you can improve your financial life by building credit, earning rewards and
              saving money. But with hundreds of credit cards on the market, finding the best one can be overwhelming.
            </p>
            {/* <button className="bg-cyan-400 text-slate-900 px-8 py-3 rounded-lg font-medium hover:bg-cyan-300 transition-colors">
              Get Started
            </button> */}
          </div>

          {/* Right Column */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex gap-6 md:gap-4 items-start">
              <div className="p-4 bg-cyan-950/50 rounded-full">
                <Star className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">Custom Solutions</h3>
                <p className="text-slate-400 text-sm sm:text-base md:text-lg">
                Our team specializes in creating bespoke software and tech services that address your specific business needs, helping you stay ahead in the competitive market.
                </p>
              </div>
            </div>

            <div className="flex gap-6 md:gap-4 items-start">
              <div className="p-4 bg-cyan-950/50 rounded-full">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">Seamless Integration</h3>
                <p className="text-slate-400 text-sm sm:text-base md:text-lg">
                Our solutions are built to seamlessly integrate with your existing infrastructure, making it easier than ever to improve efficiency and optimize workflows.
                </p>
              </div>
            </div>

            <div className="flex gap-6 md:gap-4 items-start">
              <div className="p-4 bg-cyan-950/50 rounded-full">
                <Send className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">Effortless Scalability</h3>
                <p className="text-slate-400 text-sm sm:text-base md:text-lg">
                As your business grows, so do your needs. Our solutions are built with scalability in mind, allowing you to easily adapt and expand without disruption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
