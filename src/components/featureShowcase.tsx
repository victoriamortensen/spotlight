const features = [
  {
    name: 'Push to deploy.',
    description:
      'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
  },
  {
    name: 'Delivery Service Provider (DSP) Integrations',
    description:
      'As a Technical Product Manager, I was intimately involved with the use of UberEats, DoorDash, and Grubhub APIs. There are not many pages in those API docs, which I have not scanned! The ultimate challenge across multiple features was one of conceptually harmonizing the different APIs to create a unified, coherent representation of menu items, orders, and statuses across all the original APIs. While ensuring that a lowest common denominator did not handicap our opportunities on any single DSP. I would write up documentation on how we could create new features based on my knowledge of the DSP platforms and knowing one could bend them to our will. This would include technical API example requests in our product design docs using Postman and similar tooling.',
  },
  {
    name: 'Simple queues.',
    description:
      'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.',
  },
  {
    name: 'Advanced security.',
    description:
      'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
  },
]

export default function FeatureShowcase() {
  return (
    <section id='showcase' className="bg-gradient-to-b from-gray-100 to-white">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Feature Showcase</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Product features that I have helped bring to life as a Technical Product Manager!
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div>
                <dt className="font-semibold text-gray-900">Launching a NEW feature; Substitutions and Modifiers</dt>
                <dd className="mt-1 text-gray-600 text-left">
                  <p>This was perhaps the most complete new feature process I’ve been exposed to, where I participated in the complete product design flow, from initial idea to actual launch.</p> 
                  <p>The ideation phase was a very dynamic process where we pulled in all stakeholders to foster early collaboration and rapid idea exchange. As we honed in on possible solutions I started an in-depth API research, so we could cement the technical feasibility and scalability of our solution, which was then brainstormed into a variety of deeper solution ideas.</p>
                  <p>The transition from concept to design began with raw sketches from the product, providing a tangible form to our thoughts and discussions. Once we were confident, this was handed off to our lead designer to develop higher fidelity versions. We did multiple rounds of reviews in collaboration with the wider product team to ensure technical feasibility and that the requirements as initially exposed were kept intact.</p>
                  <p>Once we felt confident with the designs we would collaborate with engineering for ticket creation and development. I actively participated in engineering release and launch to customers and even did parts of the actual CX like product documentation for customers.</p>
                  <p>And as it went live, I kept a constant eye for new escalations from the support team, to spot possible issues with the release and produce tickets for any hotfixes if necessary.</p>
                  <p>Throughout this entire process, I involved all internal stakeholders maintaining open lines of communication to ensure everyone involved was aligned, informed, and engaged with the project's progress and success.</p>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Delivery Service Provider (DSP) Integrations</dt>
                <dd className="mt-1 text-gray-600 text-left">
                  <p>I was intimately involved with the use of UberEats, DoorDash, and Grubhub APIs. There are not many pages in those API docs, which I have not scanned!</p> 
                  <p>I would write up documentation on how we could create new features based on my knowledge of the DSP platforms and knowing one could bend them to our will. This would include technical API example requests in our product design docs using Postman and similar tooling. </p>
                  <p>The ultimate challenge across multiple features was one of conceptually harmonizing the different APIs to create a unified, coherent representation of menu items, orders, and statuses across all the original APIs. While ensuring that a lowest common denominator did not handicap our opportunities on any single DSP. </p>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Store Item Management</dt>
                <dd className="mt-1 text-gray-600 text-left">
                  <p>Improve the overall design and flow of how we would ingest and manage inventory data.</p> 
                  <p>Every store which we would engage with would arrive with its own unique design and processes for inventory management, which could be simple various formatted Excel sheets to platforms for which we needed custom integrations. Our system in collaboration with the AM team had to clean/perfect that data before those items could be sold. </p>
                  <p>Our process and system we initially had in place were overly dependent on human processes and common sense along the way, which made it costly (time spent) and error-prone. This allowed me to do a host of internal user interviews to locate low-hanging fruit for machine optimization and design a new UX around this workflow.</p>
                  <p>Applying a focus where I would positively separate, in my ideas and Figma design, the item ingest and the overall item management, while trying to envision how the day-to-day work could increase the quality of the store item dataset while helping enrich our golden data set at the same time.</p>
                </dd>
              </div>
          </dl>
        </div>
      </div>
    </section>
  )
}