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
    gitlab_url: "https://gitlab.com/Thylida/portfolio",
    title: "",
    description: "My personal portfolio website showcasing my skills, projects, and experience as a front-end developer.",
  },
  {
    id: 2,
    name: "Todo List",
    cover: "/images/todo-project.png",
    gitlab_url: "",
    title: "",
    description: "This is todo list project that we can add, update, delete and mark as completed tasks.",
  },
  {
    id: 3,
    name: "Orkun Admin",
    cover: "/images/orkun-portal.png",
    gitlab_url: "",
    title: "",
    description: "",
  },
  {
    id: 4,
    name: "Orkun Miniapp",
    cover: "/images/miniapp.png",
    gitlab_url: "",
    title: "",
    description: "",
  },
  {
    id: 5,
    name: "Camis App",
    cover: "/images/camemis-app.png",
    gitlab_url: "",
    className: "bg-sky-100",
    project_url:
      "https://play.google.com/store/apps/details?id=com.camis.camemis_student_application&hl=en",
    description: "The CAMEMIS App is an Educational Management and Information System (EMIS) designed to improve the quality of teaching and learning, thus providing a better space for teachers, students and parents to collaborate. The app offers teachers quick access to the most frequent course facilitation tasks, including daily attendance taking, grading, in-class communication, sending announcements, and staying updated with daily tasks. In addition, teachers can easily review a detailed report on student progress, manage multiple class sections and create tests and exams for each subject.",
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
    description: "Easy, Efficient, Experienced POS Restaurant System. Manage easier, control cost more efficiently with experienced POS system on restaurant. You can access to the cloud anytime and anywhere in the world. eMenu works both online and offline.",
  },
];

export { MENUS, PROJECTS };
