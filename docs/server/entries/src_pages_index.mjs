import { i as import_0 } from "../chunks/chunk-gX6L3uAy.js";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useIntl, IntlProvider } from "react-intl";
import { useRef, useState, useEffect, useCallback } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import parse from "html-react-parser";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "react-dom/server";
import "vike/server";
const base$k = "_base_13n2f_1";
const styles$o = {
  base: base$k
};
const base$j = "_base_14xnb_1";
const logo = "_logo_14xnb_20";
const startItems = "_startItems_14xnb_27";
const endItems = "_endItems_14xnb_28";
const show$1 = "_show_14xnb_47";
const language = "_language_14xnb_52";
const styles$n = {
  base: base$j,
  "appear-navbar": "_appear-navbar_14xnb_1",
  logo,
  startItems,
  endItems,
  show: show$1,
  language
};
const base$i = "_base_1ppem_1";
const info = "_info_1ppem_11";
const presentation = "_presentation_1ppem_27";
const buttons = "_buttons_1ppem_33";
const avatar = "_avatar_1ppem_41";
const overlay$1 = "_overlay_1ppem_60";
const contact = "_contact_1ppem_109";
const open$1 = "_open_1ppem_154";
const links = "_links_1ppem_168";
const link = "_link_1ppem_168";
const current = "_current_1ppem_201";
const styles$m = {
  base: base$i,
  info,
  presentation,
  buttons,
  avatar,
  overlay: overlay$1,
  contact,
  open: open$1,
  links,
  link,
  current
};
const base$h = "_base_1c3b8_1";
const secondary = "_secondary_1c3b8_48";
const icon$3 = "_icon_1c3b8_64";
const styles$l = {
  base: base$h,
  secondary,
  icon: icon$3
};
function useSvg(path) {
  const importedIconRef = useRef();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    import(
      /* @vite-ignore */
      path
    ).then((module) => importedIconRef.current = module.ReactComponent).finally(() => setLoading(false));
  }, [path]);
  return { loading, SvgIcon: importedIconRef.current };
}
const base$g = "_base_uma1z_1";
const contentColor = "_contentColor_uma1z_7";
const styles$k = {
  base: base$g,
  contentColor
};
function Icon({ className = "", contentColor: contentColor2, src, ...props }) {
  const { loading, SvgIcon } = useSvg(`/src/assets/${src}`);
  if (loading || !SvgIcon)
    return /* @__PURE__ */ jsx("div", { className: "rounded-full bg-slate-400 animate-pulse h-8 w-8" });
  return /* @__PURE__ */ jsx(
    SvgIcon,
    {
      className: `${styles$k.base} ${contentColor2 ? styles$k.contentColor : ""} ${className}`,
      ...props
    }
  );
}
const base$f = "_base_1wgkl_6";
const noDecoration = "_noDecoration_1wgkl_10";
const styles$j = {
  base: base$f,
  noDecoration
};
function Link({ className = "", href, children, noDecoration: noDecoration2 = false, ...props }) {
  const isHashLink = href == null ? void 0 : href.startsWith("#");
  const componentProps = {
    className: `${className} ${styles$j.base} ${noDecoration2 ? styles$j.noDecoration : ""}`,
    href,
    ...props
  };
  return isHashLink ? /* @__PURE__ */ jsx(
    "a",
    {
      ...componentProps,
      onClick: (ev) => {
        ev.preventDefault();
        const element = document.querySelector(href);
        if (!element)
          return;
        element.scrollIntoView({ behavior: "smooth" });
      },
      children
    }
  ) : /* @__PURE__ */ jsx("a", { ...componentProps, target: "_blank", rel: "noreferrer", children });
}
const classNameByType = {
  primary: "",
  secondary: styles$l.secondary,
  tertiary: styles$l.tertiary
};
function Button({
  className = "",
  type = "primary",
  href,
  onClick,
  icon: icon2,
  children,
  ...props
}) {
  const childrenElement = /* @__PURE__ */ jsxs(Fragment, { children: [
    children,
    icon2 && /* @__PURE__ */ jsx(Icon, { src: icon2, className: styles$l.icon })
  ] });
  return href ? /* @__PURE__ */ jsx(
    Link,
    {
      className: `${styles$l.base} ${className} ${classNameByType[type]}`,
      href,
      noDecoration: true,
      ...props,
      children: childrenElement
    }
  ) : /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: `${className} ${classNameByType[type]} ${styles$l.base}`,
      onClick,
      ...props,
      children: childrenElement
    }
  );
}
const base$e = "_base_rx5j9_1";
const styles$i = {
  base: base$e
};
const contacts = [
  {
    name: "LinkedIn",
    icon: "svg/linkedin-icon.svg",
    url: "https://www.linkedin.com/in/pabloc54"
  },
  {
    name: "GitHub",
    icon: "svg/github-icon.svg",
    props: {
      contentColor: true
    },
    url: "https://github.com/nanndo54"
  },
  {
    name: "Email",
    icon: "svg/email-icon.svg",
    url: "mailto:pablofernando50259107@gmail.com"
  }
];
const base$d = "_base_fuved_1";
const noBorder$2 = "_noBorder_fuved_17";
const icon$2 = "_icon_fuved_31";
const styles$h = {
  base: base$d,
  noBorder: noBorder$2,
  icon: icon$2
};
function IconButton({
  className = "",
  noBorder: noBorder2 = false,
  href,
  onClick,
  icon: icon2,
  children,
  ...props
}) {
  const childrenElement = icon2 ? /* @__PURE__ */ jsx(Icon, { src: icon2, className: styles$h.icon }) : children;
  return href ? /* @__PURE__ */ jsx(Link, { className: `${className} ${styles$h.base}`, href, ...props, noDecoration: true, children: childrenElement }) : /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: `${className} ${styles$h.base} ${noBorder2 ? styles$h.noBorder : ""}`,
      onClick,
      ...props,
      children: childrenElement
    }
  );
}
function ContactIcons({ className = "", tabIndex }) {
  return /* @__PURE__ */ jsx("nav", { className: `${styles$i.base} ${className}`, children: contacts.map(({ name, icon: icon2, url, props }) => /* @__PURE__ */ jsx(IconButton, { "aria-label": name, href: url, tabIndex, children: /* @__PURE__ */ jsx(Icon, { src: icon2, ...props }) }, name)) });
}
const base$c = "_base_ykiq3_1";
const noBorder$1 = "_noBorder_ykiq3_15";
const styles$g = {
  base: base$c,
  noBorder: noBorder$1
};
function Image({
  src,
  alt,
  className = "",
  height,
  width,
  noBorder: noBorder2 = false,
  noZoom = false
}) {
  const ref = useRef();
  const { openShowcase } = useAppStore();
  const imageSrc = `/src/assets/${src}`;
  const imageElement = /* @__PURE__ */ jsx(
    "img",
    {
      ref,
      src: imageSrc,
      alt,
      className: `${className} ${styles$g.base} ${noBorder2 ? styles$g.noBorder : ""} no-select`,
      draggable: false,
      height,
      width
    }
  );
  return noZoom ? imageElement : /* @__PURE__ */ jsx("button", { type: "button", onClick: () => openShowcase({ imageSrc, alt }), children: imageElement });
}
const layout = "_layout_hdrk3_1";
const base$b = "_base_hdrk3_5";
const background = "_background_hdrk3_22";
const styles$f = {
  layout,
  base: base$b,
  background,
  "appear-section": "_appear-section_hdrk3_1"
};
function useIntersectionObserver(ref, { once = true, ...options }) {
  const [isIntersected, setIntersected] = useState(true);
  const updateEntry = ([entry]) => {
    setIntersected(entry == null ? void 0 : entry.isIntersecting);
  };
  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver;
    const node = ref == null ? void 0 : ref.current;
    if (!hasIOSupport || !node || once && isIntersected)
      return;
    const observer = new IntersectionObserver(updateEntry, options);
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, options]);
  return isIntersected;
}
const Section = ({
  background: background2 = true,
  as: Component = "section",
  className = "",
  id,
  children
}) => {
  const { setSectionIntersected } = useAppStore();
  const sectionRef = useRef(null);
  const isIntersected = useIntersectionObserver(sectionRef, {
    once: false,
    threshold: 0.3
  });
  useEffect(() => {
    if (!setSectionIntersected || !id)
      return;
    setSectionIntersected(id, isIntersected);
  }, [isIntersected]);
  const mouseEvent = (e) => {
    if (!(sectionRef == null ? void 0 : sectionRef.current))
      return;
    const { x, y } = sectionRef.current.getBoundingClientRect();
    sectionRef.current.style.setProperty("--x", e.clientX - x);
    sectionRef.current.style.setProperty("--y", e.clientY - y);
  };
  const delayedMouseEvent = (e) => {
    setTimeout(() => {
      mouseEvent(e);
    }, 100);
  };
  useEffect(() => {
    if (!background2 || !(sectionRef == null ? void 0 : sectionRef.current))
      return;
    sectionRef.current.addEventListener("mousemove", mouseEvent);
    sectionRef.current.addEventListener("pointermove", mouseEvent);
    sectionRef.current.addEventListener("wheel", delayedMouseEvent, { passive: true });
    return () => {
      sectionRef.current.removeEventListener("mousemove", mouseEvent);
      sectionRef.current.removeEventListener("pointermove", mouseEvent);
      sectionRef.current.removeEventListener("wheel", delayedMouseEvent, {
        passive: true
      });
    };
  }, [sectionRef]);
  return /* @__PURE__ */ jsx("div", { className: styles$f.layout, id, children: /* @__PURE__ */ jsx(
    Component,
    {
      ref: sectionRef,
      className: `${className} ${styles$f.base} ${background2 ? styles$f.background : ""}`,
      children
    }
  ) });
};
const base$a = "_base_1jsnc_1";
const styles$e = {
  base: base$a
};
function Text({ children, localeId = null, as: Component, className = "", ...props }) {
  const intl = useIntl();
  const childrenElement = localeId ? parse(intl.formatMessage({ id: localeId })) : children;
  return Component ? /* @__PURE__ */ jsx(Component, { className: `${styles$e.base} ${className}`, ...props, children: childrenElement }) : childrenElement;
}
const ArrowIcon = "svg/arrow.svg";
const CloseIcon = "svg/close-icon.svg";
const CvIcon = "svg/cv-icon.svg";
const LogoIcon = "svg/logo.svg";
const MinusIcon = "svg/minus-icon.svg";
const PlusIcon = "svg/plus-icon.svg";
const ZoomIcon = "svg/zoom-icon.svg";
const getCurrentSection = () => {
  var _a;
  const { isOnTop: isOnTop2, sectionsIntersection } = getState();
  const firstSection = sections[0];
  return isOnTop2 ? firstSection.id : (_a = sectionsIntersection.find(({ intersected }) => intersected)) == null ? void 0 : _a.id;
};
function WelcomeSection({ id }) {
  const { isOnTop: isOnTop2 } = useAppStore();
  const intl = useIntl();
  const currentSection = getCurrentSection();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    setMenuOpen(!isOnTop2);
  }, [isOnTop2]);
  const handleMenuButton = () => {
    if (isOnTop2)
      return;
    if (Audio) {
      const squeakAudio = new Audio("/src/assets/sounds/squeak.mp3");
      squeakAudio.volume = 0.3;
      squeakAudio.play();
    }
    setMenuOpen(!menuOpen);
  };
  return /* @__PURE__ */ jsxs(
    Section,
    {
      as: "header",
      background: false,
      className: `${styles$m.base} ${isOnTop2 ? "" : styles$m.overlay}`,
      id,
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles$m.info, children: [
          /* @__PURE__ */ jsx(Text, { as: "h1", children: "Pablo Cabrera" }),
          /* @__PURE__ */ jsx(Text, { as: "p", localeId: "welcome.presentation", className: styles$m.presentation }),
          /* @__PURE__ */ jsx("div", { className: styles$m.buttons, children: /* @__PURE__ */ jsx(
            Button,
            {
              href: intl.formatMessage({ id: "link.cv" }),
              download: "Pablo Cabrera - CV.pdf",
              icon: CvIcon,
              tabIndex: isOnTop2 ? 0 : -1,
              children: /* @__PURE__ */ jsx(Text, { localeId: "welcome.cv" })
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$m.avatar, children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: (ev) => handleMenuButton(ev.target.value),
              tabIndex: isOnTop2 ? -1 : 0,
              children: [
                /* @__PURE__ */ jsx(Icon, { src: LogoIcon, width: 80 }),
                /* @__PURE__ */ jsx(Image, { src: "img/profile-photo.jpg", alt: "Mi fotografía", noZoom: true })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            ContactIcons,
            {
              className: `${styles$m.contact} ${menuOpen ? styles$m.open : ""}`,
              tabIndex: menuOpen ? 0 : -1
            }
          ),
          /* @__PURE__ */ jsx("div", { className: styles$m.links, children: sections.filter(({ hideInNavbar }) => !hideInNavbar).map(({ id: id2 }) => /* @__PURE__ */ jsx(
            Link,
            {
              href: `#${id2}`,
              className: `${styles$m.link} ${id2 === currentSection ? styles$m.current : ""}`,
              noDecoration: true,
              tabIndex: isOnTop2 ? -1 : 0,
              children: /* @__PURE__ */ jsx(Text, { localeId: `${id2}.title` })
            },
            id2
          )) })
        ] })
      ]
    }
  );
}
const content$5 = "_content_1116r_1";
const timeline$1 = "_timeline_1116r_7";
const allExperiences = "_allExperiences_1116r_54";
const experiences = "_experiences_1116r_63";
const styles$d = {
  content: content$5,
  timeline: timeline$1,
  allExperiences,
  experiences
};
const base$9 = "_base_4jybq_1";
const header$1 = "_header_4jybq_17";
const title$2 = "_title_4jybq_25";
const content$4 = "_content_4jybq_44";
const footer$1 = "_footer_4jybq_51";
const styles$c = {
  base: base$9,
  header: header$1,
  title: title$2,
  content: content$4,
  footer: footer$1
};
const base$8 = "_base_engof_1";
const singleImage = "_singleImage_engof_12";
const previousImage = "_previousImage_engof_17";
const nextImage = "_nextImage_engof_18";
const dots = "_dots_engof_19";
const container = "_container_engof_23";
const noBorder = "_noBorder_engof_34";
const content$3 = "_content_engof_40";
const selected = "_selected_engof_89";
const styles$b = {
  base: base$8,
  singleImage,
  previousImage,
  nextImage,
  dots,
  container,
  noBorder,
  content: content$3,
  selected
};
const useDebouncedCallback = (callback, wait) => {
  const timeout = useRef();
  return useCallback(
    (...args) => {
      const later = () => {
        clearTimeout(timeout.current);
        callback(...args);
      };
      clearTimeout(timeout.current);
      timeout.current = setTimeout(later, wait);
    },
    [callback, wait]
  );
};
function ImageCarrousel({ images, className = "", noBorder: noBorder2 = false, noZoom = false }) {
  const { openShowcase } = useAppStore();
  const contentRef = useRef();
  const [imageIndex, setImageIndex] = useState(0);
  const singleImage2 = images.length <= 1;
  const handleImageChange = (index) => {
    contentRef.current.scrollTo({
      left: contentRef.current.clientWidth * index,
      behavior: "smooth"
    });
    setImageIndex(index);
  };
  const handleScroll = useDebouncedCallback((event) => {
    const { scrollLeft, clientWidth } = event.target;
    const index = Math.round(scrollLeft / clientWidth);
    setImageIndex(index);
  }, 100);
  const contentElement = /* @__PURE__ */ jsx("div", { className: styles$b.content, ref: contentRef, onScroll: handleScroll, children: images.map(({ src, alt }, index) => /* @__PURE__ */ jsx(Image, { src, alt, noBorder: true, noZoom: true }, index)) });
  return /* @__PURE__ */ jsxs("div", { className: `${styles$b.base} ${singleImage2 ? styles$b.singleImage : ""}`, children: [
    /* @__PURE__ */ jsx(
      IconButton,
      {
        className: styles$b.previousImage,
        onClick: () => handleImageChange((imageIndex - 1 + images.length) % images.length),
        noBorder: true,
        "aria-label": "Ver imagen anterior",
        children: /* @__PURE__ */ jsx(Icon, { src: ArrowIcon, contentColor: true })
      }
    ),
    noZoom ? /* @__PURE__ */ jsx(
      "div",
      {
        className: `${className} ${styles$b.container} ${noBorder2 ? styles$b.noBorder : ""}`,
        children: contentElement
      }
    ) : /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: `${className} ${styles$b.container} ${noBorder2 ? styles$b.noBorder : ""}`,
        onClick: () => openShowcase({ src: images[imageIndex].src, alt: images[imageIndex].alt }),
        children: contentElement
      }
    ),
    /* @__PURE__ */ jsx(
      IconButton,
      {
        className: styles$b.nextImage,
        onClick: () => handleImageChange((imageIndex + 1 + images.length) % images.length),
        noBorder: true,
        "aria-label": "Ver imagen anterior",
        children: /* @__PURE__ */ jsx(Icon, { src: ArrowIcon, contentColor: true })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: styles$b.dots, children: images.map((_, index) => /* @__PURE__ */ jsx(
      "button",
      {
        "aria-label": `Ver imagen ${index + 1}`,
        className: imageIndex === index ? styles$b.selected : "",
        onClick: () => handleImageChange(index)
      },
      index
    )) })
  ] });
}
function JobExperience({ company, logo: logo2, images, web }) {
  return /* @__PURE__ */ jsxs("article", { className: styles$c.base, children: [
    /* @__PURE__ */ jsx("div", { className: styles$c.header, children: /* @__PURE__ */ jsxs("div", { className: styles$c.title, children: [
      /* @__PURE__ */ jsx(Icon, { src: logo2, alt: company }),
      /* @__PURE__ */ jsx(Text, { as: "h4", children: company })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: styles$c.content, children: [
      /* @__PURE__ */ jsx(Text, { localeId: `job-experience.${company.toLowerCase()}` }),
      /* @__PURE__ */ jsx(ImageCarrousel, { images })
    ] }),
    /* @__PURE__ */ jsx("div", { className: styles$c.footer, children: /* @__PURE__ */ jsx(Button, { href: web, children: /* @__PURE__ */ jsx(Text, { localeId: "projects.button2" }) }) })
  ] });
}
const jobs = [
  {
    company: "Kolo",
    position: "Full-Stack Web Developer",
    logo: "svg/kolo-icon.svg",
    images: [
      {
        src: "img/kolo-img.jpg",
        alt: "Kolo"
      }
    ],
    web: "https://info.kolo-app.com",
    year: 2022
  }
];
function JobExperiencesSection({ id }) {
  const years = jobs.reduce((acc, project) => {
    const year = project.year;
    if (!acc[year])
      acc[year] = [];
    acc[year].push(project);
    return acc;
  }, {});
  return /* @__PURE__ */ jsxs(Section, { id, children: [
    /* @__PURE__ */ jsx(Text, { as: "h2", localeId: "job-experience.title" }),
    /* @__PURE__ */ jsx(Text, { as: "p", localeId: "job-experience.text1" }),
    /* @__PURE__ */ jsxs("div", { className: styles$d.content, children: [
      /* @__PURE__ */ jsx("div", { className: styles$d.timeline, children: /* @__PURE__ */ jsx(Icon, { src: ArrowIcon }) }),
      /* @__PURE__ */ jsx("div", { className: styles$d.allExperiences, children: Object.entries(years).map(([year, experiences2]) => /* @__PURE__ */ jsxs("div", { className: styles$d.experiences, children: [
        /* @__PURE__ */ jsx(Text, { as: "h3", children: year }),
        experiences2.map((experience, i) => /* @__PURE__ */ jsx(JobExperience, { ...experience }, i))
      ] }, year)) })
    ] })
  ] });
}
const content$2 = "_content_8x7q6_1";
const timeline = "_timeline_8x7q6_7";
const allProjects = "_allProjects_8x7q6_54";
const projects$1 = "_projects_8x7q6_63";
const styles$a = {
  content: content$2,
  timeline,
  allProjects,
  projects: projects$1
};
const base$7 = "_base_nu923_1";
const header = "_header_nu923_17";
const title$1 = "_title_nu923_25";
const content$1 = "_content_nu923_35";
const footer = "_footer_nu923_42";
const skills$2 = "_skills_nu923_59";
const styles$9 = {
  base: base$7,
  header,
  title: title$1,
  content: content$1,
  footer,
  skills: skills$2
};
const base$6 = "_base_8brou_1";
const icon$1 = "_icon_8brou_9";
const small = "_small_8brou_30";
const styles$8 = {
  base: base$6,
  icon: icon$1,
  small
};
const classNameBySize = {
  small: styles$8.small
};
function Skill({ size = "medium", name, icon: icon2, props }) {
  const className = `${styles$8.base} ${classNameBySize[size] || ""}`;
  const { openShowcase } = useAppStore();
  const iconElement = /* @__PURE__ */ jsx(Icon, { src: icon2, alt: name, ...props });
  return /* @__PURE__ */ jsxs("div", { className, children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        className: styles$8.icon,
        title: name,
        onClick: () => openShowcase({ element: iconElement, alt: name }),
        children: iconElement
      }
    ),
    size !== "small" && /* @__PURE__ */ jsx("span", { children: name })
  ] });
}
const FrontEnd = [
  {
    name: "HTML",
    icon: "svg/html-icon.svg"
  },
  {
    name: "CSS",
    icon: "svg/css-icon.svg"
  },
  {
    name: "JavaScript",
    icon: "svg/javascript-icon.svg"
  },
  {
    name: "TypeScript",
    icon: "svg/typescript-icon.svg"
  },
  {
    name: "ReactJS",
    icon: "svg/reactjs-icon.svg"
  },
  {
    name: "Redux",
    icon: "svg/redux-icon.svg"
  }
];
const BackEnd = [
  {
    name: "ExpressJS",
    icon: "svg/express-icon.svg",
    props: {
      contentColor: true
    }
  },
  {
    name: "Go",
    icon: "svg/go-icon.svg"
  },
  {
    name: "Python",
    icon: "svg/python-icon.svg"
  },
  {
    name: "MongoDB",
    icon: "svg/mongodb-icon.svg"
  },
  {
    name: "MySQL",
    icon: "svg/mysql-icon.svg"
  },
  {
    name: "PL/SQL",
    icon: "svg/oraclesql-icon.svg"
  }
];
const Otras = [
  {
    name: "Java",
    icon: "svg/java-icon.svg"
  },
  {
    name: "AWS",
    icon: "svg/aws-icon.svg"
  },
  {
    name: "OCI",
    icon: "svg/oraclecloud-icon.svg"
  }
];
const skills$1 = {
  FrontEnd,
  BackEnd,
  Otras
};
const allSkills = Object.values(skills$1).reduce(
  (allSkills2, skills2) => [...allSkills2, ...skills2],
  []
);
const getSkill = (name) => allSkills.find((skill) => skill.name === name);
function Project({ name, web, code, technologies = [], icon: icon2, images = [] }) {
  const skills2 = technologies.map(getSkill);
  return /* @__PURE__ */ jsxs("article", { className: styles$9.base, children: [
    /* @__PURE__ */ jsx("div", { className: styles$9.header, children: /* @__PURE__ */ jsxs("div", { className: styles$9.title, children: [
      /* @__PURE__ */ jsx(Icon, { src: icon2, height: 34, alt: name }),
      /* @__PURE__ */ jsx(Text, { as: "h4", children: name })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: styles$9.content, children: [
      /* @__PURE__ */ jsx(Text, { as: "p", localeId: `project.${name.toLowerCase()}` }),
      /* @__PURE__ */ jsx("div", { className: styles$9.skills, children: skills2.map((skill) => /* @__PURE__ */ jsx(Skill, { ...skill, size: "small" }, skill.name)) }),
      /* @__PURE__ */ jsx(ImageCarrousel, { images })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$9.footer, children: [
      /* @__PURE__ */ jsx(Button, { href: code, type: "secondary", children: /* @__PURE__ */ jsx(Text, { localeId: "projects.button1" }) }),
      /* @__PURE__ */ jsx(Button, { href: web, children: /* @__PURE__ */ jsx(Text, { localeId: "projects.button2" }) })
    ] })
  ] });
}
const projects = [
  {
    name: "Mini Translator",
    year: 2021,
    web: "https://pabloc54.dev/mini-translator/",
    code: "https://github.com/nanndo54/mini-translator",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS"
    ],
    icon: "projects/icons/mini-translator-icon.svg",
    images: [
      {
        src: "projects/images/mini-translator-img1.jpg",
        alt: "Traduciendo del francés al español"
      },
      {
        src: "projects/images/mini-translator-img2.jpg",
        alt: "Traduciendo del español al inglés"
      }
    ]
  },
  {
    name: "Quiz Game",
    year: 2022,
    web: "https://pabloc54.dev/quiz-game/",
    code: "https://github.com/nanndo54/quiz-game",
    technologies: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    icon: "projects/icons/quiz-game-icon.svg",
    images: [
      {
        src: "projects/images/quiz-game-img1.jpg",
        alt: "Menu de configuración del juego"
      },
      {
        src: "projects/images/quiz-game-img2.jpg",
        alt: "Pregunta del juego: ¿Cuál de estos países colinda con Austria?"
      },
      {
        src: "projects/images/quiz-game-img3.jpg",
        alt: "Pregunta del juego: ¿Cuál de estas palabras se usa para describir un grupo de abejas?"
      },
      {
        src: "projects/images/quiz-game-img4.jpg",
        alt: "Menú de puntuación del juego donde se observan las respuestas correctas y el tiempo transcurrido"
      }
    ]
  },
  {
    name: "JOLC",
    year: 2022,
    web: "https://jolc2.herokuapp.com/",
    code: "https://github.com/nanndo54/jolc",
    technologies: [
      "ReactJS",
      "Redux",
      "Python",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    icon: "projects/icons/jolc-icon.svg",
    images: [
      {
        src: "projects/images/jolc-img1.jpg",
        alt: "JOLC 1"
      },
      {
        src: "projects/images/jolc-img2.jpg",
        alt: "JOLC 2"
      }
    ]
  }
];
function ProjectsSection({ id }) {
  const years = projects.reduce((acc, project) => {
    const year = project.year;
    if (!acc[year])
      acc[year] = [];
    acc[year].push(project);
    return acc;
  }, {});
  return /* @__PURE__ */ jsxs(Section, { id, children: [
    /* @__PURE__ */ jsx(Text, { as: "h2", localeId: "projects.title" }),
    /* @__PURE__ */ jsx(Text, { as: "p", localeId: "projects.text1" }),
    /* @__PURE__ */ jsxs("div", { className: styles$a.content, children: [
      /* @__PURE__ */ jsx("div", { className: styles$a.timeline, children: /* @__PURE__ */ jsx(Icon, { src: ArrowIcon }) }),
      /* @__PURE__ */ jsx("div", { className: styles$a.allProjects, children: Object.entries(years).map(([year, projects2]) => /* @__PURE__ */ jsxs("div", { className: styles$a.projects, children: [
        /* @__PURE__ */ jsx(Text, { as: "h3", children: year }),
        projects2.map((project, i) => /* @__PURE__ */ jsx(Project, { ...project }, i))
      ] }, year)) })
    ] })
  ] });
}
const subsection$1 = "_subsection_1t2vn_1";
const reversed = "_reversed_1t2vn_24";
const styles$7 = {
  subsection: subsection$1,
  reversed
};
function AboutMeSection({ id }) {
  return /* @__PURE__ */ jsxs(Section, { id, children: [
    /* @__PURE__ */ jsx(Text, { as: "h2", localeId: "about-me.title" }),
    /* @__PURE__ */ jsx(Text, { as: "p", localeId: "about-me.text1" }),
    /* @__PURE__ */ jsxs("div", { className: styles$7.subsection, children: [
      /* @__PURE__ */ jsx(Image, { src: "img/guatemala.jpg", alt: "Guatemala, Lago de Atitlán" }),
      /* @__PURE__ */ jsx(Text, { as: "p", localeId: "about-me.text2" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$7.subsection, children: [
      /* @__PURE__ */ jsx(Image, { src: "img/campus.jpg", alt: "USAC" }),
      /* @__PURE__ */ jsx(Text, { as: "p", localeId: "about-me.text3" })
    ] })
  ] });
}
const subsection = "_subsection_zoyfv_1";
const skills = "_skills_zoyfv_10";
const styles$6 = {
  subsection,
  skills
};
function SkillsSection({ id }) {
  return /* @__PURE__ */ jsxs(Section, { id, children: [
    /* @__PURE__ */ jsx(Text, { as: "h2", localeId: "skills.title" }),
    Object.entries(skills$1).map(([title2, specificSkills]) => /* @__PURE__ */ jsxs("div", { className: styles$6.subsection, children: [
      /* @__PURE__ */ jsx(Text, { as: "h3", children: title2 }),
      /* @__PURE__ */ jsx("div", { className: styles$6.skills, children: specificSkills.map((skill) => /* @__PURE__ */ jsx(Skill, { ...skill }, skill.name)) })
    ] }, title2))
  ] });
}
const base$5 = "_base_1uxtg_1";
const styles$5 = {
  base: base$5
};
function ContactSection({ id }) {
  return /* @__PURE__ */ jsxs(Section, { className: styles$5.base, id, background: false, children: [
    /* @__PURE__ */ jsx(Text, { as: "h1", localeId: "contact.title" }),
    /* @__PURE__ */ jsx(Text, { as: "h2", localeId: "contact.text1" })
  ] });
}
const sections = [
  {
    id: "welcome",
    icon: "home",
    Component: WelcomeSection,
    hideInNavbar: true
  },
  {
    id: "job-experience",
    icon: "work",
    Component: JobExperiencesSection
  },
  {
    id: "projects",
    icon: "code",
    Component: ProjectsSection
  },
  {
    id: "about-me",
    icon: "person",
    Component: AboutMeSection
  },
  {
    id: "skills",
    icon: "build",
    Component: SkillsSection
  },
  {
    id: "contact",
    icon: "email",
    Component: ContactSection
  }
];
const initialState = {
  isOnTop: true,
  sectionsIntersection: sections.slice(0, 2).map(({ id }) => ({ id, intersected: true })),
  locale: "en",
  theme: "light",
  showcase: {}
};
const store = create(
  persist(
    (set) => ({
      ...initialState,
      setOnTop: (isOnTop2) => set(() => ({ isOnTop: isOnTop2 })),
      setSectionIntersected: (id, intersected) => set((state) => {
        const sectionsIntersection = [...state.sectionsIntersection];
        const section = sectionsIntersection.find(
          (sectionIntersection) => sectionIntersection.id === id
        );
        if (section)
          section.intersected = intersected;
        else
          sectionsIntersection.push({ id, intersected });
        return {
          sectionsIntersection
        };
      }),
      toggleTheme: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
      toggleLocale: () => set((state) => ({ locale: state.locale === "es" ? "en" : "es" })),
      openShowcase: ({ open: open2 = true, ...showcase }) => set(() => ({ showcase: { open: open2, ...showcase } })),
      closeShowcase: () => set((state) => ({ showcase: { ...state.showcase, open: false } }))
    }),
    {
      name: "app-storage",
      partialize: ({ locale, theme }) => ({
        locale,
        theme
      })
    }
  )
);
const useAppStore = (callback = (state) => state) => {
  const newState = store(callback);
  const [state, setState] = useState(initialState);
  useEffect(() => {
    setState(newState);
  }, [newState]);
  return state;
};
const { getState } = store;
function Navbar() {
  const { locale, theme, toggleLocale, toggleTheme } = useAppStore();
  useEffect(() => {
    document.querySelector("body").toggleAttribute("dark", theme === "dark");
  }, [theme]);
  return /* @__PURE__ */ jsx("nav", { className: styles$n.base, children: /* @__PURE__ */ jsxs("div", { className: styles$n.startItems, children: [
    /* @__PURE__ */ jsx(
      DarkModeSwitch,
      {
        checked: theme === "dark",
        onChange: toggleTheme,
        moonColor: "var(--content-color)",
        sunColor: "var(--content-color)",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsx("button", { className: styles$n.language, onClick: toggleLocale, "aria-label": locale, children: locale })
  ] }) });
}
const base$4 = "_base_1pgw9_1";
const seeContentIcon = "_seeContentIcon_1pgw9_26";
const isOnTop = "_isOnTop_1pgw9_46";
const isLoading = "_isLoading_1pgw9_52";
const styles$4 = {
  base: base$4,
  seeContentIcon,
  isOnTop,
  isLoading
};
const base$3 = "_base_1vk8r_1";
const styles$3 = {
  base: base$3
};
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: styles$3.base, children: [
    "Source: ",
    /* @__PURE__ */ jsx(Link, { href: "https://github.com/nanndo54", children: "GitHub" })
  ] });
}
const base$2 = "_base_1kmql_1";
const quote = "_quote_1kmql_14";
const author = "_author_1kmql_23";
const styles$2 = {
  base: base$2,
  quote,
  author
};
function BlockQuote({ quote: quote2, author: author2 }) {
  return /* @__PURE__ */ jsxs(Section, { as: "blockquote", className: styles$2.base, children: [
    /* @__PURE__ */ jsxs("span", { children: [
      /* @__PURE__ */ jsx("span", { className: styles$2.quote, children: "“" }),
      /* @__PURE__ */ jsx(Text, { localeId: quote2 }),
      /* @__PURE__ */ jsx("span", { className: styles$2.quote, children: "”" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$2.author, children: [
      "— ",
      author2
    ] })
  ] });
}
function AllSections() {
  const { isOnTop: isOnTop2, setOnTop } = useAppStore();
  const [isLoading2, setLoading] = useState(true);
  const currentSection = getCurrentSection();
  useEffect(() => {
    setLoading(false);
  }, []);
  useEffect(() => {
    if (currentSection)
      history.replaceState(null, null, `#${currentSection}`);
  }, [currentSection]);
  const handlePageScroll = (ev) => {
    const newIsOnTop = ev.target.scrollTop < 40;
    if (setOnTop && newIsOnTop !== isOnTop2)
      setOnTop(newIsOnTop);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `${styles$4.base} ${isLoading2 ? styles$4.isLoading : ""} ${isOnTop2 ? styles$4.isOnTop : ""}`,
      id: "base",
      onScroll: handlePageScroll,
      children: [
        sections.map(({ id, Component }) => /* @__PURE__ */ jsx(Component, { id }, id)),
        /* @__PURE__ */ jsx(BlockQuote, { author: "Carl Sagan", quote: "quote.carl-sagan1" }),
        /* @__PURE__ */ jsx(Footer, {})
      ]
    }
  );
}
const base$1 = "_base_cklej_1";
const open = "_open_cklej_21";
const content = "_content_cklej_28";
const overlay = "_overlay_cklej_51";
const title = "_title_cklej_78";
const closeButton = "_closeButton_cklej_87";
const zoom = "_zoom_cklej_96";
const zoomButtons = "_zoomButtons_cklej_121";
const styles$1 = {
  base: base$1,
  open,
  content,
  overlay,
  title,
  closeButton,
  zoom,
  zoomButtons
};
const initialScale = 1;
function Showcase() {
  const [scale, setScale] = useState(initialScale);
  const { showcase, closeShowcase } = useAppStore();
  const { open: open2, src, element, alt } = showcase;
  useEffect(() => {
    if (open2)
      return;
    setScale(1);
  }, [open2]);
  return /* @__PURE__ */ jsx("div", { className: `${styles$1.base} ${open2 ? styles$1.open : ""}`, children: /* @__PURE__ */ jsx(
    TransformWrapper,
    {
      initialScale,
      maxScale: 3,
      minScale: 0.8,
      onTransformed: (_, { scale: scale2 }) => {
        setScale(scale2);
      },
      children: ({ zoomIn, zoomOut, resetTransform }) => /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: styles$1.overlay,
            onClick: () => {
              closeShowcase();
              resetTransform();
            },
            children: [
              alt && /* @__PURE__ */ jsx(Text, { as: "p", className: styles$1.title, children: alt }),
              /* @__PURE__ */ jsx(
                IconButton,
                {
                  icon: CloseIcon,
                  className: styles$1.closeButton,
                  "aria-label": "Cerrar",
                  noBorder: true
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: styles$1.zoom, children: [
                /* @__PURE__ */ jsx(Icon, { src: ZoomIcon }),
                /* @__PURE__ */ jsxs(Text, { as: "p", children: [
                  (scale * 100).toFixed(0),
                  "%"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: styles$1.zoomButtons, children: [
                  /* @__PURE__ */ jsx(
                    IconButton,
                    {
                      icon: MinusIcon,
                      onClick: (ev) => {
                        ev.stopPropagation();
                        zoomOut();
                      },
                      "aria-label": "Reducir"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    IconButton,
                    {
                      icon: PlusIcon,
                      onClick: (ev) => {
                        ev.stopPropagation();
                        zoomIn();
                      },
                      "aria-label": "Agrandar"
                    }
                  )
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          TransformComponent,
          {
            wrapperClass: styles$1.content,
            style: { transform: `scale(${open2 ? scale : 0.5})` },
            onClick: (ev) => ev.stopPropagation(),
            children: src ? /* @__PURE__ */ jsx(Image, { src, alt, noBorder: true, noZoom: true }) : element
          }
        )
      ] })
    }
  ) });
}
const base = "_base_iyl5a_1";
const show = "_show_iyl5a_15";
const icon = "_icon_iyl5a_32";
const dot1 = "_dot1_iyl5a_53";
const dot2 = "_dot2_iyl5a_59";
const dot3 = "_dot3_iyl5a_65";
const styles = {
  base,
  show,
  icon,
  "appear-button": "_appear-button_iyl5a_1",
  dot1,
  dot2,
  dot3
};
function GoToTopButton() {
  const { isOnTop: isOnTop2 } = useAppStore();
  return /* @__PURE__ */ jsxs(
    Link,
    {
      href: "#welcome",
      className: `${styles.base} ${isOnTop2 ? "" : styles.show}`,
      tabIndex: isOnTop2 ? -1 : 0,
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles.icon, children: [
          /* @__PURE__ */ jsx("div", { className: styles.dot1 }),
          /* @__PURE__ */ jsx("div", { className: styles.dot2 }),
          /* @__PURE__ */ jsx("div", { className: styles.dot3 })
        ] }),
        /* @__PURE__ */ jsx(Text, { as: "p", localeId: "goto.start" })
      ]
    }
  );
}
const es = {
  "link.cv": "cv/es.pdf",
  "goto.start": "Ir hacia arriba",
  "welcome.title": "Inicio",
  "welcome.status": "(En busca de trabajo)",
  "welcome.presentation": "¡Hola! Soy <strong>Desarrollador Web Fullstack</strong> con amplios conocimientos en tecnologías web y diseño.",
  "welcome.cv": "¡Descarga mi CV!",
  "job-experience.title": "Experiencia laboral",
  "job-experience.text1": "Estas son las empresas con las que he trabajado a lo largo de mi carrera profesional.",
  "job-experience.kolo": "<p>KOLO es un conjunto de herramientas (ERP) digitales que permite al pequeño y mediano empresario crecer, innovar y empoderarse de su empresa de manera accesible y personalizable.</p><strong>Mis contribuciones:</strong><ul><li>Desarrollé módulos tales como: Inventarios, Planes, Puntos de Venta, etc.; a la par de un pequeño equipo de desarrolladores.</li><li>Colaboré en mejorar el proceso de desarrollo implementando herramientas de coding y deploying.</li><li>Impulsé la implementación de buenas prácticas de desarrollo y UI/UX guiadas a ofrecer la mejor experiencia al usuario.</li></ul>",
  "projects.title": "Proyectos personales",
  "projects.text1": "Estos son algunos de los proyectos que he desarrollado en mi tiempo libre. ¡Espero que te gusten!",
  "projects.button1": "Ver repositorio",
  "projects.button2": "Ir a la página",
  "project.mini translator": "Traductor en línea en tiempo real. Facilita la traducción entre más de 100 lenguajes, así como el dictado del texto, todo desde una interfaz de usuario minimalista e intuitiva.",
  "project.quiz game": "Juego de preguntas en línea. Tiene una interfaz cómoda y sencilla, ¡para proveer una divertida y educativa experiencia!",
  "project.jolc": "Intérprete de JOLC, un lenguaje de programación derivado de Julia, ejecutable en la web. Facilita el debug del lenguaje mediante reportes.",
  "about-me.title": "Acerca de mí",
  "about-me.text1": "Disfruto mucho desarrollando software, amo las buenas prácticas y el clean code 📖. Soy aficionado de los deportes, los videojuegos de muchos géneros y la actualidad del mundo de la tecnología.",
  "about-me.text2": "Soy de la capital de Guatemala 🇬🇹, lugar de volcanes, de gran clima y gente alegre. Por supuesto, estoy abierto a trabajar con equipos internacionales mediante teletrabajo.",
  "about-me.text3": "Estoy cursando un grado de Ingeniería en Ciencias y Sistemas en la Universidad de San Carlos de Guatemala, gracias al cual he desarrollado una gran habilidad en el desarrollo de software y el trabajo colaborativo.",
  "skills.title": "Habilidades",
  "contact.title": "¡Contáctame!",
  "contact.text1": " ",
  "quote.carl-sagan1": "Lo que nos hace grandes es el hecho de poder ver lo pequeños que somos"
};
const en = {
  "link.cv": "cv/en.pdf",
  "goto.start": "Go to top",
  "welcome.title": "Home",
  "welcome.status": "(Looking for a job)",
  "welcome.presentation": "Hi! I'm a <strong>FullStack Web Developer</strong> with extensive knowledge in web technologies and design.",
  "welcome.cv": "Download my CV!",
  "job-experience.title": "Work experience",
  "job-experience.text1": "This is my work experience, I've worked in several companies and projects, I hope you like them!",
  "job-experience.kolo": "I worked as a FullStack Web Developer, developing a web application for the management of the company's products, as well as the management of the company's website.",
  "projects.title": "Personal works",
  "projects.text1": "These are some of the projects I've developed in my free time. I hope you like them!",
  "projects.button1": "See code",
  "projects.button2": "Go to page",
  "project.mini translator": "Real-time translation online. Mini Translator eases the translation between 100+ languages, as well as text spelling, everything from a minimalistic and intuitive GUI.",
  "project.quiz game": "Quiz game online. The GUI aims to be comfortable and simple, to provide knowledge and fun at the same time!",
  "project.jolc": "Web interpreter for a programming language derived from Julia, named JOLC. Eases the debug of the language via AST, error and symbols reports.",
  "about-me.title": "About me",
  "about-me.text1": "I really like software development, I love good practices and clean code 📖. I am passionate about sports, video games of many genres and the present of the world of technology.",
  "about-me.text2": "I live in the capital of Guatemala 🇬🇹, a place of volcanoes, great weather and nice people. Of course, I'm willing to work with international teams via remote work.",
  "about-me.text3": `I'm studying a degree in Science and Systems Engineering at "Universidad de San Carlos de Guatemala", thanks to which I developed great skills in software development and collaborative work.`,
  "skills.title": "Skills",
  "contact.title": "Contact me!",
  "contact.text1": " ",
  "quote.carl-sagan1": "What makes us great is the fact of being able to see how small we are"
};
const languages = {
  es,
  en
};
function Page() {
  const { locale } = useAppStore();
  const messages = languages[locale];
  useEffect(() => {
    document.querySelector("html").lang = locale;
  }, [locale]);
  return /* @__PURE__ */ jsx("div", { className: styles$o.base, children: /* @__PURE__ */ jsxs(IntlProvider, { locale, messages, children: [
    /* @__PURE__ */ jsx(Showcase, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(AllSections, {}),
    /* @__PURE__ */ jsx(GoToTopButton, {})
  ] }) });
}
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: "Module" }));
const configValuesImported = [
  {
    configName: "onRenderHtml",
    importPath: "/src/renderer/+onRenderHtml.jsx",
    isValueFile: true,
    exportValues: import_0
  },
  {
    configName: "Page",
    importPath: "/src/pages/index/+Page.jsx",
    isValueFile: true,
    exportValues: import_1
  }
];
const configValuesSerialized = {
  ["passToClient"]: {
    definedAt: { "files": [{ "filePathToShowToUser": "/src/renderer/+config.h.js", "fileExportPathToShowToUser": ["default", "passToClient"] }] },
    valueSerialized: '["pageProps","urlPathname"]'
  }
};
export {
  configValuesImported,
  configValuesSerialized
};
