// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "List of publications in chronological order. (*) is used to denote equal contributions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Selected software repos and open source projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "CV up-to-date as of 2025.02",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-i-joined-silab-at-kaist-and-started-pursuing-a-master-s-degree",
          title: 'I joined SILAB at KAIST and started pursuing a Master’s Degree',
          description: "",
          section: "News",},{id: "news-a-paper-got-accepted-at-neurips-2022-dlde-workshop-spotlight",
          title: 'A paper got accepted at NeurIPS 2022 DLDE Workshop (Spotlight)',
          description: "",
          section: "News",},{id: "news-a-paper-got-accepted-at-iclr-2022",
          title: 'A paper got accepted at ICLR 2022',
          description: "",
          section: "News",},{id: "news-a-paper-got-accepted-at-iclr-2022",
          title: 'A paper got accepted at ICLR 2022',
          description: "",
          section: "News",},{id: "news-a-paper-got-accepted-at-the-ai4science-workshop-at-icml-2022-oral",
          title: 'A paper got accepted at the AI4Science workshop at ICML 2022 (Oral)',
          description: "",
          section: "News",},{id: "news-i-started-my-ph-d-in-kaist-advised-by-prof-jinkyoo-park",
          title: 'I started my Ph.D. in KAIST advised by Prof. Jinkyoo Park',
          description: "",
          section: "News",},{id: "news-a-paper-got-accepted-at-neurips-2022",
          title: 'A paper got accepted at NeurIPS 2022',
          description: "",
          section: "News",},{id: "news-a-paper-got-accepted-at-icml-2023",
          title: 'A paper got accepted at ICML 2023!',
          description: "",
          section: "News",},{id: "news-two-papers-got-accepted-at-neurips-2023",
          title: 'Two papers got accepted at NeurIPS 2023!',
          description: "",
          section: "News",},{id: "news-a-paper-got-accepted-at-the-neurips-2023-glfrontiers-ws-oral",
          title: 'A paper got accepted at the NeurIPS 2023 GLFrontiers WS (Oral)!',
          description: "",
          section: "News",},{id: "news-a-paper-got-accepted-as-an-extended-abstract-at-aamas-2024",
          title: 'A paper got accepted as an Extended Abstract at AAMAS 2024!',
          description: "",
          section: "News",},{id: "news-a-paper-got-accepted-at-iros-2024",
          title: 'A paper got accepted at IROS 2024!',
          description: "",
          section: "News",},{id: "news-a-paper-got-accepted-at-the-icml-2024-fm-wild-workshop-oral",
          title: 'A paper got accepted at the ICML 2024 FM-Wild Workshop (Oral)!',
          description: "",
          section: "News",},{id: "news-a-paper-got-accepted-at-neurips-2024",
          title: 'A paper got accepted at NeurIPS 2024!',
          description: "",
          section: "News",},{id: "news-a-paper-got-accepted-at-aamas-2025",
          title: 'A paper got accepted at AAMAS 2025!',
          description: "",
          section: "News",},{id: "news-a-paper-got-selected-as-best-paper-award-finalist-at-designcon-2025",
          title: 'A paper got selected as Best Paper Award Finalist at DesignCon 2025!',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%65%72%74%6F.%66%65%64%65%72%69%63%6F%32@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/fedebotu", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/fede.botu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/federicoberto", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7438-8365", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=3DetYBsAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
