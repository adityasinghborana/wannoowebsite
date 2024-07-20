import { BentoCard, BentoGrid } from "../magicui/bento-grid";

const features = [
  {
    name: "Hotels",
    description: "We Provide Best Offers on hotels Stays.",
    href: "/",
    background: (
      <img
        className="absolute  "
        src="https://picsum.photos/1920/1380?random=6"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    name: "Transfers",
    description: "Your All Tarnsfer needs in one place.",
    href: "/",

    background: (
      <img
        className="absolute "
        src="https://picsum.photos/1920/1080?random=5"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    name: "Experiences",
    description: " 1000+ Adventures for your needs ",
    href: "/",

    background: (
      <img
        className="absolute  "
        src="https://picsum.photos/1920/1080?random=4"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    name: "Events",
    description: "Use the calendar to filter your files by date.",
    href: "/",

    background: (
      <img
        className="absolute  "
        src="https://picsum.photos/1920/1080?random=3"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    name: "Trains",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",

    background: (
      <img
        className="absolute "
        src="https://picsum.photos/1920/1080?random=2"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function BentoDemo() {
  return (
    <div className="flex flex-col px-10">
      <div className="mb-10 ">
        <h1 className="text-[62px] font-extrabold">MarketPlace</h1>
      </div>
      <BentoGrid className="lg:grid-rows-3 text-white">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
