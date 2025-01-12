"use client";

import { Logomark } from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Project {
  index: number;
  title: string;
  title_badge?: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

interface YearProject {
  index: number;
  title: string;
  projects: Project[];
}

const projects = [
  {
    index: 100,
    title: "در حال اجرا",
    projects: [
      {
        index: 10,
        title: "شرکت کاهنربا",
        description: "شرکت کاهنربا بعنوان شرکت پیشرو گامهای بلندی در راستای بومی سازی تکنولوژی های استخراج و فرآوری مواد معدنی برداشته است.",
        technologies: ["Wordpress", "Elementor"],
        image: "/images/projects/kahanroba-mockup.jpg",
        link: "https://kahanroba.com/",
      },
      {
        index: 20,
        title: "گروه تشریفات شاهان",
        description: "شرکت فعال در حوزه تشریفات و مراسم عروسی با تجربه چند دهده در این  زمینه و فعال در کشور های ترکیه، امارات و ایران.",
        technologies: ["Wordpress", "Elementor"],
        image: "/images/projects/shahan-mockup.jpg",
        link: "https://shahanceremony.com/",
      },
      {
        index: 30,
        title: "اپلیکیشن اندروید وی وین",
        title_badge: "v2",
        description: "وی وی شبکه گسترده فعالان حوزه ورزش و سلامت است و به شما این امکان رو میده که برای رسیدن به اهداف ورزشیتون نزدیکترین و بهترین انتخاب رو داشته باشید.",
        technologies: ["Android", "Laravel", "RESTapi"],
        image: "/images/projects/viwin-mockup.jpg",
        link: "https://viwin.link/",
      },
      {
        index: 40,
        title: "نرم افزار مدیریت پروژه زیکس",
        description: "شرکت زیکس با سابقه چندین ساله فعال در زمینه تولید انواع مبلمان و اکسسوری های خاص واقع در منطقه صنعتی سیاهسنگ",
        technologies: ["Laravel", "NextJS", "GraphQL", "MySQL", "Tailwind CSS"],
        image: "/images/projects/zix-mockup.jpg",
        link: "#",
      },
    ]
  },
  {
    index: 200,
    title: "1403",
    projects: [
      {
        index: 10,
        title: "Fundracing",
        description: "فاندریسینگ یک تیم بین المللی تشکیل شده از افراد با تجربه در بازار مالی است که سرمایه مورد نیاز تریدر ها را تامین کرده و از تریدر های برتر و با استعداد حمایت میکنید.",
        technologies: ["NextJS", "Shadcn/ui", "SEO", "RadixUi", "Server optimization"],
        image: "/images/projects/fundracing-mockup.jpg",
        link: "https://web.archive.org/web/20240622024127/fundracing.co",
      },
      {
        index: 20,
        title: "پت‌شاپ زنجیره‌ای ژیوان",
        description: "پت‌شاپ ژیوان با شعار «ژیوان، دوست حیوان و انسان»، به‌عنوان بزرگ‌ترین فروشگاه ملزومات و غذای حیوانات‌خانگی در ایران با همفکری و کارشناسی تیمی باتجربه و دوستدار محیط‌زیست و حیوانات، اولین شعبه‌ی خود را در سال 1394 در خیابان ولی‌عصر تهران تأسیس کرد و در مدتی کوتاه",
        technologies: ["Wordpress", "SEO", "PHP", "Server optimization"],
        image: "/images/projects/zivan-mockup.jpg",
        link: "https://zivanpetshop.com/",
      },
      {
        index: 30,
        title: "فلی",
        description: "ما در تلاش هستیم تا تجربه‌ای را ارائه دهیم که ماهیت لباس‌های ژاپنی ساده، راحت، جادار و کاربردی را در بر گیرد.",
        technologies: ["Wordpress", "SEO", "Elementor", "Server optimization"],
        image: "/images/projects/feli-mockup.jpg",
        link: "https://feli.club/",
      },
      {
        index: 40,
        title: "پتروکلین",
        description: "این شرکت فعالیت خود را از همان سال شروع و با نام تجاری “پتروکلین” تولیدات متنوعی را در بازار عرضه کرد. شایان ذکر است پتروکلین اولین تولید کننده پلاستیک‌های تجزیه پذیر در کشور است.",
        technologies: ["Wordpress", "Elementor", "SEO"],
        image: "/images/projects/petroclean-mockup.jpg",
        link: "https://petroclean.co/",
      },
      {
        index: 50,
        title: "اپلیکیشن دنیلی",
        description: "«دنیلی» نماینده ی کوچک و موفقی از مهد دنیای مد و زیبایی، ایتالیا است. دنیلی برندی است که توانسته به خوبی ترندهای روز دنیا و هنر اصیل ایتالیایی را همراه کند و با شناخت نیاز مردم، محصولاتی جذاب و خاص طراحی کند.",
        technologies: ["Android", "iOS", "Cloud Solutions", "RESTapi", "Laravel"],
        image: "/images/projects/daniellee-mockup.jpg",
        link: "#",
      },
      {
        index: 60,
        title: "Omnicart",
        title_badge: "v2",
        description: "Omnicart یک راه حل همه کاره است که به شما کمک می کند تجارت پذیرایی خود را توسعه دهید، عملیات را ساده کنید و سود خود را حفظ کنید.",
        technologies: ["NextJS", "Tailwind", "FramerMotion", "SEO"],
        image: "/images/projects/omnicart-v2.jpg",
        link: "https://web.archive.org/web/20240920054405/https://omnicart.tech/",
      },
      {
        index: 70,
        title: "کافه آرت استوریج",
        description: "کافه گالری فعال در شهر تهران محدوده فلسطین که از سال ۱۴۰۳ فعالیت خود را آغاز کرده است.",
        technologies: ["NextJS", "Tailwind", "PayloadCMS", "PWA"],
        image: "/images/projects/artstorage-mockup.jpg",
        link: "https://artstorage.social/",
      },
    ]
  },
  {
    index: 300,
    title: "1402",
    projects: [
      {
        index: 10,
        title: "اپلیکیشن iOS وی وین",
        title_badge: "v2",
        description: "وی وی شبکه گسترده فعالان حوزه ورزش و سلامت است و به شما این امکان رو میده که برای رسیدن به اهداف ورزشیتون نزدیکترین و بهترین انتخاب رو داشته باشید.",
        technologies: ["NextJS", "iOS", "Laravel", "RESTapi", "Server Optimization"],
        image: "/images/projects/viwin-ios.jpg",
        link: "https://viwin.link/",
      },
      {
        index: 20,
        title: "صرافی کیوسک",
        description: "صرافی کیوسک محصول شرکت کیمیاگران سرمایه همراه ایرانیان است. این صرافی در سال 1400 فعالیت خود را در شهر تهران آغاز کرد. بر اساس اطلاعات درج شده در سایت رسمی صرافی کیوسک، این صرافی بیش از 200 هزار کاربر فعال دارد. همچنین اپلیکیشن موبایل اندروید و iOS این صرافی هم در دسترس کاربران است.",
        technologies: ["React", "Tailwind", "ReactRouter", "Server Optimization"],
        image: "/images/projects/kiosk-mockup.jpg",
        link: "https://kioosk.net/",
      },
      {
        index: 30,
        title: "زینوم",
        description: "سرویس زینوم با هدف کاهش سرعت پیر شدن (aging) و افزایش عمر سالم شما طراحی شده است.",
        technologies: ["Wordpress", "Elementor"],
        image: "/images/projects/zeenome-mockup.jpg",
        link: "https://zeenome.ir/",
      },
      {
        index: 40,
        title: "رستوران آپادانا اتریش",
        description: "رستوران آپادانا فضایی دنج، گرم و آرام دارد و در شهر وین اتریش واقع شده است. در این رستوران انواع غذاهای حلال خوشمزه از جمله گریل، کباب، برنج زعفرانی، کورما، مرغ کبابی و بسیاری از غذاهای خوشمزه دیگر ارائه می شود",
        technologies: ["Wordpress", "Elementor"],
        image: "/images/projects/apadana-mockup.jpg",
        link: "http://apadana.at/",
      },
    ]
  },
  {
    index: 400,
    title: "1401",
    projects: [
      {
        index: 10,
        title: "آکادمی مالی آهی",
        description: "آکادمی آهی محیطی پویا و مناسب برای افراد مستعد و با انگیزه رشد در زمینه بازارهای مالی است. شما در آکادمی آهی همزمان با کار در حوزه تخصصی خود از مزایای آموزش های بازارهای مالی(بورس- بازارهای جهانی و ارزهای دیجیتال) بهره مند خواهید شد.",
        technologies: ["Vue", "Laravel", "Bootstrap"],
        image: "/images/projects/ahy-mockup.jpg",
        link: "https://web.archive.org/web/20220704114151/https://latifahy.com/",
      },
      {
        index: 20,
        title: "Omnicart",
        title_badge: "v1",
        description: "Omnicart یک راه حل همه کاره است که به شما کمک می کند تجارت پذیرایی خود را توسعه دهید، عملیات را ساده کنید و سود خود را حفظ کنید.",
        technologies: ["NextJS", "Tailwind", "FramerMotion", "SEO"],
        image: "/images/projects/omnicart-v1.jpg",
        link: "https://web.archive.org/web/20230402150800/https://omnicart.tech/",
      },
    ]
  },
  {
    index: 500,
    title: "1400",
    projects: [
      {
        index: 10,
        title: "یونیلیور ایران",
        description: "یونیلیور صاحب بسیاری از برندهای معروف دنیا در دسته بندی های غذایی، نوشیدنی، تمیزکننده های محیطی و نظافت شخصی صابون لوکس، چای لیپتون، شامپوهای کلییر، سان سیلک و داو ، شوینده های سیف، دامستوس، امو و ... می باشد.",
        technologies: ["Wordpress", "Elementor"],
        image: "/images/projects/unilever-mockup.jpg",
        link: "https://unilever.ir/",
      },
      {
        index: 20,
        title: "فیناپ",
        description: "نخستین رویداد تخصصی در حوزه فناوری‌ھای مالی (فین‌تک) که یک کامیونیتی بزرگ را گردهم آورده است. رویداد فیناپ در خردادماه سال ۱۳۹۶ با سه هدف آموزش، شبکه‌سازی و توسعه فین‌تک به سراسر کشور با برگزاری رویدادهای ماهانه آغاز به کار کرد.",
        technologies: ["Wordpress", "Elementor"],
        image: "/images/projects/finup-mockup.jpg",
        link: "https://finupevent.ir/",
      },
      {
        index: 30,
        title: "کیارش مسیبی",
        description: " مسیبی متولد ۱۳۶۹ عضو انجمن عکاسان ایران و انجمن عکاسان خانه تئاتر است. در اردیبهشت ۱۳۹۶ تندیس بهترین عکس بیستمین جشنواره تئاتر دانشگاهی را دریافت کرد. در سال ۱۳۹۴ مقام دوم، سی و چهارمین جشنواره بین المللی عکس تئاتر فجر را کسب کرد. در مرداد ۱۳۹۴ کاندید دریافت جایزه از انجمن منتقدان و نویسندگان تئاتر در بخش عکس بود. او پس از شرکت در بیش از بیست نمایشگاه گروهی و تجربه عکاسی برای مطبوعات، اولین نمایشگاه انفرادی خود را برگزار کرده است.",
        technologies: ["Wordpress", "Elementor"],
        image: "/images/projects/kiarash-mockup.jpg",
        link: "https://kiarashmosayebi.com/",
      },
      {
        index: 40,
        title: "وی‌وی",
        description: "وی وی شبکه گسترده فعالان حوزه ورزش و سلامت است و به شما این امکان رو میده که برای رسیدن به اهداف ورزشیتون نزدیکترین و بهترین انتخاب رو داشته باشید.",
        technologies: ["Laravel", "Tailwind CSS", "HTML", "CSS", "Socket.io", "Docker"],
        image: "/images/projects/vv-mockup.jpg",
        link: "https://web.archive.org/web/20231128154914/https://the-vv.com/",
      },
      {
        index: 50,
        title: "اطلس جامع آزمایشگاهی فارسی",
        description: "جامع‌ترین مرجع مصور در زمینه تشخیص آزمایشگاهی برای پزشکان و دانشجویان پزشکی به سفارش شرکت پل ایده آل پارس",
        technologies: ["Laravel", "Bootstrap", "RESTapi", "SEO", "Metronic"],
        image: "/images/projects/atlas-mockup.jpg",
        link: "https://medpip.com/atlas/",
      },
      {
        index: 60,
        title: "شرکت بهینه‌پردازان",
        description: "بهینه‌پردازان راهکارهایی برای کاهش مراجعات حضوری و تسهیل امور مودیان طراحی شده است و نقش مهمی در کاهش خطاهای پرونده‌های مالیاتی دارد.",
        technologies: ["Wordpress", "Elementor"],
        image: "/images/projects/behinepardazan-mockup.jpg",
        link: "https://web.archive.org/web/20221120051926/https://www.behinepardazan.ir/",
      },
    ]
  },
  {
    index: 600,
    title: "1399",
    projects: [
      {
        index: 10,
        title: "آوید فوم",
        description: "آوید فوم یک تولید کننده داخلی بردهای فومی است که محصولاتش در طیف گسترده ای از زمینه ها از قبیل چاپ دیجیتال ، چاپ مسطح ، استندهای تبلیغاتی نمایشگاهی و فروشگاهی ، برش گرافیکی و علائم در محیط های داخلی استفاده می شود.",
        technologies: ["Wordpress", "Site Optimization"],
        image: "/images/projects/avid-mockup.jpg",
        link: "https://avidfoam.ir/",
      },
    ]
  },
  {
    index: 700,
    title: "1398",
    projects: [
      {
        index: 10,
        title: "پل ایده‌آل پارس",
        description: "شرکت پل ایده آل پارس (P.I.P) دارنده گواهی نامه های مدیریت کیفیت ISO 13485:2016 و ISO 9001:2015 با بیش از سه دهه تجربه در امور تولید ، توزیع و فروش محصولات پزشکی و آزمایشگاهی در راستای پیشبرد سلامت جامعه فعالیت می نماید.",
        technologies: ["Wordpress", "Elementor", "RESTapi", "SEO"],
        image: "/images/projects/pip-mockup.jpg",
        link: "https://medpip.com/",
      },
      {
        index: 20,
        title: "پازل استودیو",
        description: "گروه استودیوهای زنجیره‌ای پازل همزمان با کرونا تغییری در روی خدمات دهی به مشتریان خود با راه اندازی یک پلتفرم جامع برگزاری کلاس آنلاین با صدها قابلیت جذاب انجام داد.",
        technologies: ["Laravel", "Bootstrap", "HTML", "CSS", "Socket.io"],
        image: "/images/projects/puzzle-mockup.jpg",
        link: "https://web.archive.org/web/20220507210910/https://puzzle-stu.com/",
      },
    ]
  },
  {
    index: 800,
    title: "1395",
    projects: [
      {
        index: 10,
        title: "Nestous",
        description: "تولید کننده آینه‌های هوشمند مناسب فضاهای آرایشگاهی و سالن‌های زیبایی، فعال در کشور کانادا، هلند و دانمارک",
        technologies: ["Wordpress", "Divi"],
        image: "/images/projects/nestous-mockup.jpg",
        link: "https://web.archive.org/web/20170709164039/http://nestous.com:80/",
      },
      {
        index: 20,
        title: "خبرگزاری موسیقی هنر",
        description: "موسیقی هنر ، مرجع اطلاع رسانی اخبار اکران فیلم های سینمایی ، تئاتر ها و موارد دیگر مرتبط با هنر به زبان فارسی همراه با اطلاع رسانی تخفیف کنسرت ها.",
        technologies: ["Wordpress", "SEO"],
        image: "/images/projects/musiceart-mockup.jpg",
        link: "https://web.archive.org/web/20181024072617/http://musiceart.com/",
      },
    ]
  },
  {
    index: 900,
    title: "1394",
    projects: [
      {
        index: 10,
        title: "برونتاب انرژی",
        title_badge: "v1",
        description: "تولید کننده آینه‌های هوشمند مناسب فضاهای آرایشگاهی و سالن‌های زیبایی، فعال در کشور کانادا، هلند و دانمارک",
        technologies: ["Wordpress", "Divi"],
        image: "/images/projects/bruntab-mockup.jpg",
        link: "https://web.archive.org/web/20181113142507/http://bruntab.com/",
      },
    ]
  }
] as YearProject[]

export default function Home() {
  // const [selectedYear, setSelectedYear] = useState<number | null>(null);

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
        <div className="flex items-end justify-between mb-12">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold">پروژه‌ها</h2>
            <p className="text-muted-foreground mt-1">معرفی تکنولوژی‌های مورد استفاده و موضوع فعالیت‌ها</p>
          </div>

          <div className="flex gap-4 items-center">

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {
            projects.sort((a, b) => a.index - b.index).map((year, index) => (
              <React.Fragment key={index}>
                <div className="col-span-2 -mb-5">
                  <h3 className="text-3xl font-bold faNum">{year.title}</h3>
                </div>
                {
                  year.projects.sort((a, b) => a.index - b.index).map((project, index2) => (
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full group" key={index2}>
                      <div className="p-4">
                        {
                          project.link == "#" ? (
                            <div className="overflow-hidden rounded-lg">
                              <Image src={project.image} alt={project.title} width={1280} height={832} className="group-hover:scale-105 transition-all duration-500" />
                            </div>
                          ) :
                            <Link href={project.link} target="_blank">
                              <div className="overflow-hidden rounded-lg">
                                <Image src={project.image} alt={project.title} width={1280} height={832} className="group-hover:scale-105 transition-all duration-500" />
                              </div>
                            </Link>
                        }
                      </div>
                      <div className="flex flex-col space-y-1.5 p-6 pt-0 pb-3">
                        <h3 className="text-2xl font-bold leading-none tracking-tight">
                          <div className="flex gap-2 items-center justify-between">
                            {
                              project.link == "#" ? (
                                <div className="flex items-start">
                                  {project.title}
                                  {
                                    project.title_badge && (
                                      <span
                                        className="inline-flex tracking-widest items-center rounded-full border px-2 py-px -pb-0 scale-90 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground">
                                        {project.title_badge}
                                      </span>
                                    )
                                  }
                                </div>
                              ) : (
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

                              )
                            }

                            <div
                              className="faNum inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">{year.title}</div>
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
              </React.Fragment>
            ))
          }
        </div>
      </div>
    </div>
  );
}
