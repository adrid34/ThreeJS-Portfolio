import {
  jsdev,
  tsdev,
  reactdev,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  office,
  ledgent,
  amazon,
  avco,
  mobile,
  carrent,
  jobit,
  tripguide,
  threejs,
  socialmedia,
  forkify,
  cardgame,
} from "../assets";

export const navLinks = [
  {
    id: `about`,
    title: `About`,
  },
  {
    id: `work`,
    title: `Work`,
  },
  {
    id: `contact`,
    title: `Contact`,
  },
];

const services = [
  {
    title: `JavaScript Developer`,
    icon: jsdev,
  },
  {
    title: `React Developer`,
    icon: reactdev,
  },
  {
    title: `TypeScript Developer`,
    icon: tsdev,
  },

  {
    title: `Web Developer`,
    icon: web,
  },
];

const technologies = [
  {
    name: `HTML 5`,
    icon: html,
  },
  {
    name: `CSS 3`,
    icon: css,
  },
  {
    name: `JavaScript`,
    icon: javascript,
  },
  {
    name: `TypeScript`,
    icon: typescript,
  },
  {
    name: `React JS`,
    icon: reactjs,
  },
  {
    name: `Redux Toolkit`,
    icon: redux,
  },
  {
    name: `Tailwind CSS`,
    icon: tailwind,
  },
  {
    name: `Node JS`,
    icon: nodejs,
  },
  {
    name: `MongoDB`,
    icon: mongodb,
  },
  {
    name: `Three JS`,
    icon: threejs,
  },
  {
    name: `Git`,
    icon: git,
  },
  {
    name: `Figma`,
    icon: figma,
  },
  // {
  //   name: `docker`,
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: `Senior Software Engineer`,
    company_name: `Ledgent Technology`,
    icon: ledgent,
    iconBg: `#FDC12D`,
    date: `Feb 2022 - Sep 2023`,
    points: [
      `Developed responsive Next.js UI with Material UI and TailwindCSS, achieving 30% faster page loads through lazy loading, code splitting, and CSS minification.`,
      `Built inventory management API using Node.js/Express.js and optimized queries with GraphQL.`,
      `Implemented real-time tracking with Socket.io for live updates on inventory status.`,
      `Contributed to quality assurance using Selenium and Jest, creating comprehensive test plans for functional, regression, and performance testing.`,
      `Led Azure DevOps transformation with Azure Pipelines and ACI deployment.`,
    ],
  },
  {
    title: `Senior Software Engineer`,
    company_name: `Ledgent Technology`,
    icon: ledgent,
    iconBg: `#FDC12D`,
    date: `Mar 2020 - Jan 2022`,
    points: [
      `Integrated Vue.js and Vuetify for an enhanced financial web app dashboard.`,
      `Developed secure Python Django backend for an online payment gateway.`,
      `Managed MongoDB databases for efficient storage and retrieval of financial data.`,
      `Implemented Jest and Pytest test suites for Vue.js, Vuetify, and Django components.`,
      `Optimized CI/CD workflows with AWS CodePipelines and ECS for dynamic container management.`,
    ],
  },
  {
    title: `Senior Software Engineer`,
    company_name: `Amazon`,
    icon: amazon,
    iconBg: `white`,
    date: `Aug 2017 - Feb 2020`,
    points: [
      `Created e-commerce web app UI using React.js with Ant Design and Bootstrap.`,
      `Enhanced Node.js backend with Stripe for payments, JWT for secure authentication, and RBAC for effective authorization.`,
      `Implemented secure PostgreSQL database for customer data storage.`,
      `Conducted end-to-end testing using Postman, Jest, and Enzyme for bug-free functionalities.`,
      `Streamlined DevOps through AWS CodePipeline, ECR, and ECS for scalability and efficiency.`,
    ],
  },
  {
    title: `Full Stack Engineer`,
    company_name: `Avco Consulting`,
    icon: avco,
    iconBg: `#1D1D1D`,
    date: `Aug 2017 - Feb 2020`,
    points: [
      `Developed healthcare web app using HTML, jQuery, Bootstrap, PHP Laravel, and MySQL.`,
      `Led a team in creating features like appointment scheduling and telemedicine.`,
      `Ensured HIPAA compliance through robust security measures.`,
      `Facilitated communication across teams and contributed to a positive team culture.`,
    ],
  },
  {
    title: `Full Stack Developer`,
    company_name: `Mobile Programming LLC`,
    icon: mobile,
    iconBg: `white`,
    date: `Aug 2017 - Feb 2020`,
    points: [
      `Crafted hotel booking web app UI with HTML5, jQuery, CSS3, and integrated AJAX for smooth request handling.`,
      `Engineered PHP Laravel backend with real-time communication using Ratchet.`,
      `Used PostgreSQL with table partitioning and Redis caching for efficient data management.`,
      `Conducted PHPUnit and Apache JMeter testing for performance and functionality.`,
    ],
  },
];

const projects = [
  {
    name: `Social Media`,
    description: `Web-based demo platform where users can connect with friends, family, and like-minded individuals from around the world via variety of features, including customizable profiles, private messaging, photo and video sharing, groups and forums, and more. `,
    tags: [
      {
        name: `react`,
        color: `blue-text-gradient`,
      },
      {
        name: `css`,
        color: `pink-text-gradient`,
      },
    ],
    image: socialmedia,
    source_code_link: `https://github.com/adrid34/react-media-sample`,
  },
  {
    name: `Forkify `,
    description: `Web recipe application is an easy-to-use platform features a vast collection of delicious and nutritious recipes that are perfect for any occasion. With step-by-step instructions and helpful tips it will guide you through every recipe with ease. `,
    tags: [
      {
        name: `javascript`,
        color: `yellow-text`,
      },
      {
        name: `parcel`,
        color: `pink-text-gradient`,
      },
    ],
    image: forkify,
    source_code_link: `https://github.com/adrid34/js-forkify`,
  },
  {
    name: `Card Memory`,
    description: `Enjoy a captivating card game, reminiscent of Mahjong, that tests your memory and concentration. Match pairs of cards to clear the board, offering endless entertainment with various difficulty levels, exciting themes, and challenges for all ages.`,
    tags: [
      {
        name: `react`,
        color: `blue-text-gradient`,
      },

      {
        name: `pexelsapi`,
        color: `green-text-gradient`,
      },
    ],
    image: cardgame,
    source_code_link: `https://github.com/adrid34/react-card-memory-game`,
  },
];

export { services, technologies, experiences, projects };
