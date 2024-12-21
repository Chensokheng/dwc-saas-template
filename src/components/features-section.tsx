import Image from "next/image";

export function FeaturesSection() {
  return (
    <section className="container flex max-w-6xl flex-col gap-20 py-24 md:flex-row md:items-center">
      <div className="flex flex-1 flex-col items-start gap-10">
        <div className="flex flex-col gap-3">
          <span className="text-left font-heading font-bold italic text-primary">
            study&nbsp; rooms&nbsp;
          </span>
          <h2 className="text-balance text-left font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Join study room voice channels
          </h2>
        </div>
        <p className="max-w-lg text-balance text-left text-lg text-muted-foreground">
          boost your productivity through focused collaboration.
        </p>
      </div>
      <div className=" relative flex flex-1 items-center justify-center rounded-t-[2.5rem] rounded-bl-[5rem] bg-gradient-to-br from-accent to-primary pt-10">
        <Image
          alt="SaaS Dashboard"
          src="/images/Screenshot-2024-12-18-102920.png"
          width={250}
          height={400}
          className="rounded-md"
        />
      </div>
    </section>
  );
}
