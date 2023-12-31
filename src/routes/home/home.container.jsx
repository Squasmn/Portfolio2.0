import HomeView from "./view/home.view.jsx";
import PropTypes from "prop-types";
import SkillsCardComponent from "../../components/Cards/skillsCard-component.jsx";
import ContactComponent from "../../components/Contact/contact-component.jsx";
import PastComponent from "../../components/Past/past-component.jsx";
import HomeComponent from "../../components/Home/home-component.jsx";
import ProjectsComponent from "../../components/Projects/projects-component.jsx";
import { ReactComponent as AngularIcon } from "../../assets/svg/icons/skills/angular-dark.svg";
import { ReactComponent as ExpressIcon } from "../../assets/svg/icons/skills/expressjs-dark.svg";
import { ReactComponent as FigmaIcon } from "../../assets/svg/icons/skills/figma-dark.svg";
import { ReactComponent as SassIcon } from "../../assets/svg/icons/skills/file-type-scss.svg";
import { ReactComponent as GithubCopilotIcon } from "../../assets/svg/icons/skills/github-copilot.svg";
import { ReactComponent as GithubIcon } from "../../assets/svg/icons/skills/github.svg";
import { ReactComponent as HTMLIcon } from "../../assets/svg/icons/skills/html-5.svg";
import { ReactComponent as JavascriptIcon } from "../../assets/svg/icons/skills/javascript.svg";
import { ReactComponent as MongoDBIcon } from "../../assets/svg/icons/skills/mongodb.svg";
import { ReactComponent as MongooseIcon } from "../../assets/svg/icons/skills/mongoose.svg";
import { ReactComponent as MySQLIcon } from "../../assets/svg/icons/skills/mysql.svg";
import { ReactComponent as NextJSIcon } from "../../assets/svg/icons/skills/nextjs.svg";
import { ReactComponent as NodeJSIcon } from "../../assets/svg/icons/skills/node.svg";
import { ReactComponent as NPMIcon } from "../../assets/svg/icons/skills/npm-outline.svg";
import { ReactComponent as ReactIcon } from "../../assets/svg/icons/skills/react.svg";
import { ReactComponent as SQLIcon } from "../../assets/svg/icons/skills/sql.svg";
import { ReactComponent as TypescriptIcon } from "../../assets/svg/icons/skills/typescript.svg";
import { ReactComponent as BootstrapIcon } from "../../assets/svg/icons/skills/brand-bootstrap.svg";
import { ReactComponent as CSSIcon } from "../../assets/svg/icons/skills/css-fill.svg";
import { ReactComponent as TailwindIcon } from "../../assets/svg/icons/skills/tailwind.svg";

const skillsCards = [
  {
    frontTitle: "Intermediate",
    text: "I'm familiar with the following technologies and have tested them",
    backTitle: "Intermediate",
    svgs: [
      NextJSIcon,
      BootstrapIcon,
      TailwindIcon,
      TypescriptIcon,
      NodeJSIcon,
      NPMIcon,
      FigmaIcon,
    ],
  },

  {
    frontTitle: "Advanced",
    text: "I'm proficient with the following technologies and have used them in my projects",
    svgs: [
      ReactIcon,
      JavascriptIcon,
      HTMLIcon,
      CSSIcon,
      SassIcon,
      GithubIcon,
      GithubCopilotIcon,
    ],
    backTitle: "Advanced",
  },
  {
    frontTitle: "Future",
    text: "I'm currently learning the following technologies",
    svgs: [
      ExpressIcon,
      MongoDBIcon,
      MongooseIcon,
      MySQLIcon,
      SQLIcon,
      AngularIcon,
    ],
    backTitle: "Future",
  },
];

function HomeContainer({ selectedPage, setSelectedPage }) {
  let contentProps;

  if (selectedPage === "home") {
    contentProps = {
      title: "home",
      home: <HomeComponent />,
      textboxTitle: "Hello, World!",
      textboxTitle2: "My name is David and I'm a (Full Stack) Web Developer",
      textboxText:
        "Feel free to explore my skills, projects and past and ventures",
    };
  } else if (selectedPage === "webdev") {
    contentProps = {
      title: "skills",
      skillsCards: skillsCards.map((card, index) => (
        <SkillsCardComponent key={index} {...card} />
      )),
      textboxTitle: "Discover my development skillset and experience",
      textboxTitle2:
        "I'm, passionate about UI/UX, modern frontend designs and intuitive backend solutions",
      textboxText: "",
    };
  } else if (selectedPage === "projects") {
    contentProps = { title: "projects", projects: <ProjectsComponent /> };
  } else if (selectedPage === "contact") {
    contentProps = {
      title: "contact",
      contact: <ContactComponent />,
      textboxTitle: "Let's get in touch!",
      textboxTitle2: "I'm always open to new opportunities and collaborations",
    };
  } else if (selectedPage === "past") {
    contentProps = {
      title: "past",
      past: <PastComponent />,
    };
  } else {
    contentProps = { title: "an error occurred" };
  }

  return <HomeView {...contentProps} onNavClick={setSelectedPage} />;
}

HomeContainer.propTypes = {
  selectedPage: PropTypes.string.isRequired,
  setSelectedPage: PropTypes.func.isRequired,
};

export default HomeContainer;
