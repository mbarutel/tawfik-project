import { ServiceImageFrame } from "@/components";
import { services } from "@/lib/data";

export default function ServicesWorkshops() {
  const service = services[1];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 group items-center">
      <ServiceImageFrame src={service.image.src} alt={service.image.alt} />
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl lg:text-6xl font-bold mb-3 lg:mb-6">
          {service.title}
        </h2>
        <p>
          Our workshops are designed to build real leadership capability. We
          deliver tailored programs for individuals, teams, and organisations
          that are interactive, practical, and grounded in the real challenges
          leaders face. From foundational leadership skills to more advanced
          topics like leading through change, emotional intelligence, or team
          dynamics, our workshops provide tools that leaders can apply
          immediately. We also offer longer-term development programs that build
          leadership capability over time—designed in partnership with you, and
          aligned to your organisation’s goals and values. Whether you’re
          growing new leaders or supporting experienced ones, our workshops
          create a shared language, build confidence, and strengthen your
          leadership culture.
        </p>
      </div>
    </div>
  );
}
