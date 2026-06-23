"use client";

import { useTranslations } from "next-intl";
import WindowBar from "./WindowBar";
import { getAllProjects } from "@/lib/featured-projects";

/** Project slug → logo asset path */
const LOGOS: Record<string, string> = {
  // existing
  burgerheim: "/images/clients/burgerheim.svg",
  "on-and-on-coffee-roastery": "/images/clients/onandon.svg",
  petroclean: "/images/clients/petroclean.svg",
  "divina-holding-erp-software": "/images/clients/divina.png",
  "zivan-chain-pet-shop": "/images/clients/zivan.png",
  "daniellee-application": "/images/clients/daniellee.png",
  // new folder
  finup: "/images/clients/finup.svg",
  "avid-foam": "/images/clients/avidfoam.png",
  zeenome: "/images/clients/zeenome.svg",
  "behine-pardazan-company": "/images/clients/behinepardazan.png",
  "bruntab-energy": "/images/clients/bruntab.png",
  "unilever-iran": "/images/clients/unilever.svg",
  omnicart: "/images/clients/omnicart.svg",
  "pole-ideal-pars": "/images/clients/medpip.png",
};

/** Clients not tied to a project but who have logos */
const EXTRA_BRANDS: Brand[] = [
  { name: "Bime Saman",      logo: "/images/clients/bime-saman.png" },
  { name: "Phinix",          logo: "/images/clients/phinix.png" },
  { name: "TEDx SUT",        logo: "/images/clients/tedx-sut.png" },
  { name: "Arian Diesel",    logo: "/images/clients/arian-diesel.png" },
  { name: "Ilia",            logo: "/images/clients/ilia.png" },
  { name: "Gardeshgari",     logo: "/images/clients/gardeshgari.svg" },
  { name: "Persian",         logo: "/images/clients/persian-logotype.svg" },
  { name: "Sibche",          logo: "/images/clients/sibche.png" },
  { name: "MOM",             logo: "/images/clients/mom.webp" },
  { name: "Simorgh Tejarat", logo: "/images/clients/simorgh-tejarat.png" },
];

type Brand = { name: string; logo: string };

function Cell({ brand }: { brand: Brand }) {
  return (
    <div className="group flex h-20 shrink-0 items-center justify-center rounded-lg border border-black/10 bg-white px-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={brand.logo}
        alt={brand.name}
        loading="lazy"
        className="max-h-10 w-auto h-full object-contain opacity-60 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
      />
    </div>
  );
}

/**
 * Infinite, never-pausing logo marquee built with a CSS keyframe animation
 * (NOT the deprecated <marquee> element). The track holds two copies of the
 * items and slides by -50%, so the loop is seamless. Direction is flipped per
 * row via `animation-direction`.
 */
function MarqueeRow({
  items,
  duration,
  reverse = false,
}: {
  items: Brand[];
  duration: number;
  reverse?: boolean;
}) {
  return (
    <div className="relative overflow-hidden mask-fade-x" dir="ltr">
      <div
        className="flex w-max gap-3"
        style={{
          animationName: "clients-marquee",
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDirection: reverse ? "reverse" : "normal",
          willChange: "transform",
        }}
      >
        {[...items, ...items].map((brand, i) => (
          <Cell key={`${brand.name}-${i}`} brand={brand} />
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  const t = useTranslations();

  // Only brands that actually have a logo image (drop text-only fallbacks)
  const projectBrands: Brand[] = getAllProjects()
    .filter((p) => LOGOS[p.slug])
    // duplicate the brand name for each logo
    .map((p) => ({ name: p.title.en, logo: LOGOS[p.slug] }))
    .flatMap((p) => [p, p]);

  // Merge project brands + extra logo-only brands, deduplicate by name
  const seen = new Set(projectBrands.map((b) => b.name));
  const all: Brand[] = [
    ...projectBrands,
    ...EXTRA_BRANDS.filter((b) => !seen.has(b.name)),
  ];

  const row1 = all.filter((_, i) => i % 2 === 0);
  const row2 = all.filter((_, i) => i % 2 === 1);

  return (
    <section id="clients">
      <WindowBar label={t("windows.clients")} />
      <div className="container-x py-16 sm:py-20">
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {t("hero.clientsLabel")}
        </p>
        <div className="flex flex-col gap-3">
          {/* row 1 → left to right */}
          <MarqueeRow items={row1} duration={45} reverse />
          {/* row 2 → right to left */}
          <MarqueeRow items={row2} duration={55} />
        </div>
      </div>
    </section>
  );
}
