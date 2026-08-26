const MENUS = [
  { label: "Home", id: "home" },
  // { label: "About", id: "aboutMe" },
  { label: "Resume", id: "resume" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contactMe" },
];

const PROJECTS = [
  {
    id: 1,
    name: "Portfolio",
    cover: "/images/portfolio.png",
    gitlab_url: "https://github.com/lidathy999/portfolio",
    title: "",
    description: "My personal portfolio website showcasing my skills, projects, and experience as a front-end developer.",
  },
  {
    id: 3,
    name: "Orkun Admin",
    cover: "/images/orkun-portal.png",
    gitlab_url: "",
    title: "",
    description: "Orkun Admin Site is a web-based management portal designed to manage the Orkun platform. It provides administrators with comprehensive tools for user management, dashboards, service and service item management, promo codes, discounts, and announcements that can be broadcast across both the web and mobile app. It also includes various additional features to support the overall management and operation of the Orkun system.",
  },
  {
    id: 4,
    name: "Orkun Miniapp",
    cover: "/images/miniapp.png",
    gitlab_url: "",
    project_url: "",
    title: "",
    description: "Orkun MiniApp is a responsive web application integrated into the ABA native mobile app, enabling users to discover home services, make bookings, and track their booking status. It can be accessed through the ABA app under Mini Apps → Housing → Orkun.",
  },
  {
    id: 5,
    name: "Camis App",
    cover: "/images/camemis-app.png",
    gitlab_url: "",
    className: "bg-sky-100",
    project_url:
      "https://play.google.com/store/apps/details?id=com.camis.camemis_student_application&hl=en",
    description: "The CAMEMIS App is an Educational App designed to improve the quality of teaching and learning, thus providing a better space for teachers, students and parents to collaborate.",
  },
  {
    id: 6,
    name: "Camis Library",
    cover: "/images/camemis-e-library.webp",
    gitlab_url: "",
    className: "bg-sky-100",
    description: "E-Library is an app that lets users read a wide range of books online or offline. It allows readers to save their current reading progress, add books to their personal “My Books” collection for offline access, and share their favorite titles with others.",
  },
  {
    id: 7,
    name: "UNT Wholesale",
    cover: "/images/unt-wholesale.png",
    gitlab_url: "",
    project_url: "https://www.untwholesale.com/",
    description: "This is an official website for UNT Wholesale, an export import products company. This website is built for showcasing their products to their clients.",
  },
  {
    id: 8,
    name: "EMenu",
    cover: "/images/e-menu.png",
    gitlab_url: "",
    project_url: "",
    description: "Easy, Efficient, Experienced POS Restaurant System. Manage easier, control cost more efficiently with experienced POS system on restaurant.",
  },
];

export { MENUS, PROJECTS };
