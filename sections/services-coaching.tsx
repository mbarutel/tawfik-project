import { ServiceImageFrame } from "@/components";
import { services } from "@/lib/data";

export default function ServicesCoaching() {
  const service = services[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 group">
      <ServiceImageFrame src={service.image.src} alt={service.image.alt} />
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl lg:text-6xl font-bold mb-3 lg:mb-6">
          {service.title}
        </h2>
        <p>
          We offer personalised one-on-one coaching that supports leaders to
          grow in confidence, clarity, and capability. Whether you’re stepping
          into a new role, navigating complexity, or seeking to elevate your
          leadership, our coaching provides a space to reflect, challenge
          assumptions, and move forward with purpose. Each coaching journey is
          tailored to the individual, with a focus on building self-awareness,
          improving decision-making, and strengthening relationships. We equip
          leaders with practical tools and frameworks they can use
          day-to-day—helping them lead more effectively not just during
          coaching, but well beyond.
        </p>
        <br />
        <p>
          Our coaching is built on trust, confidentiality, and meaningful
          connection.
        </p>
      </div>
    </div>
  );
}
