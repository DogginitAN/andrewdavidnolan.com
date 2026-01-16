export default function Story() {
  return (
    <div className="py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">My Story</h1>
      <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-10 md:mb-12">
        Four moments that define how I think about building.
      </p>

      {/* The Evolution */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
          <span className="text-neutral-400 dark:text-neutral-600">01</span>
          The Evolution
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mb-6 text-neutral-800 dark:text-neutral-200">
          You Can't Scale Chaos
        </h3>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            When I started Escape Restaurant Group in 2009, I thought "operations" meant working harder than everyone else. I was wrong. We were profitable, but it was brutal. I was the system, and that meant the business couldn't grow beyond me.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            That was the spark. Over the next decade—through 'wichcraft and Salad Pangea—I became obsessed with a single question: How do you build a business that runs better without you?
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            By the time I reached Good Uncle, I wasn't just solving problems; I was engineering systems to prevent them. I realized that a scalable company isn't built on heroes; it's built on boring, reliable, bulletproof infrastructure.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            That shift—from "Hero" to "Architect"—is what allowed me to guide three different companies to successful exits.
          </p>
        </div>
      </section>

      {/* The View from the Passenger Seat */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
          <span className="text-neutral-400 dark:text-neutral-600">02</span>
          The View from the Passenger Seat
        </h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            In 2017, we had a problem. Our delivery vehicles were theoretically perfect—on paper. But in the field, they were failing.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            So I stopped reading reports and got in the truck. I sat in the passenger seat for weeks. I watched drivers struggle to reach ovens that were mounted three inches too high. I watched them fight with an app workflow that required three taps when they only had one free hand.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            I realized then that the gap between "Engineering" and "Operations" is where companies die.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            I became the bridge. I brought the drivers' frustrations to the engineers in language they understood (thermal constraints, UI latency). We redesigned the fleet and the app, not based on specs, but on human reality.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            The result wasn't just a better truck—it was a team that trusted the tools we gave them.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8 p-4 md:p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
          <div>
            <p className="text-xl md:text-2xl font-bold">50</p>
            <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mt-1">Vehicles Built</p>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-bold">24.8 kWh</p>
            <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mt-1">Battery System</p>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-bold">500</p>
            <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mt-1">Meal Capacity</p>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-bold">150</p>
            <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mt-1">Cooked Per Charge</p>
          </div>
        </div>
      </section>

      {/* The Pivot */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
          <span className="text-neutral-400 dark:text-neutral-600">03</span>
          The Pivot
        </h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            In 2024, I looked at our P&L and saw a hard truth. We had built an incredible logistics machine at Good Uncle—150 people, fleets of trucks, massive overhead—but the market had shifted. The value wasn't in the trucks anymore; it was in the brand.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Most leaders try to save the ship. I decided to build a speedboat.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            It was the hardest decision of my career: dismantling the logistics network I had spent years building to save the core business. We moved to a partnership model for the physical work, but that left a gap: Who runs the company?
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            I didn't want to re-hire a bloat of middle management. Instead, I bet on AI. I spent months encoding our brand voice, our decision matrices, and our operational logic into autonomous agents.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            It worked. We saved the business not by working harder, but by having the courage to completely reimagine how the work gets done.
          </p>
        </div>

        {/* Before/After */}
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <div className="p-5 md:p-6 bg-red-50 dark:bg-red-950/30 rounded-xl border border-red-200 dark:border-red-900">
            <p className="text-xs md:text-sm font-medium text-red-600 dark:text-red-400 mb-2">Before</p>
            <p className="text-2xl md:text-3xl font-bold text-red-700 dark:text-red-300">150</p>
            <p className="text-xs md:text-sm text-red-600 dark:text-red-400 mt-1">employees</p>
          </div>
          <div className="p-5 md:p-6 bg-green-50 dark:bg-green-950/30 rounded-xl border border-green-200 dark:border-green-900">
            <p className="text-xs md:text-sm font-medium text-green-600 dark:text-green-400 mb-2">After</p>
            <p className="text-2xl md:text-3xl font-bold text-green-700 dark:text-green-300">2</p>
            <p className="text-xs md:text-sm text-green-600 dark:text-green-400 mt-1">employees + AI</p>
          </div>
        </div>
      </section>

      {/* The Origin */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
          <span className="text-neutral-400 dark:text-neutral-600">04</span>
          The Origin
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mb-6 text-neutral-800 dark:text-neutral-200">
          The First Engine
        </h3>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            It wasn't about the candy. It was about the flow.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            At age 10, while other kids were trading Pokémon cards, I was analyzing the school bus. I realized it wasn't just transportation; it was a captive logistics network.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            I started selling gumballs, but I didn't stop at direct sales. I recruited friends to cover other bus routes, creating my first crude "distribution tier." I was learning about inventory pinch points and wholesale margins before I knew how to do long division.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Eventually, the Principal shut me down (my first regulatory hurdle) and made me return the proceeds. I didn't care about the lost cash. I was hooked on the mechanics of the machine.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 font-medium">
            That was the spark that has driven every role since: I don't just want to participate in the economy. I want to build the engine.
          </p>
        </div>
      </section>
    </div>
  )
}
