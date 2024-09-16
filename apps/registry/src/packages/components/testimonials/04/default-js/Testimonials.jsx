import { SimpleDashedBackground } from "@registry/ui/DashedBackground";

const testimonials = [
  {
    name: "Yamada Hiroto",
    company: "Velobyte",
    title: "CTO",
    image: "/placeholder.svg?height=60&width=60",
    quote: "Through the years of working with Root Development, has been a game-changer for our business.",
  },
  {
    name: "Ava Rodriguez",
    company: "AG CTP",
    title: "Lead Software Engineer",
    image: "/placeholder.svg?height=60&width=60",
    quote:
      "Root Development has been instrumental in optimising our internal processes with their innovative software solutions. The team's technical expertise and commitment to delivering on time and within budget are commendable.",
  },
  {
    name: "Aria Blackwood",
    company: "Scape Studio",
    title: "Product Designer",
    image: "/placeholder.svg?height=60&width=60",
    quote:
      "The level of support and responsiveness from their team has been outstanding, making the entire implementation process smooth and hassle-free.",
  },
  {
    name: "Samy Reaux",
    company: "Zephyr",
    title: "UI/UX Designer",
    image: "/placeholder.svg?height=60&width=60",
    quote:
      "The expertise and professionalism displayed by Root Development Solutions were unparalleled. They not only delivered a robust and scalable software.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-background text-foreground py-12 px-4 sm:px-6 @lg:px-8 flex items-center overflow-hidden relative">
      <div className="absolute top-1/4 left-1/8 w-[40rem] h-80 bg-gradient-to-tr from-blue-900 to-green-400 rounded-full filter blur-3xl opacity-20" />
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col @lg:flex-row gap-12 items-start">
          <div className="@lg:w-2/5 my-auto flex flex-col justify-center">
            <h2 className="text-5xl sm:text-6xl font-bold mb-4 leading-tight">
              Read from our satisfied{" "}
              <span className="bg-clip-text inline-block text-transparent bg-gradient-to-tr from-green-500 to-blue-600">
                Clients.
              </span>
            </h2>
            <p className="text-secondary-foreground text-lg">
              Our clients are at the core of everything we do. Their satisfaction is not just a goal, it's our mission.
            </p>
          </div>
          <div className="@lg:w-3/5 grid grid-cols-1 @lg:grid-cols-2 gap-6 relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-lg bg-gradient-to-b from-neutral-100 via-neutral-100 to-neutral-300 dark:from-neutral-800 dark:via-neutral-800 dark:to-neutral-950 shadow shadow-secondary p-6"
              >
                <div className="flex items-center mb-4 gap-4">
                  <SimpleDashedBackground className="h-12 w-12 rounded-full border border-outline " />
                  <div>
                    <p className="text-green-600 text-sm font-semibold">{testimonial.company}</p>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-secondary-foreground text-xs">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-secondary-foreground text-sm">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
