type ServicePageHeroProps = {
  title: string;
  subtitle: string;
};

export default function ServicePageHero({
  title,
  subtitle,
}: ServicePageHeroProps) {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="container max-w-5xl">
        <p className="text-sm uppercase tracking-[0.24em] text-secondary mb-5">
          Tawfik Executive Coaching
        </p>
        <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-secondary">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-2xl leading-relaxed text-light/90">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
