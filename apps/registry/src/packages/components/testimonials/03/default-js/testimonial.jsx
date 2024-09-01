import { Carousel } from "@registry/packages/primitives/carousel/01/default-js/carousel";
import { SimpleDashedBackground } from "@registry/ui/DashedBackground";
import { twMerge } from "tailwind-merge";

const testimonialData = [
  {
    name: "John Doe",
    designation: "CEO at ExampleCorp",
    testimonial:
      "This product has completely transformed the way our team works. The increase in productivity has been remarkable.",
  },
  {
    name: "Jane Smith",
    designation: "Marketing Manager at TechWave",
    testimonial:
      "An excellent tool that simplifies our workflow and enhances our efficiency. Highly recommend it to all professionals.",
  },
  {
    name: "Samuel Green",
    designation: "Lead Developer at CodeMaster",
    testimonial: "The intuitive design and robust features have made it an indispensable part of our daily operations.",
  },
  {
    name: "Emily Brown",
    designation: "HR Director at PeopleFirst",
    testimonial:
      "It has been instrumental in improving our team collaboration and communication. A must-have for any growing company.",
  },
  {
    name: "Michael Johnson",
    designation: "CTO at Innovatech",
    testimonial: "The user-friendly interface and comprehensive support make it a top choice for tech teams.",
  },
  {
    name: "Olivia Williams",
    designation: "Product Manager at NextGen Solutions",
    testimonial: "A game-changer in our industry. The features and ease of use have exceeded our expectations.",
  },
  {
    name: "Daniel Brown",
    designation: "Operations Manager at FastTrack Inc.",
    testimonial:
      "Our operations have never been smoother. This tool has made a significant impact on our day-to-day tasks.",
  },
  {
    name: "Sophia Martinez",
    designation: "Creative Director at Bright Ideas",
    testimonial: "It’s the perfect tool for creative teams. The flexibility and customization options are fantastic.",
  },
  {
    name: "Liam Wilson",
    designation: "Data Analyst at DataDrive",
    testimonial:
      "An excellent tool for data-driven teams. The analytics features are top-notch and very user-friendly.",
  },
  {
    name: "Ava Thompson",
    designation: "Sales Lead at MarketPros",
    testimonial:
      "This tool has drastically improved our sales process. The integration with our existing systems is seamless.",
  },
];

export default function Testimonial() {
  return (
    <div>
      <Carousel className="[--gap:2rem]" pauseOnHover>
        {testimonialData.map((item, i) => {
          return (
            <TestimonialCard key={i} name={item.name} designation={item.designation} testimonial={item.testimonial} />
          );
        })}
      </Carousel>
      <Carousel className="[--gap:2rem]" pauseOnHover>
        {testimonialData.map((item, i) => {
          return (
            <TestimonialCard
              key={i}
              name={item.name}
              designation={item.designation}
              testimonial={item.testimonial}
              className="-translate-x-1/2"
            />
          );
        })}
      </Carousel>
      <Carousel className="[--gap:2rem]" pauseOnHover>
        {testimonialData.map((item, i) => {
          return (
            <TestimonialCard key={i} name={item.name} designation={item.designation} testimonial={item.testimonial} />
          );
        })}
      </Carousel>
    </div>
  );
}

function TestimonialCard({ name, designation, testimonial, className }) {
  return (
    <div
      className={twMerge(
        "flex h-48 bg-primary rounded-lg border border-outline-secondary hover:cursor-pointer",
        className,
      )}
    >
      <SimpleDashedBackground className="w-48 h-full border-r border-outline-secondary hidden @md:block" />
      <div className="w-80 flex flex-col items-start p-4 overflow-hidden">
        <h1 className="text-lg font-bold text-primary-foreground">{name}</h1>
        <h2 className="text-md text-primary-foreground">{designation}</h2>
        <p className="text-md text-secondary-foreground mt-2">{testimonial}</p>
      </div>
    </div>
  );
}
