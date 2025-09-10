export interface Project {
  index: number;
  title: { fa: string; en: string };
  title_badge?: string;
  description: { fa: string; en: string };
  technologies: string[];
  image: string;
  link: string;
}

export interface YearProject {
  index: number;
  title: string;
  projects: Project[];
}

export const projectsData: YearProject[] = [
  {
    index: 100,
    title: "ongoing",
    projects: [
      {
        index: 10,
        title: {
          fa: "برگر هایم",
          en: "BurgerHeim",
        },
        description: {
          fa: "برگر هایم، برگرشاپی وامدار به رسپی‌های اصلی آمریکایی، با برندینگی متفاوت، تمیز و قابل اعتماد است که در حال حاضر با تمرکز بر منو‌ایی با محوریت برگر و ساید‌های آمریکایی به فعالیت می‌پردازد. برگرها تماما رسپی‌های اورجینال خودمان بوده که با ویژگی‌های مختلفی در حال ارائه هستند.",
          en: "Burgerheim, a burger shop with its own specialized recipes and indebted to authentic American recipes, strives to bring the dining experience closer to that of an American diner.",
        },
        technologies: ["NextJS", "DirectUs", "Tailwind", "FramerMotion"],
        image: "/images/projects/burgerheim-mockup.jpg",
        link: "https://www.burgerheim.ir/",
      },
      {
        index: 20,
        title: {
          fa: "استودیو برابر",
          en: "Barabar Studio",
        },
        description: {
          fa: "« شرکت عمران و معماری برابر » شرکت برابر حاصل بیش از ۱۵ سال تفکر در خلق آثار متمایز و منحصر به فرد است و تلاش کرده در زمینه نوآوری در طراحی و ساخت همواره سرآمد باشد.",
          en: "Barabar Development and Architecture Company is the result of more than 15 years of thinking in creating distinctive and unique works and has strived to always be a leader in the field of innovation in design and construction.",
        },
        technologies: ["NextJS", "DirectUs", "Tailwind", "FramerMotion"],
        image: "/images/projects/barabar-mockup.jpg",
        link: "https://barabargroups.com/",
      },
    ],
  },
  {
    index: 150,
    title: "1404",
    projects: [
      {
        index: 10,
        title: {
          fa: "برشته کاری قهوه ON&ON",
          en: "ON&ON Coffee Roastery",
        },
        description: {
          fa: "ارائه جریانی بی‌وقفه از کیفیت و طعم، در محیطی آموزشی که همه بتوانند سلیقه‌ی ویژه و سفر منحصر به فرد خود را در دنیای قهوه کشف کنند.",
          en: "Providing a continuous flow of quality and taste, in an educational environment where everyone can discover their unique taste and journey in the world of coffee.",
        },
        technologies: ["Wordpress", "SEO", "Elementor", "Server optimization"],
        image: "/images/projects/onandon-mockup.jpg",
        link: "https://onandonroastery.com/",
      },
      {
        index: 20,
        title: {
          fa: "نرم افزار ERP هلدینگ دیوینا",
          en: "Divina Holding ERP Software",
        },
        description: {
          fa: "هلدینگ دیوینا متشکل از مجموعه‌های زنجیره‌ای فعال در حوزه پوزشاک و رستوران لوکس به صورت تخصصی در محدوده فرشته تهران فعالیت دارد.",
          en: "Divina Holding consists of chain collections active in the field of clothing and luxury restaurants specializing in the Fereshte area of Tehran.",
        },
        technologies: ["Odoo", "Python", "JavaScript", "Owl", "VanillaJS"],
        image: "/images/projects/divina-mockup.jpg",
        link: "#",
      },
      {
        index: 30,
        title: {
          fa: "پتروکلین",
          en: "Petroclean",
        },
        title_badge: "v2",
        description: {
          fa: "این شرکت فعالیت خود را از همان سال شروع و با نام تجاری «پتروکلین» تولیدات متنوعی را در بازار عرضه کرد. شایان ذکر است پتروکلین اولین تولید کننده پلاستیک‌های تجزیه پذیر در کشور است.",
          en: "This company started its activity from the same year and offered various products to the market under the brand name 'Petroclean'. It is noteworthy that Petroclean is the first producer of biodegradable plastics in the country.",
        },
        technologies: ["NextJS", "DirectUs", "Tailwind", "FramerMotion"],
        image: "/images/projects/petroclean-mockup-v2.jpg",
        link: "#",
      },
      {
        index: 40,
        title: {
          fa: "شرکت کاهنربا",
          en: "Kahanroba Company",
        },
        description: {
          fa: "شرکت کاهنربا بعنوان شرکت پیشرو گامهای بلندی در راستای بومی سازی تکنولوژی های استخراج و فرآوری مواد معدنی برداشته است.",
          en: "Kahanroba Company, as a pioneer company, has taken long steps towards localizing extraction and processing technologies for mineral materials.",
        },
        technologies: ["Wordpress", "Elementor"],
        image: "/images/projects/kahanroba-mockup.jpg",
        link: "https://kahanroba.com/",
      },
      {
        index: 50,
        title: {
          fa: "گروه مبلمان زیکس",
          en: "Zix Furniture Group",
        },
        description: {
          fa: "شرکت زیکس با سابقه چندین ساله فعال در زمینه تولید انواع مبلمان و اکسسوری های خاص با هدف معرفی محصولات خود در سطح وب و ارائه خدمات به مشتریان خود، اقدام به طراحی و پیاده سازی وبسایت خود کرده است.",
          en: "Zix Company with several years of experience active in the production of various furniture and special accessories, with the aim of introducing its products on the web and providing services to its customers, has designed and implemented its website.",
        },
        technologies: ["Wordpress", "Elementor"],
        image: "/images/projects/zix-website-mockup.jpg",
        link: "https://alikheiri.com/",
      },
    ],
  },
  {
    index: 200,
    title: "1403",
    projects: [
      {
        index: 10,
        title: {
          fa: "پت‌شاپ زنجیره‌ای ژیوان",
          en: "Zivan Chain Pet Shop",
        },
        description: {
          fa: "پت‌شاپ ژیوان با شعار «ژیوان، دوست حیوان و انسان»، به‌عنوان بزرگ‌ترین فروشگاه ملزومات و غذای حیوانات‌خانگی در ایران با همفکری و کارشناسی تیمی باتجربه و دوستدار محیط‌زیست و حیوانات، اولین شعبه‌ی خود را در سال 1394 در خیابان ولی‌عصر تهران تأسیس کرد.",
          en: "Zivan Pet Shop with the slogan 'Zivan, friend of animals and humans', as the largest pet supplies and food store in Iran, established its first branch in 2015 on Valiasr Street, Tehran, with the collaboration and expertise of an experienced team who are environmentally and animal-friendly.",
        },
        technologies: ["Wordpress", "SEO", "PHP", "Server optimization"],
        image: "/images/projects/zivan-mockup.jpg",
        link: "https://zivanpetshop.com/",
      },
      {
        index: 20,
        title: {
          fa: "اپلیکیشن دنیلی",
          en: "Daniellee Application",
        },
        description: {
          fa: "«دنیلی» نماینده ی کوچک و موفقی از مهد دنیای مد و زیبایی، ایتالیا است. دنیلی برندی است که توانسته به خوبی ترندهای روز دنیا و هنر اصیل ایتالیایی را همراه کند و با شناخت نیاز مردم، محصولاتی جذاب و خاص طراحی کند.",
          en: "'Daniellee' is a small and successful representative of the cradle of the fashion and beauty world, Italy. Daniellee is a brand that has successfully combined world trends and authentic Italian art, and by understanding people's needs, has designed attractive and special products.",
        },
        technologies: [
          "Android",
          "iOS",
          "Cloud Solutions",
          "RESTapi",
          "Laravel",
        ],
        image: "/images/projects/daniellee-mockup-min.jpg",
        link: "#",
      },
      {
        index: 40,
        title: {
          fa: "Omnicart",
          en: "Omnicart",
        },
        title_badge: "v2",
        description: {
          fa: "Omnicart یک راه حل همه کاره است که به شما کمک می کند تجارت پذیرایی خود را توسعه دهید، عملیات را ساده کنید و سود خود را حفظ کنید.",
          en: "Omnicart is an all-in-one solution that helps you grow your hospitality business, streamline operations, and maintain your profits.",
        },
        technologies: ["NextJS", "Tailwind", "FramerMotion", "SEO"],
        image: "/images/projects/omnicart-v2.jpg",
        link: "https://web.archive.org/web/20240920054405/https://omnicart.tech/",
      },
      {
        index: 50,
        title: {
          fa: "اپلیکیشن اندروید وی وین",
          en: "VIWIN Android App",
        },
        title_badge: "v2",
        description: {
          fa: "وی وی شبکه گسترده فعالان حوزه ورزش و سلامت است و به شما این امکان رو میده که برای رسیدن به اهداف ورزشیتون نزدیکترین و بهترین انتخاب رو داشته باشید.",
          en: "VV is an extensive network of sports and health activists that gives you the opportunity to have the closest and best choice to achieve your sports goals.",
        },
        technologies: ["Android", "Laravel", "RESTapi"],
        image: "/images/projects/viwin-android-mockup.jpg",
        link: "https://viwin.link/",
      },
      {
        index: 60,
        title: {
          fa: "Fundracing",
          en: "Fundracing",
        },
        description: {
          fa: "فاندریسینگ یک تیم بین المللی تشکیل شده از افراد با تجربه در بازار مالی است که سرمایه مورد نیاز تریدر ها را تامین کرده و از تریدر های برتر و با استعداد حمایت میکنید.",
          en: "Fundracing is an international team of experienced individuals in the financial market that provides the capital needed by traders and supports top and talented traders.",
        },
        technologies: [
          "NextJS",
          "Shadcn/ui",
          "SEO",
          "RadixUi",
          "Server optimization",
        ],
        image: "/images/projects/fundracing-mockup.jpg",
        link: "https://web.archive.org/web/20240622024127/fundracing.co",
      },
      {
        index: 70,
        title: {
          fa: "قهوه فروشی هایک",
          en: "Hayk Coffee Roasters",
        },
        description: {
          fa: "گروه هایک با استفاده از بهترین دانه‌های‌ قهوه‌ و به‌روزترین تکنیک‌های برشته‌کاری، سعی دارد تا شما هارمونی منحصربه‌فرد  طعم‌ها را در فنجان قهوه‌ی خود تجربه کنید.",
          en: "Hayk Group, using the best coffee beans and the most up-to-date roasting techniques, tries to make you experience the unique harmony of flavors in your coffee cup.",
        },
        technologies: ["Wordpress", "SEO", "Elementor", "Server optimization"],
        image: "/images/projects/hayk-mockup.jpg",
        link: "https://hayk.coffee",
      },
      {
        index: 80,
        title: {
          fa: "نرم افزار ERP مبلمان زیکس",
          en: "Zix Furniture ERP Software",
        },
        description: {
          fa: "شرکت زیکس با سابقه چندین ساله فعال در زمینه تولید انواع مبلمان و اکسسوری های خاص واقع در منطقه صنعتی سیاهسنگ",
          en: "Zix Company with several years of experience active in the production of various furniture and special accessories located in the Siahsang industrial zone.",
        },
        technologies: ["Laravel", "NextJS", "GraphQL", "MySQL", "Tailwind CSS"],
        image: "/images/projects/zix-mockup.jpg",
        link: "#",
      },
      {
        index: 90,
        title: {
          fa: "CRM مجموعه الهیه ۳۳",
          en: "Elahiyeh 33 CRM System",
        },
        description: {
          fa: "نرم افزار مدیریت مشتریان طلا با اتصال مستقیم به اسنپ فود و همگام سازی با دستگاه‌های مجموعه شیرینی‌فروشی‌های زنجیره‌ای الهیه ۳۳، ارتباط با مجموعه با مشتری و فروش روزانه مجموعه فوق را بهبود بخشیده است.",
          en: "Premium customer management software with direct connection to SnappFood and synchronization with the devices of the Elahiyeh 33 confectionery chain, which has improved the relationship between the collection and customers and the daily sales of the above collection.",
        },
        technologies: [
          "NextJS",
          "Shadcn/ui",
          "ElasticSearch",
          "RadixUi",
          "PHP",
        ],
        image: "/images/projects/e33-mockup.jpg",
        link: "#",
      },
      {
        index: 100,
        title: {
          fa: "فلی",
          en: "Feli",
        },
        description: {
          fa: "ما در تلاش هستیم تا تجربه‌ای را ارائه دهیم که ماهیت لباس‌های ژاپنی ساده، راحت، جادار و کاربردی را در بر گیرد.",
          en: "We strive to provide an experience that encompasses the nature of Japanese clothing that is simple, comfortable, durable and practical.",
        },
        technologies: ["Wordpress", "SEO", "Elementor", "Server optimization"],
        image: "/images/projects/feli-mockup.jpg",
        link: "https://feli.club/",
      },
      {
        index: 110,
        title: {
          fa: "پتروکلین",
          en: "Petroclean",
        },
        description: {
          fa: "این شرکت فعالیت خود را از همان سال شروع و با نام تجاری «پتروکلین» تولیدات متنوعی را در بازار عرضه کرد. شایان ذکر است پتروکلین اولین تولید کننده پلاستیک‌های تجزیه پذیر در کشور است.",
          en: "This company started its activity from the same year and offered various products to the market under the brand name 'Petroclean'. It is noteworthy that Petroclean is the first producer of biodegradable plastics in the country.",
        },
        technologies: ["Wordpress", "Elementor", "SEO"],
        image: "/images/projects/petroclean-mockup.jpg",
        link: "https://petroclean.co/",
      },
      {
        index: 120,
        title: {
          fa: "تهران زین",
          en: "Tehran Zine",
        },
        description: {
          fa: "تهران زین در سال ۱۴۰۰ با هدف فراهم کردن امکان تولید و نشر «زین» به عنوان رسانه‌ای شناخته شده و پر اهمیت در جهان برای هنرمندان جوان ایرانی بنا نهاده شد.",
          en: "Tehran Zine was established in 2021 with the goal of providing the possibility of producing and publishing 'Zine' as a well-known and important media in the world for young Iranian artists.",
        },
        technologies: ["Wordpress", "Elementor"],
        image: "/images/projects/tehranzine-mockup.jpg",
        link: "https://beta.tehranzine.com/",
      },
      {
        index: 130,
        title: {
          fa: "گروه تشریفات شاهان",
          en: "Shahan Ceremony Group",
        },
        description: {
          fa: "شرکت فعال در حوزه تشریفات و مراسم عروسی با تجربه چند دهه در این  زمینه و فعال در کشور های ترکیه، امارات و ایران.",
          en: "A company active in the field of ceremonies and weddings with decades of experience in this field and active in Turkey, UAE and Iran.",
        },
        technologies: ["Wordpress", "Elementor"],
        image: "/images/projects/shahan-mockup.jpg",
        link: "https://shahanceremony.com/",
      },
      {
        index: 140,
        title: {
          fa: "کافه آرت استوریج",
          en: "Art Storage Cafe",
        },
        description: {
          fa: "کافه گالری فعال در شهر تهران محدوده فلسطین که از سال ۱۴۰۳ فعالیت خود را آغاز کرده است.",
          en: "An active gallery cafe in Tehran's Palestine area that started its activity in 2024.",
        },
        technologies: ["NextJS", "Tailwind", "PayloadCMS", "PWA"],
        image: "/images/projects/artstorage-mockup.jpg",
        link: "https://artstorage.social/",
      },
    ],
  },
  {
    index: 300,
    title: "1402",
    projects: [
      {
        index: 10,
        title: {
          fa: "اپلیکیشن iOS وی وین",
          en: "VIWIN iOS App",
        },
        title_badge: "v2",
        description: {
          fa: "وی وی شبکه گسترده فعالان حوزه ورزش و سلامت است و به شما این امکان رو میده که برای رسیدن به اهداف ورزشیتون نزدیکترین و بهترین انتخاب رو داشته باشید.",
          en: "VIWIN is an extensive network of sports and health activists that gives you the opportunity to have the closest and best choice to achieve your sports goals.",
        },
        technologies: [
          "NextJS",
          "iOS",
          "Laravel",
          "RESTapi",
          "Server Optimization",
        ],
        image: "/images/projects/viwin-ios.jpg",
        link: "https://viwin.link/",
      },
      {
        index: 20,
        title: {
          fa: "صرافی کیوسک",
          en: "Kiosk Exchange",
        },
        description: {
          fa: "صرافی کیوسک محصول شرکت کیمیاگران سرمایه همراه ایرانیان است. این صرافی در سال 1400 فعالیت خود را در شهر تهران آغاز کرد. بر اساس اطلاعات درج شده در سایت رسمی صرافی کیوسک، این صرافی بیش از 200 هزار کاربر فعال دارد.",
          en: "Kiosk Exchange is a product of Kimyagaran Sarmaye Hamrah Iranians Company. This exchange started its activity in Tehran in 2021. According to the information posted on the official website of Kiosk Exchange, this exchange has more than 200,000 active users.",
        },
        technologies: [
          "React",
          "Tailwind",
          "ReactRouter",
          "Server Optimization",
        ],
        image: "/images/projects/kiosk-mockup.jpg",
        link: "https://kioosk.net/",
      },
      {
        index: 30,
        title: {
          fa: "زینوم",
          en: "Zeenome",
        },
        description: {
          fa: "سرویس زینوم با هدف کاهش سرعت پیر شدن (aging) و افزایش عمر سالم شما طراحی شده است.",
          en: "Zeenome service is designed to reduce the speed of aging and increase your healthy lifespan.",
        },
        technologies: ["Wordpress", "Elementor"],
        image: "/images/projects/zeenome-mockup.jpg",
        link: "https://zeenome.ir/",
      },
      {
        index: 40,
        title: {
          fa: "رستوران آپادانا اتریش",
          en: "Apadana Restaurant Austria",
        },
        description: {
          fa: "رستوران آپادانا فضایی دنج، گرم و آرام دارد و در شهر وین اتریش واقع شده است. در این رستوران انواع غذاهای حلال خوشمزه از جمله گریل، کباب، برنج زعفرانی، کورما، مرغ کبابی و بسیاری از غذاهای خوشمزه دیگر ارائه می شود",
          en: "Apadana restaurant has a cozy, warm and peaceful atmosphere and is located in Vienna, Austria. This restaurant serves all kinds of delicious halal food including grills, kebabs, saffron rice, korma, grilled chicken and many other delicious dishes.",
        },
        technologies: ["Wordpress", "Elementor"],
        image: "/images/projects/apadana-mockup.jpg",
        link: "http://apadana.at/",
      },
    ],
  },
  {
    index: 400,
    title: "1401",
    projects: [
      {
        index: 10,
        title: {
          fa: "آکادمی مالی آهی",
          en: "Ahy Financial Academy",
        },
        description: {
          fa: "آکادمی آهی محیطی پویا و مناسب برای افراد مستعد و با انگیزه رشد در زمینه بازارهای مالی است. شما در آکادمی آهی همزمان با کار در حوزه تخصصی خود از مزایای آموزش های بازارهای مالی(بورس- بازارهای جهانی و ارزهای دیجیتال) بهره مند خواهید شد.",
          en: "Ahy Academy is a dynamic and suitable environment for talented and motivated individuals to grow in the field of financial markets. At Ahy Academy, while working in your specialized field, you will benefit from the advantages of financial market training (stock exchange - global markets and digital currencies).",
        },
        technologies: ["Vue", "Laravel", "Bootstrap"],
        image: "/images/projects/ahy-mockup.jpg",
        link: "https://web.archive.org/web/20220704114151/https://latifahy.com/",
      },
      {
        index: 20,
        title: {
          fa: "Omnicart",
          en: "Omnicart",
        },
        title_badge: "v1",
        description: {
          fa: "Omnicart یک راه حل همه کاره است که به شما کمک می کند تجارت پذیرایی خود را توسعه دهید، عملیات را ساده کنید و سود خود را حفظ کنید.",
          en: "Omnicart is an all-in-one solution that helps you grow your hospitality business, streamline operations, and maintain your profits.",
        },
        technologies: ["NextJS", "Tailwind", "FramerMotion", "SEO"],
        image: "/images/projects/omnicart-v1.jpg",
        link: "https://web.archive.org/web/20230402150800/https://omnicart.tech/",
      },
    ],
  },
  {
    index: 500,
    title: "1400",
    projects: [
      {
        index: 10,
        title: {
          fa: "یونیلیور ایران",
          en: "Unilever Iran",
        },
        description: {
          fa: "یونیلیور صاحب بسیاری از برندهای معروف دنیا در دسته بندی های غذایی، نوشیدنی، تمیزکننده های محیطی و نظافت شخصی صابون لوکس، چای لیپتون، شامپوهای کلییر، سان سیلک و داو ، شوینده های سیف، دامستوس، امو و ... می باشد.",
          en: "Unilever owns many famous brands in the world in the categories of food, beverages, environmental cleaners and personal hygiene such as Lux soap, Lipton tea, Clear, Sunsilk and Dove shampoos, Cif, Domestos, Omo detergents, etc.",
        },
        technologies: ["Wordpress", "Elementor"],
        image: "/images/projects/unilever-mockup.jpg",
        link: "https://unilever.ir/",
      },
      {
        index: 20,
        title: {
          fa: "فیناپ",
          en: "FinUp",
        },
        description: {
          fa: "نخستین رویداد تخصصی در حوزه فناوری‌ھای مالی (فین‌تک) که یک کامیونیتی بزرگ را گردهم آورده است. رویداد فیناپ در خردادماه سال ۱۳۹۶ با سه هدف آموزش، شبکه‌سازی و توسعه فین‌تک به سراسر کشور با برگزاری رویدادهای ماهانه آغاز به کار کرد.",
          en: "The first specialized event in the field of financial technologies (fintech) that brought together a large community. The FinUp event started in May 2017 with three goals of education, networking and development of fintech throughout the country by holding monthly events.",
        },
        technologies: ["Wordpress", "Elementor"],
        image: "/images/projects/finup-mockup.jpg",
        link: "https://finupevent.ir/",
      },
      {
        index: 30,
        title: {
          fa: "کیارش مسیبی",
          en: "Kiarash Mosayebi",
        },
        description: {
          fa: " مسیبی متولد ۱۳۶۹ عضو انجمن عکاسان ایران و انجمن عکاسان خانه تئاتر است. در اردیبهشت ۱۳۹۶ تندیس بهترین عکس بیستمین جشنواره تئاتر دانشگاهی را دریافت کرد. در سال ۱۳۹۴ مقام دوم، سی و چهارمین جشنواره بین المللی عکس تئاتر فجر را کسب کرد.",
          en: "Mosayebi, born in 1990, is a member of the Iranian Photographers Association and the Theater House Photographers Association. In April 2017, he received the award for best photo at the 20th University Theater Festival. In 2015, he won second place in the 34th Fajr International Theater Photo Festival.",
        },
        technologies: ["Wordpress", "Elementor"],
        image: "/images/projects/kiarash-mockup.jpg",
        link: "https://kiarashmosayebi.com/",
      },
      {
        index: 40,
        title: {
          fa: "وی‌وی",
          en: "VV",
        },
        description: {
          fa: "وی وی شبکه گسترده فعالان حوزه ورزش و سلامت است و به شما این امکان رو میده که برای رسیدن به اهداف ورزشیتون نزدیکترین و بهترین انتخاب رو داشته باشید.",
          en: "VV is an extensive network of sports and health activists that gives you the opportunity to have the closest and best choice to achieve your sports goals.",
        },
        technologies: [
          "Laravel",
          "Tailwind CSS",
          "HTML",
          "CSS",
          "Socket.io",
          "Docker",
        ],
        image: "/images/projects/vv-mockup.jpg",
        link: "https://web.archive.org/web/20231128154914/https://the-vv.com/",
      },
      {
        index: 50,
        title: {
          fa: "اطلس جامع آزمایشگاهی فارسی",
          en: "Persian Comprehensive Laboratory Atlas",
        },
        description: {
          fa: "جامع‌ترین مرجع مصور در زمینه تشخیص آزمایشگاهی برای پزشکان و دانشجویان پزشکی به سفارش شرکت پل ایده آل پارس",
          en: "The most comprehensive illustrated reference in the field of laboratory diagnosis for doctors and medical students commissioned by Pole Ideal Pars Company.",
        },
        technologies: ["Laravel", "Bootstrap", "RESTapi", "SEO", "Metronic"],
        image: "/images/projects/atlas-mockup.jpg",
        link: "https://medpip.com/atlas/",
      },
      {
        index: 60,
        title: {
          fa: "شرکت بهینه‌پردازان",
          en: "Behine Pardazan Company",
        },
        description: {
          fa: "بهینه‌پردازان راهکارهایی برای کاهش مراجعات حضوری و تسهیل امور مودیان طراحی شده است و نقش مهمی در کاهش خطاهای پرونده‌های مالیاتی دارد.",
          en: "Behine Pardazan has designed solutions to reduce in-person referrals and facilitate taxpayer affairs and plays an important role in reducing errors in tax files.",
        },
        technologies: ["Wordpress", "Elementor"],
        image: "/images/projects/behinepardazan-mockup.jpg",
        link: "https://web.archive.org/web/20221120051926/https://www.behinepardazan.ir/",
      },
    ],
  },
  {
    index: 600,
    title: "1399",
    projects: [
      {
        index: 10,
        title: {
          fa: "آوید فوم",
          en: "Avid Foam",
        },
        description: {
          fa: "آوید فوم یک تولید کننده داخلی بردهای فومی است که محصولاتش در طیف گسترده ای از زمینه ها از قبیل چاپ دیجیتال ، چاپ مسطح ، استندهای تبلیغاتی نمایشگاهی و فروشگاهی ، برش گرافیکی و علائم در محیط های داخلی استفاده می شود.",
          en: "Avid Foam is a domestic manufacturer of foam boards whose products are used in a wide range of fields such as digital printing, flat printing, exhibition and shop advertising stands, graphic cutting and signs in indoor environments.",
        },
        technologies: ["Wordpress", "Site Optimization"],
        image: "/images/projects/avid-mockup.jpg",
        link: "https://avidfoam.ir/",
      },
    ],
  },
  {
    index: 700,
    title: "1398",
    projects: [
      {
        index: 10,
        title: {
          fa: "پل ایده‌آل پارس",
          en: "Pole Ideal Pars",
        },
        description: {
          fa: "شرکت پل ایده آل پارس (P.I.P) دارنده گواهی نامه های مدیریت کیفیت ISO 13485:2016 و ISO 9001:2015 با بیش از سه دهه تجربه در امور تولید ، توزیع و فروش محصولات پزشکی و آزمایشگاهی در راستای پیشبرد سلامت جامعه فعالیت می نماید.",
          en: "Pole Ideal Pars Company (P.I.P) holding ISO 13485:2016 and ISO 9001:2015 quality management certificates with more than three decades of experience in the production, distribution and sale of medical and laboratory products operates in line with advancing community health.",
        },
        technologies: ["Wordpress", "Elementor", "RESTapi", "SEO"],
        image: "/images/projects/pip-mockup.jpg",
        link: "https://medpip.com/",
      },
      {
        index: 20,
        title: {
          fa: "پازل استودیو",
          en: "Puzzle Studio",
        },
        description: {
          fa: "گروه استودیوهای زنجیره‌ای پازل همزمان با کرونا تغییری در روی خدمات دهی به مشتریان خود با راه اندازی یک پلتفرم جامع برگزاری کلاس آنلاین با صدها قابلیت جذاب انجام داد.",
          en: "The Puzzle chain studios group, simultaneously with Corona, made a change in serving their customers by launching a comprehensive platform for holding online classes with hundreds of attractive features.",
        },
        technologies: ["Laravel", "Bootstrap", "HTML", "CSS", "Socket.io"],
        image: "/images/projects/puzzle-mockup.jpg",
        link: "https://web.archive.org/web/20220507210910/https://puzzle-stu.com/",
      },
    ],
  },
  {
    index: 800,
    title: "1395",
    projects: [
      {
        index: 10,
        title: {
          fa: "Nestous",
          en: "Nestous",
        },
        description: {
          fa: "تولید کننده آینه‌های هوشمند مناسب فضاهای آرایشگاهی و سالن‌های زیبایی، فعال در کشور کانادا، هلند و دانمارک",
          en: "Manufacturer of smart mirrors suitable for hairdressing spaces and beauty salons, active in Canada, Netherlands and Denmark.",
        },
        technologies: ["Wordpress", "Divi"],
        image: "/images/projects/nestous-mockup.jpg",
        link: "https://web.archive.org/web/20170709164039/http://nestous.com:80/",
      },
      {
        index: 20,
        title: {
          fa: "خبرگزاری موسیقی هنر",
          en: "Music Art News Agency",
        },
        description: {
          fa: "موسیقی هنر ، مرجع اطلاع رسانی اخبار اکران فیلم های سینمایی ، تئاتر ها و موارد دیگر مرتبط با هنر به زبان فارسی همراه با اطلاع رسانی تخفیف کنسرت ها.",
          en: "Music Art, the reference for news about movie screenings, theaters and other art-related matters in Persian, along with information about concert discounts.",
        },
        technologies: ["Wordpress", "SEO"],
        image: "/images/projects/musiceart-mockup.jpg",
        link: "https://web.archive.org/web/20181024072617/http://musiceart.com/",
      },
    ],
  },
  {
    index: 900,
    title: "1394",
    projects: [
      {
        index: 10,
        title: {
          fa: "برونتاب انرژی",
          en: "Bruntab Energy",
        },
        title_badge: "v1",
        description: {
          fa: "برونتاب انرژی، تولیدکننده تجهیزات هوشمند اندازه‌گیری، تفکیک هوشمند کنتورهای آب، برق، گاز (انرژی) و تجهیزات مانیتورینگ صنعتی مبتنی بر اینترنت اشیاء.",
          en: "Bruntab Energy is a manufacturer of smart metering equipment, intelligent separation of water, electricity, and gas (energy) meters, and industrial monitoring devices based on the Internet of Things (IoT).",
        },
        technologies: ["Wordpress", "Divi"],
        image: "/images/projects/bruntab-mockup.jpg",
        link: "https://web.archive.org/web/20181113142507/http://bruntab.com/",
      },
    ],
  },
];
