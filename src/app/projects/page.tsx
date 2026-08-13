import Card from "@/components/Card";

const projects = [
  { id: 1, title: "Spotify Clone", desc: "React, Tailwind" },
  { id: 2, title: "Weather App", desc: "Next.js, API" },
  { id: 3, title: "E-commerce", desc: "Full-stack" },
];

export default function Projects() {
  return (
     <div className="grid grid-cols-3 gap-4">
      {projects.map((prj) => (
        <Card key={prj.id} title={prj.title} description={prj.desc} />
      ))}
     </div>
  );
}