export default function Story() {
  return (
    <div className="py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">My Story</h1>
      <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-10 md:mb-12">
        Four moments that define how I think about building.
      </p>

      {/* The Pattern */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
          <span className="text-neutral-400 dark:text-neutral-600">01</span>
          The Pattern
        </h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            I've been through three acquisitions—always as the person who built the thing that got bought.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Escape Restaurant Group. Salad Pangea. Good Uncle.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Each time: join early or found it, build the operations, scale it, exit.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            It's not a strategy I planned. It's just what happens when you build something that works.
          </p>
        </div>
      </section>

      {/* The Hardware Story */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
          <span className="text-neutral-400 dark:text-neutral-600">02</span>
          The Hardware Story
        </h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            When we started Good Uncle, no delivery vehicle existed that could do what we needed: keep 500 meals refrigerated during loading, then cook 150 of them while driving to customers.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            So I designed one.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            I led a 3-month engineering sprint with electrical engineers. We built a 24.8 kWh lithium-ion battery system powering a 12KW inverter, integrated ThermoKing refrigeration with Amana convection ovens, and added Victron cloud monitoring for real-time thermal management.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            The system was platform-agnostic—we deployed on both Mercedes-Benz Sprinters and Dodge ProMasters depending on unit availability. We manufactured 50 of these vehicles. Each was a mobile kitchen serving 150+ customers per shift without any on-site food prep.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            It wasn't just operations—it was product development at the intersection of hardware, software, and logistics.
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

      {/* The AI Transformation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
          <span className="text-neutral-400 dark:text-neutral-600">03</span>
          The AI Transformation
        </h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            In 2024, I faced a choice: continue running a 150-person delivery operation, or transform the business model entirely.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            I chose transformation.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            I partnered with a top-tier manufacturer and distributor, leveraging Aramark's relationships to handle production and logistics. Then I replaced our internal design, marketing, and operations functions with AI personas trained on our historical data.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            The result: a 2-person organization running a $5M CPG business with 60% growth. Same product, better quality, fraction of the cost.
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

      {/* The Gumball Story */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
          <span className="text-neutral-400 dark:text-neutral-600">04</span>
          The Gumball Story
        </h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            At age 10, I sold gumballs on the school bus for $0.50 a bag. Within 30 days, I had built a distribution network—classmates became wholesalers, each bus a market—and generated over $1,200 in revenue.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Then the principal forced me to return every penny.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 font-medium">
            The lesson: failure can be outside your control. Build anyway.
          </p>
        </div>
      </section>
    </div>
  )
}
