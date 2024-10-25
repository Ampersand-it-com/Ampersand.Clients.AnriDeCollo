import girls1 from "../assets/img/girls-1-min-resized.webp";
import girls2 from "../assets/img/girls-2-min.jpg";
import girls3 from "../assets/img/girls-3-min-resized.webp";
import girls4 from "../assets/img/girls-4-min-resized.webp";
import girls5 from "../assets/img/girls-5-min-resized.webp";
import products1 from "../assets/img/products-1-min.jpg";
import products2 from "../assets/img/products-2-min.jpg";
import products3 from "../assets/img/products-3-min.jpg";
import products4 from "../assets/img/products-4-min.jpg";
import products5 from "../assets/img/products-5-min.jpg";
import products6 from "../assets/img/products-6-min.jpg";
import workflow from "../assets/img/workflow-min.jpg";
import leather from "../assets/img/leather-min.jpg";
import serviceIcon1 from "../assets/icons/search.svg";
import serviceIcon2 from "../assets/icons/leather.svg";
import serviceIcon3 from "../assets/icons/leather-cutter.svg";
import serviceIcon4 from "../assets/icons/sewing.svg";
import review1 from "../assets/img/review-1.webp";

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
    title: { ukr: "Ваш стиль наш витвір", eng: "Your style our creation" },
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
    slider1: [girls1, girls3, girls4, girls5],
    slider2: [products1, products2, products3, products6],
  },

  features: [
    {
      title: { ukr: "Виробництво “під ключ”", eng: "Turnkey Production" },
      description: {
        ukr: "Ми надаємо можливість створити взуття під вашим брендом, використовуючи наші готові моделі. Ви можете обрати дизайн, а також внести зміни в матеріали, кольори, підошви та фурнітуру. Це спрощений спосіб започаткувати власний бренд взуття.",
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
        ukr: "З кожним роком ми розширюємо можливості нашого виробництва, збільшуємо команду та вдосконалюємо процеси, що дозволяє нам зростати та впевнено рухатися вперед. Незмінними залишаються наша увага до деталей і прагнення до високої якості.",
        eng: "With each passing year, we expand our production capabilities, grow our team, and improve our processes, which allows us to develop and move confidently forward. Our attention to detail and commitment to high quality remain unchanged.",
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
          ukr: "Ми використовуємо високоякісні штучні та екологічно чисті матеріали, а також здійснюємо ретельний контроль на кожному етапі виробництва, щоб гарантувати створення взуття преміальної якості",
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
        icon: serviceIcon1,
        title: { ukr: "Створимо дизайн", eng: "We create designs" },
        description: {
          ukr: "Відділ Розробки перетворить ваші ідеї в унікальні моделі взуття, що відображають особливість вашого бренду.",
          eng: "Our Development Department will transform your ideas into unique shoe models that reflect your brand's identity.",
        },
      },
      {
        icon: serviceIcon2,
        title: { ukr: "Підберемо матеріали", eng: "We select materials" },
        description: {
          ukr: "Володіємо технологіями роботи з будь-яким видом шкіри (натуральна, екошкіра, шкірзамінник).",
          eng: "We have the expertise to work with any type of leather (natural, eco-leather, synthetic).",
        },
      },
      {
        icon: serviceIcon3,
        title: {
          ukr: "Працюємо комплексно",
          eng: "We provide comprehensive services",
        },
        description: {
          ukr: "Підберемо необхідні матеріали, фурнітуру та надійних постачальників.",
          eng: "We select the necessary materials, fittings, and reliable suppliers.",
        },
      },
      {
        icon: serviceIcon4,
        title: {
          ukr: "Забезпечимо повний супровід",
          eng: "We provide full support",
        },
        description: {
          ukr: "Надаємо гарантію на нашу продукцію та завжди готові проконсультувати.",
          eng: "We provide a guarantee on our products and are always ready to offer consultations.",
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
        caption: { ukr: "Кросівки", eng: "Sneakers" },
      },
      {
        img: products2,
        caption: { ukr: "Чоботи зі шнурівкою", eng: "Lace-up boots" },
      },
      {
        img: products3,
        caption: { ukr: "Ботфорти", eng: "Over-the-knee boots" },
      },
      {
        img: products4,
        caption: { ukr: "Лофери", eng: "Loafers" },
      },
      {
        img: products5,
        caption: { ukr: "Сандалі", eng: "Sandals" },
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
        name: { ukr: "Анна Мельник", eng: "Anna Melnyk" },
        role: { ukr: "Покупець", eng: "Customer" },
        review: {
          ukr: "Дуже задоволена покупкою! Якість взуття перевершила очікування, натуральна шкіра та зручна посадка. Замовлення доставили швидко, сервіс на високому рівні.",
          eng: "Very satisfied with the purchase! The quality of the shoes exceeded expectations, with genuine leather and a comfortable fit. The order was delivered quickly, and the service was top-notch.",
        },
        img: review1,
      },
      {
        name: { ukr: "Анна Мельник", eng: "Anna Melnyk" },
        role: { ukr: "Покупець", eng: "Customer" },
        review: {
          ukr: "Дуже задоволена покупкою! Якість взуття перевершила очікування, натуральна шкіра та зручна посадка. Замовлення доставили швидко, сервіс на високому рівні.",
          eng: "Very satisfied with the purchase! The quality of the shoes exceeded expectations, with genuine leather and a comfortable fit. The order was delivered quickly, and the service was top-notch.",
        },
        img: review1,
      },
      {
        name: { ukr: "Анна Мельник", eng: "Anna Melnyk" },
        role: { ukr: "Покупець", eng: "Customer" },
        review: {
          ukr: "Дуже задоволена покупкою! Якість взуття перевершила очікування, натуральна шкіра та зручна посадка. Замовлення доставили швидко, сервіс на високому рівні.",
          eng: "Very satisfied with the purchase! The quality of the shoes exceeded expectations, with genuine leather and a comfortable fit. The order was delivered quickly, and the service was top-notch.",
        },
        img: review1,
      },
      {
        name: { ukr: "Анна Мельник", eng: "Anna Melnyk" },
        role: { ukr: "Покупець", eng: "Customer" },
        review: {
          ukr: "Дуже задоволена покупкою! Якість взуття перевершила очікування, натуральна шкіра та зручна посадка. Замовлення доставили швидко, сервіс на високому рівні.",
          eng: "Very satisfied with the purchase! The quality of the shoes exceeded expectations, with genuine leather and a comfortable fit. The order was delivered quickly, and the service was top-notch.",
        },
        img: review1,
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
