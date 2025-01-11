"use client";

import { Logomark } from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Project {
  index: number;
  title: string;
  title_badge?: string;
  year: number | string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

export const projects = [
  {
    index: 10,
    title: "شرکت کاهنربا",
    year: "بزودی",
    description: "شرکت کاهنربا بعنوان شرکت پیشرو گامهای بلندی در راستای بومی سازی تکنولوژی های استخراج و فرآوری مواد معدنی برداشته است.",
    technologies: ["Wordpress", "Elementor"],
    image: "/images/projects/kahanroba-mockup.jpg",
    link: "https://kahanroba.com/",
  },
  {
    index: 11,
    title: "گروه تشریفات شاهان",
    year: "بزودی",
    description: "شرکت فعال در حوزه تشریفات و مراسم عروسی با تجربه چند دهده در این  زمینه و فعال در کشور های ترکیه، امارات و ایران.",
    technologies: ["Wordpress", "Elementor"],
    image: "/images/projects/shahan-mockup.jpg",
    link: "https://shahanceremony.com/",
  },
  {
    index: 20,
    title: "Omnicart",
    title_badge: "v2",
    year: 1403,
    description: "Omnicart یک راه حل همه کاره است که به شما کمک می کند تجارت پذیرایی خود را توسعه دهید، عملیات را ساده کنید و سود خود را حفظ کنید.",
    technologies: ["Next.js", "Tailwind", "FramerMotion", "SEO"],
    image: "/images/projects/omnicart-v2.jpg",
    link: "https://web.archive.org/web/20240920054405/https://omnicart.tech/",
  },
  {
    index: 30,
    title: "آکادمی مالی آهی",
    year: 1401,
    description: "آکادمی آهی محیطی پویا و مناسب برای افراد مستعد و با انگیزه رشد در زمینه بازارهای مالی است. شما در آکادمی آهی همزمان با کار در حوزه تخصصی خود از مزایای آموزش های بازارهای مالی(بورس- بازارهای جهانی و ارزهای دیجیتال) بهره مند خواهید شد.",
    technologies: ["Vue", "Laravel", "Bootstrap"],
    image: "/images/projects/ahy-mockup.jpg",
    link: "https://web.archive.org/web/20220704114151/https://latifahy.com/",
  },
  {
    index: 40,
    title: "Omnicart",
    title_badge: "v1",
    year: 1401,
    description: "Omnicart یک راه حل همه کاره است که به شما کمک می کند تجارت پذیرایی خود را توسعه دهید، عملیات را ساده کنید و سود خود را حفظ کنید.",
    technologies: ["Next.js", "Tailwind", "FramerMotion", "SEO"],
    image: "/images/projects/omnicart-v1.jpg",
    link: "https://web.archive.org/web/20230402150800/https://omnicart.tech/",
  },
  {
    index: 50,
    title: "یونیلیور ایران",
    year: 1400,
    description: "یونیلیور صاحب بسیاری از برندهای معروف دنیا در دسته بندی های غذایی، نوشیدنی، تمیزکننده های محیطی و نظافت شخصی صابون لوکس، چای لیپتون، شامپوهای کلییر، سان سیلک و داو ، شوینده های سیف، دامستوس، امو و ... می باشد.",
    technologies: ["Wordpress", "Elementor"],
    image: "/images/projects/unilever-mockup.jpg",
    link: "https://unilever.ir/",
  },
  {
    index: 60,
    title: "وی‌وی",
    year: 1400,
    description: "وی وی شبکه گسترده فعالان حوزه ورزش و سلامت است و به شما این امکان رو میده که برای رسیدن به اهداف ورزشیتون نزدیکترین و بهترین انتخاب رو داشته باشید.",
    technologies: ["Laravel", "Tailwind CSS", "HTML", "CSS", "Socket.io", "Docker"],
    image: "/images/projects/vv-mockup.jpg",
    link: "https://web.archive.org/web/20231128154914/https://the-vv.com/",
  },
  {
    index: 70,
    title: "اطلس جامع آزمایشگاهی فارسی",
    year: 1400,
    description: "جامع‌ترین مرجع مصور در زمینه تشخیص آزمایشگاهی برای پزشکان و دانشجویان پزشکی به سفارش شرکت پل ایده آل پارس",
    technologies: ["Laravel", "Bootstrap", "RESTapi", "SEO", "Metronic"],
    image: "/images/projects/atlas-mockup.jpg",
    link: "https://medpip.com/atlas/",
  },
  {
    index: 80,
    title: "شرکت بهینه‌پردازان",
    year: 1400,
    description: "بهینه‌پردازان راهکارهایی برای کاهش مراجعات حضوری و تسهیل امور مودیان طراحی شده است و نقش مهمی در کاهش خطاهای پرونده‌های مالیاتی دارد.",
    technologies: ["Wordpress", "Elementor"],
    image: "/images/projects/behinepardazan-mockup.jpg",
    link: "https://web.archive.org/web/20221120051926/https://www.behinepardazan.ir/",
  },
  {
    index: 90,
    title: "پل ایده‌آل پارس",
    year: 1398,
    description: "شرکت پل ایده آل پارس (P.I.P) دارنده گواهی نامه های مدیریت کیفیت ISO 13485:2016 و ISO 9001:2015 با بیش از سه دهه تجربه در امور تولید ، توزیع و فروش محصولات پزشکی و آزمایشگاهی در راستای پیشبرد سلامت جامعه فعالیت می نماید.",
    technologies: ["Wordpress", "Elementor", "RESTapi", "SEO"],
    image: "/images/projects/pip-mockup.jpg",
    link: "https://medpip.com/",
  },
  {
    index: 100,
    title: "پازل استودیو",
    year: 1398,
    description: "گروه استودیوهای زنجیره‌ای پازل همزمان با کرونا تغییری در روی خدمات دهی به مشتریان خود با راه اندازی یک پلتفرم جامع برگزاری کلاس آنلاین با صدها قابلیت جذاب انجام داد.",
    technologies: ["Laravel", "Bootstrap", "HTML", "CSS", "Socket.io"],
    image: "/images/projects/puzzle-mockup.jpg",
    link: "https://web.archive.org/web/20220507210910/https://puzzle-stu.com/",
  },
] as Project[];

export default function Home() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  return (
    <div className="w-full">
      <header className="sticky top-0 flex h-16 items-center gap-4 bg-background mx-auto w-full max-w-screen-xl px-6 md:px-20 z-50">
        <nav
          className="hidden flex-col md:flex md:flex-row md:items-center md:justify-between w-full h-full border-b">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <Logomark invert filled className={"h-8"} />
            <div className="flex flex-col">
              <p className="text-xs font-normal">استودیو کارنسا</p>
              <p className="text-base -mt-px">نمونه کارها</p>
            </div>
          </Link>
          <div
            className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-between md:gap-5 md:text-sm lg:gap-6">
            <Link className="hover:text-foreground text-muted-foreground" href="https://karensastudio.com/">وبسایت استودیو</Link>
            <Link className="hover:text-foreground text-muted-foreground" href="https://karensastudio.com/process">روند همکاری</Link>
            <Link className="hover:text-foreground text-muted-foreground" href="https://karensastudio.com/contact">تماس با ما</Link>
          </div>
        </nav>
      </header>

      <div className="mx-auto w-full max-w-screen-xl px-6 md:px-20 py-10 md:py-20">
        <div className="flex items-end justify-between mb-4">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold">پروژه‌ها</h2>
            <p className="text-muted-foreground mt-1">معرفی تکنولوژی‌های مورد استفاده و موضوع فعالیت‌ها</p>
          </div>

          <div className="flex gap-4 items-center">

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {
            projects.sort((a, b) => a.index - b.index).map((project, index) => (
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full group" key={index}>
                <div className="p-4">
                  <Link href={project.link} target="_blank">
                    <div className="overflow-hidden rounded-lg">
                      <Image src={project.image} alt={project.title} width={1280} height={832} className="group-hover:scale-105 transition-all duration-500" />
                    </div>
                  </Link>
                </div>
                <div className="flex flex-col space-y-1.5 p-6 pt-0 pb-3">
                  <h3 className="text-2xl font-bold leading-none tracking-tight">
                    <div className="flex gap-2 items-center justify-between">
                      <Link href={project.link} target="_blank" className="flex items-start">
                        {project.title}
                        {
                          project.title_badge && (
                            <span
                              className="inline-flex tracking-widest items-center rounded-full border px-2 py-px -pb-0 scale-90 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground">
                              {project.title_badge}
                            </span>
                          )
                        }
                      </Link>

                      <div
                        className="faNum inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">{project.year}</div>
                    </div>
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                </div>
                <div className="items-center p-6 pt-0 *:me-2 *:mb-2 flex flex-wrap">
                  {
                    project.technologies.map((tech, indexTech) => (
                      <div
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        key={indexTech}>{tech}</div>
                    ))
                  }
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  );
}
