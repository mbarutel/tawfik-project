import { ServiceImageFrame } from "@/components";
import { services } from "@/lib/data";

export default function ServicesConsulting() {
  const service = services[2];
  var data = [
    "Leadership and team development strategies",
    "Organisational culture reviews and gap analysis",
    "Change and transformation planning",
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 group items-center">
      <ServiceImageFrame src={service.image.src} alt={service.image.alt} />
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl lg:text-6xl font-bold mb-3 lg:mb-6">
          {service.title}
        </h2>
        <p>
          We partner with organisations to align leadership, people, and culture
          with strategic direction. Our consulting services are tailored to your
          context, offering clear, thoughtful advice to help you move forward
          with clarity and confidence.
        </p>
        <br />
        <p>We can support you with:</p>
        <br />
        <div className="list-disc pl-5">
          {data.map((val, ind) => (
            <p key={ind}>
              <span className="text-2xl">•</span> {val}
            </p>
          ))}
        </div>
        <br />
        <p>
          Our approach is collaborative—we work alongside you to understand your
          needs, challenge where needed, and co-design practical solutions that
          deliver lasting impact.
        </p>
      </div>
    </div>
  );
}
