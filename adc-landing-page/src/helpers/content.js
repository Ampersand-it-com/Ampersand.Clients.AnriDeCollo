import girls1 from "../assets/img/girls-1-min.webp";
import girls2 from "../assets/img/girls-2-min.jpg";
import products1 from "../assets/img/products-7-min.jpg";
import products2 from "../assets/img/products-1-min.jpg";
import products3 from "../assets/img/products-8-min.jpg";
import products4 from "../assets/img/products-4-min.jpg";
import products5 from "../assets/img/products-9-min.jpg";
import workflow from "../assets/img/workflow-min.jpg";
import leather from "../assets/img/leather-min.jpg";
import serviceIcon1 from "../assets/icons/search.svg";
import serviceIcon2 from "../assets/icons/leather.svg";
import serviceIcon3 from "../assets/icons/leather-cutter.svg";
import serviceIcon4 from "../assets/icons/sewing.svg";
import review1 from "../assets/img/review-01.png";
import review2 from "../assets/img/review-02.png";
import review3 from "../assets/img/review-03.png";
import review4 from "../assets/img/review-04.png";
import mainGirls1 from "../assets/img/main-girls-01-min.jpg";
import mainGirls2 from "../assets/img/main-girls-02-min.jpg";
import mainGirls3 from "../assets/img/main-girls-03-min.jpg";
import mainGirls4 from "../assets/img/main-girls-04-min.jpg";
import mainProducts1 from "../assets/img/main-product-01-min.jpg";
import mainProducts2 from "../assets/img/main-product-02-min.jpg";
import mainProducts3 from "../assets/img/main-product-03-min.jpg";
import mainProducts4 from "../assets/img/main-product-04-min.jpg";

export default {
  header: {
    logo: "ADC",
    navigation: [
      { ukr: "Про нас", eng: "About us", href: "#about" },
      { ukr: "Переваги", eng: "Benefits", href: "#benefits" },
      { ukr: "Послуги", eng: "Services", href: "#services" },
      { ukr: "Продукція", eng: "Products", href: "#products" },
      { ukr: "Відгуки", eng: "Reviews", href: "#reviews" },
      { ukr: "FAQ", eng: "FAQ", href: "#faq" },
    ],
    locale: {
      ukr: "Укр",
      eng: "Eng",
    },
    action: { ukr: "Контакти", eng: "Contacts", href: "#contact" },
  },

  main: {
    title: { ukr: "Ваш стиль — Наш витвір", eng: "Your style — Our creation" },
    description: {
      ukr: "Створюємо взуття, яке відповідає вашим найвищим очікуванням",
      eng: "Creating shoes that meet your highest expectations",
    },
    action: {
      urk: "Обговорити деталі",
      eng: "Discuss details",
      href: "#contact",
    },
    details: { ukr: "Детальніше", eng: "More details", href: "#features" },
    img1: girls1,
    img2: products1,
    slider1: [mainGirls1, mainGirls2, mainGirls3, mainGirls4],
    slider2: [mainProducts1, mainProducts2, mainProducts3, mainProducts4],
  },

  features: [
    {
      title: { ukr: "Виробництво “під ключ”", eng: "Turnkey Production" },
      description: {
        ukr: "Ми пропонуємо можливість створити взуття під вашим брендом, використовуючи наші готові моделі. Ви можете обрати дизайн, а також внести зміни в матеріали, кольори, підошви та фурнітуру. Це спрощений спосіб започаткувати власний бренд взуття.",
        eng: "We offer the opportunity to create footwear under your brand using our ready-made models. You can choose the design and make adjustments to the materials, colors, soles, and fittings. This is a simplified way to start your own footwear brand.",
      },
    },
    {
      title: {
        ukr: "Клієнтоорієнтований підхід",
        eng: "Customer-Oriented Approach",
      },
      description: {
        ukr: "Ми не просто виконуємо замовлення, а прагнемо стати вашим надійним партнером. Наша мета — допомогти вам досягти бізнес-цілей, особливо коли власних ресурсів не вистачає.",
        eng: "We don't just fulfill orders, we strive to become your trusted partner. Our goal is to help you achieve your business objectives, especially when your own resources are insufficient.",
      },
    },
    {
      title: {
        ukr: "Власний Відділ Розробки",
        eng: "In-House Development Department",
      },
      description: {
        ukr: "У вас є ідея, але немає ескізу? Не проблема. Наші фахівці створять унікальний дизайн і допоможуть втілити вашу ідею в реальний продукт.",
        eng: "Have an idea but no sketch? No problem. Our experts will create a unique design and help turn your idea into a real product.",
      },
    },
  ],

  about: {
    title: { ukr: "Про нас", eng: "About Us" },
    action: { ukr: "Сконтактуйся", eng: "Contact Us", href: "#contact" },
    description: {
      ukr: "Ми – це команда талановитих і відданих своїй справі професіоналів, які щодня створюють якісне та стильне взуття. Уже 7 років Anri De Collo забезпечує виробництво взуття для різних брендів. Ми відповідаємо за повний цикл: від перших ескізів до фінальної перевірки якості. Кожен етап під нашим контролем, щоб ви отримали надійний продукт, готовий до ринку.",
      eng: "We are a team of talented and dedicated professionals who create high-quality and stylish footwear every day. For 7 years, Anri De Collo has been producing footwear for various brands. We handle the entire cycle: from the initial sketches to the final quality check. Every stage is under our control to ensure you receive a reliable product ready for the market.",
    },
  },

  history: {
    title: {
      ukr: "Історія компанії",
      eng: "Company History",
    },
    img: girls2,
    slides: [
      {
        ukr: "Ми — сімейна компанія, заснована у 2017 році в Україні, яка продовжує багаторічні традиції у виробництві якісного жіночого та підліткового взуття. Ми з гордістю створюємо продукцію, яка відповідає найвищим стандартам якості та сучасним трендам.",
        eng: "We are a family-owned company, founded in 2017 in Ukraine, continuing a long tradition of producing high-quality women's and youth footwear. We proudly create products that meet the highest quality standards and modern trends.",
      },
      {
        ukr: "Anri De Collo спеціалізується на виробництві взуття як під власним брендом, так і для інших компаній. Від приватних замовників до великих брендів — ми є надійним партнером для тих, хто шукає стабільне та якісне виробництво.",
        eng: "Anri De Collo specializes in the production of footwear both under its own brand and for other companies. From private clients to large brands, we are a reliable partner for those seeking stable and high-quality production.",
      },
      {
        ukr: "Ми постійно розширюємо можливості нашого виробництва, збільшуємо команду та вдосконалюємо процеси, що дозволяє нам зростати та впевнено рухатися вперед. Незмінними залишаються наша увага до деталей і прагнення до високої якості.",
        eng: "We continuously expand our production capabilities, grow our team, and improve our processes, which allows us to develop and move confidently forward. Our attention to detail and commitment to high quality remain unchanged.",
      },
      {
        ukr: "Наша місія — створювати взуття, яке підкреслює індивідуальність і просуває українського виробника на світовій арені.",
        eng: "Our mission is to create footwear that emphasizes individuality and promotes Ukrainian manufacturers on the global stage.",
      },
    ],
  },

  benefits: {
    title: {
      ukr: "Переваги",
      eng: "Benefits",
    },
    slides: [
      {
        title: {
          ukr: "Висока якість виробництва",
          eng: "High Production Quality",
        },
        description: {
          ukr: "Ми використовуємо натуральну шкіру, високоякісні штучні та еко матеріали, контролюємо кожний етап виробництва, щоб гарантувати створення взуття найкращої якості",
          eng: "We use high-quality artificial and eco-friendly materials and perform thorough quality control at every stage of production to guarantee premium footwear.",
        },
      },
      {
        title: {
          ukr: "Орієнтація на клієнта",
          eng: "Client-Oriented Approach",
        },
        description: {
          ukr: "Можливість замовити взуття з урахуванням ваших індивідуальних побажань щодо дизайну, матеріалів та розмірів",
          eng: "The ability to order footwear tailored to your individual design, material, and size preferences.",
        },
      },
      {
        title: {
          ukr: "Розумна ціна",
          eng: "Reasonable Pricing",
        },
        description: {
          ukr: "Прямі постачання та ефективні процеси дозволяють нам пропонувати конкурентоспроможну ціну",
          eng: "Direct supply and efficient processes allow us to offer competitive pricing.",
        },
      },
      {
        title: {
          ukr: "Надійні партнерські відносини",
          eng: "Reliable Partnerships",
        },
        description: {
          ukr: "Працюємо на основі чітких договорів та гарантій",
          eng: "We work based on clear contracts and guarantees.",
        },
      },
      {
        title: {
          ukr: "Гнучкі умови замовлення",
          eng: "Flexible Order Conditions",
        },
        description: {
          ukr: "Можливість замовити партій з індивідуальним MOQ",
          eng: "The ability to place orders with an individual MOQ.",
        },
      },
    ],
  },

  services: {
    title: { ukr: "Послуги", eng: "Services" },
    description: {
      ukr: "Все, що нам потрібно – це ваша ідея. Ми беремо на себе розробку дизайну та подальшу реалізацію проєкту.",
      eng: "All we need is your idea. We take on the design development and further project implementation.",
    },
    caption: {
      ukr: "Надаємо послуги з виробництва взуття на замовлення та контрактного виробництва з нашого каталогу під вашим брендом.",
      eng: "We offer custom shoe manufacturing services and contract production from our catalog under your brand.",
    },
    slides: [
      {
        icon: serviceIcon2,
        title: { ukr: "Запропонуємо вибір", eng: "We offer options" },
        description: {
          ukr: "Надаємо послуги з виробництва взуття на замовлення та контрактного виробництва з нашого каталогу під вашим брендом.",
          eng: "We provide custom shoe manufacturing and contract production services from our catalog under your brand.",
        },
      },
      {
        icon: serviceIcon1,
        title: { ukr: "Створимо дизайн", eng: "We create designs" },
        description: {
          ukr: "Відділ Розробки перетворить ваші ідеї в унікальні моделі взуття, що відображають особливість вашого бренду.",
          eng: "Our Development Department turns your ideas into unique shoe models that capture your brand's uniqueness.",
        },
      },
      {
        icon: serviceIcon3,
        title: { ukr: "Підберемо матеріали", eng: "We select materials" },
        description: {
          ukr: "Володіємо технологіями роботи з будь-яким видом шкіри — натуральною, екошкірою чи штучною. Підберемо необхідні матеріали, фурнітуру та всі комплектуючі.",
          eng: "We have expertise in working with all types of leather—natural, eco-leather, and synthetic. We select the right materials, fittings, and components.",
        },
      },
      {
        icon: serviceIcon4,
        title: {
          ukr: "Забезпечимо повний супровід",
          eng: "We provide comprehensive support",
        },
        description: {
          ukr: "Надаємо гарантію на нашу продукцію та завжди готові проконсультувати.",
          eng: "We offer a warranty on our products and are always available for consultation.",
        },
      },
    ],
  },

  products: {
    title: { ukr: "Продукція", eng: "Products" },
    caption: { ukr: "Більше інформації", eng: "More information" },
    email: "anridecollo@gmail.com",
    action: {
      ukr: "Завантажити каталог",
      eng: "Download catalog",
      href: "/pdf/shoes-presentation.pdf",
      previewUrl:
        "https://firebasestorage.googleapis.com/v0/b/anridecolloweb.appspot.com/o/shoes-presentation-compressed.pdf?alt=media&token=33d26300-f10f-4b03-aba6-44a1fb37f7f4",
    },
    slides: [
      {
        img: products1,
        caption: { ukr: "Туфлі", eng: "Shoes" },
      },
      {
        img: products2,
        caption: { ukr: "Кросівки", eng: "Sneakers" },
      },
      {
        img: products3,
        caption: { ukr: "Чоботи", eng: "Boots" },
      },
      {
        img: products4,
        caption: { ukr: "Лофери", eng: "Loafers" },
      },
      {
        img: products5,
        caption: { ukr: "Босоніжки", eng: "Sandals" },
      },
    ],
  },

  contact: {
    title: { ukr: "Отримайте консультацію", eng: "Get a Consultation" },
    description: {
      ukr: "Заповніть форму, і ми звʼяжемось з вами",
      eng: "Fill out the form, and we will contact you",
    },
    caption: { ukr: "Наш email", eng: "Our email" },
    email: "andridecollo@gmail.com",
    img: leather,
    form: {
      name: { ukr: "Ім'я", eng: "First Name" },
      surname: { ukr: "Прізвище", eng: "Last Name" },
      email: "Email",
      message: { ukr: "Повідомлення", eng: "Message" },
      action: { ukr: "Надіслати", eng: "Send" },
    },
  },

  reviews: {
    title: { ukr: "Відгуки наших клієнтів", eng: "Customer Reviews" },
    slides: [
      {
        name: { ukr: "Олександра М.", eng: "Alexandra M." },
        role: { ukr: "Покупець", eng: "Customer" },
        review: {
          ukr: "Співпраця з Anri De Collo – це справжнє задоволення! Команда забезпечила відмінну якість кожної деталі та оперативно реагувала на всі запити. Наш продукт отримав безліч позитивних відгуків від покупців, і це все завдяки увазі до якості та підтримці з боку Anri De Collo.",
          eng: "Collaborating with Anri De Collo has been a true pleasure! The team ensured excellent quality in every detail and responded promptly to all requests. Our product received numerous positive reviews from customers, thanks to the attention to quality and support from Anri De Collo.",
        },
        img: review1,
      },
      {
        name: { ukr: "Дмитро В.", eng: "Dmitry V." },
        role: { ukr: "Покупець", eng: "Customer" },
        review: {
          ukr: "Приємно мати справу з виробництвом, яке дійсно турбується про свій продукт і клієнтів. Наш персональний менеджер підтримував нас на кожному етапі, що зробило процес виготовлення максимально прозорим і зручним.",
          eng: "It's great to work with a manufacturer that truly cares about their product and customers. Our personal manager supported us at every stage, making the production process as transparent and convenient as possible.",
        },
        img: review2,
      },
      {
        name: { ukr: "Ірина С.", eng: "Iryna S." },
        role: { ukr: "Покупець", eng: "Customer" },
        review: {
          ukr: "Вироби Anri De Collo – це справжня якість та стиль. Усі наші замовлення були виконані на найвищому рівні, і ми точно знаємо, що знайти партнера з таким підходом до роботи – велика рідкість.",
          eng: "Anri De Collo's products are true quality and style. All our orders were executed at the highest level, and we know that finding a partner with such an approach is rare.",
        },
        img: review3,
      },
      {
        name: { ukr: "Максим Л.", eng: "Maxim L." },
        role: { ukr: "Покупець", eng: "Customer" },
        review: {
          ukr: "Команда Anri De Collo дійсно знається на своїй справі! Завжди можна покластися на них в питаннях якості, та й можливість швидкої заміни продукції у разі потреби – величезний плюс.",
          eng: "The Anri De Collo team really knows their business! You can always rely on them for quality, and the option for a quick product replacement if needed is a huge plus.",
        },
        img: review4,
      },
    ],
  },

  workflow: {
    title: { ukr: "Процес виробництва", eng: "Manufacturing Process" },
    preview: workflow,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },

  faq: {
    title: { ukr: "FAQ", eng: "FAQ" },
    action: { ukr: "Сконтактуйся", eng: "Contact Us", href: "#contact" },
    items: [
      {
        title: {
          ukr: "Яка вартість продукції?",
          eng: "What is the price of the products?",
        },
        description: {
          ukr: "Вартість залежить від обраного стилю, матеріалів і обсягу замовлення. Чим більший обсяг вашого замовлення, тим нижчою буде ціна. Зв’яжіться з нами для отримання найкращої пропозиції.",
          eng: "The price depends on the chosen style, materials, and order volume. The larger your order, the lower the price. Contact us for the best offer.",
        },
      },
      {
        title: {
          ukr: "Який мінімальний обсяг замовлення для оптової покупки та під власним брендом?",
          eng: "What is the minimum order volume for wholesale and under your brand?",
        },
        description: {
          ukr: "Мінімальне замовлення складає 10 пар одного кольору.",
          eng: "The minimum order is 10 pairs of the same color.",
        },
      },
      {
        title: {
          ukr: "Я не розбираюся в типах шкіри, фурнітурі, лекалах, колодках. Чи зможете ви допомогти мені з цим?",
          eng: "I don't understand the types of leather, fittings, patterns, or lasts. Can you help me with this?",
        },
        description: {
          ukr: "Так, звичайно. Ми завжди на зв'язку, щоб проконсультувати вас щодо вибору відповідно до вашого бюджету та запиту.",
          eng: "Yes, of course. We are always available to advise you on your choices according to your budget and needs.",
        },
      },
      {
        title: {
          ukr: "Чи потрібна передоплата при розміщенні замовлення?",
          eng: "Is prepayment required when placing an order?",
        },
        description: {
          ukr: "Так, ми працюємо виключно по передоплаті. Розмір передоплати залежить від типу вашого замовлення.",
          eng: "Yes, we work exclusively with prepayment. The prepayment amount depends on the type of your order.",
        },
      },
      {
        title: {
          ukr: "Чи обов'язково оплачувати зразок?",
          eng: "Is it necessary to pay for a sample?",
        },
        description: {
          ukr: "У більшості випадків так, але вартість зразка може бути повернена після розміщення великого замовлення. У разі особливих обставин ви можете зв’язатися з нами для обговорення умов оплати зразка.",
          eng: "In most cases, yes, but the sample cost may be refunded after placing a large order. In special circumstances, you can contact us to discuss sample payment terms.",
        },
      },
      {
        title: {
          ukr: "Який час виготовлення замовлення?",
          eng: "What is the production time for an order?",
        },
        description: {
          ukr: "Зазвичай термін виготовлення становить від 21 до 35 днів. Потужність нашої фабрики — 10 000 пар на місяць, але для великих замовлень або особливих вимог уточнюйте терміни у нас.",
          eng: "The production time usually ranges from 21 to 35 days. Our factory's capacity is 10,000 pairs per month, but for large orders or specific requirements, please check the timing with us.",
        },
      },
      {
        title: {
          ukr: "Яка упаковка пропонується?",
          eng: "What packaging is offered?",
        },
        description: {
          ukr: "Ми можемо виготовити упаковку за вашими вимогами, включаючи брендування, логотип, колір і розмір. Ви маєте можливість налаштувати упаковку під свій бренд.",
          eng: "We can produce packaging according to your requirements, including branding, logos, colors, and sizes. You can customize the packaging for your brand.",
        },
      },
      {
        title: {
          ukr: "Чи є у вас програма лояльності?",
          eng: "Do you have a loyalty program?",
        },
        description: {
          ukr: "Так, у нас діє програма лояльності. Знижки розраховуються індивідуально і залежать від обсягу замовлення.",
          eng: "Yes, we have a loyalty program. Discounts are calculated individually and depend on the order volume.",
        },
      },
      {
        title: {
          ukr: "Як можна розмістити замовлення?",
          eng: "How can I place an order?",
        },
        description: {
          ukr: "Ви можете зробити замовлення через електронну пошту або за допомогою форми на нашому сайті.",
          eng: "You can place an order via email or through the form on our website.",
        },
      },
      {
        title: {
          ukr: "Як я можу бути впевнений у якості вашого виробництва заздалегідь, щоб прийняти рішення про співпрацю?",
          eng: "How can I be sure of the quality of your production beforehand to make a decision about cooperation?",
        },
        description: {
          ukr: "Ми готові надіслати вам зразок нашого взуття з категорії, яка вас цікавить, щоб ви оцінили якість роботи та матеріалів",
          eng: "We are ready to send you a sample of our footwear from the category you are interested in so you can evaluate the quality of the work and materials.",
        },
      },
    ],
  },

  footer: {
    form: {
      cta: { ukr: "Залишайтеся в контакті з нами!", eng: "Keep in touch!" },
      input: { eng: "Email" },
      action: { ukr: "Надіслати", eng: "Send" },
    },
    info: [
      [
        { ukr: "Про нас", eng: "About Us" },
        { ukr: "Переваги", eng: "Advantages", href: "#benefits" },
        { ukr: "Послуги", eng: "Services", href: "#services" },
        { ukr: "Відгуки", eng: "Reviews", href: "#reviews" },
        { eng: "FAQ", ukr: "FAQ", href: "#faq" },
      ],
      [
        { ukr: "Наше порфтоліо", eng: "Our Portfolio" },
        { ukr: "Продукція", eng: "Products", href: "#products" },
        { ukr: "Каталог", eng: "Catalog", href: "#products" },
      ],
      [
        { ukr: "Соцмережі", eng: "Social Media" },
        { eng: "Linkedin", ukr: "Linkedin", href: "https://www.linkedin.com/" },
        {
          eng: "Instagram",
          ukr: "Instagram",
          href: "https://www.instagram.com/",
        },
        { eng: "Facebook", ukr: "Facebook", href: "https://www.facebook.com/" },
      ],
    ],
  },

  whyUs: {
    title: {
      ukr: "Чому обирають нас?",
      eng: "Why Choose Us?",
    },
    pros: {
      title: {
        ukr: "Ексклюзивне виробництво\nAnri De Collo",
        eng: "Exclusive Production\nby Anri De Collo",
      },
      list: [
        {
          ukr: "Ми спеціалізуємось на виробництві невеликих партій — від 10 пар однієї моделі.",
          eng: "We specialize in small batch production — from 10 pairs of a single model.",
        },
        {
          ukr: "Використовуємо частіше за все натуральну шкіру та інші високоякісні матеріали.",
          eng: "We mostly use genuine leather and other high-quality materials.",
        },
        {
          ukr: "Підтримуємо клієнтів у створенні унікального дизайну.",
          eng: "We support clients in creating unique designs.",
        },
        {
          ukr: "Виготовляємо офіційно в Європі.",
          eng: "Officially manufactured in Europe.",
        },
        {
          ukr: "Забезпечуємо гарантію якості та швидку доставку.",
          eng: "We ensure quality assurance and fast delivery.",
        },
      ],
    },
    cons: {
      title: {
        ukr: "Масові виробництва з Турції, Китаю, Індонезії",
        eng: "Mass Production from Turkey, China, Indonesia",
      },
      list: [
        {
          ukr: "Орієнтовані на великі обсяги виробництва, починаючи від 35 000 одиниць на місяць.",
          eng: "Focused on large-scale production, starting from 35,000 units per month.",
        },
        {
          ukr: "Економія на матеріалах: використання бюджетної шкіри та фурнітури.",
          eng: "Cost-cutting on materials: use of budget leather and fittings.",
        },
        {
          ukr: "Співпраця через посередників, що позначається на кінцевій вартості.",
          eng: "Collaboration through intermediaries, affecting the final cost.",
        },
        {
          ukr: "Тривала та вартісна доставка.",
          eng: "Long and expensive delivery.",
        },
        {
          ukr: "Часто недостатній рівень англійської, що ускладнює комунікацію і призводить до помилок у замовленні.",
          eng: "Often insufficient English proficiency, complicating communication and leading to order mistakes.",
        },
      ],
    },
  },

  common: {
    formFeedbackSuccess: {
      ukr: "Дякуємо за звернення 😊",
      en: "Thank you for reaching out 😊",
    },
    formFeedbackFailure: {
      ukr: "Сталася помилка. Форма не була відправлена",
      en: "An error occurred. The form was not submitted",
    },
    formFeedbackAction: {
      ukr: "Спробувати знову",
      en: "Try again",
    },
  },
};
