export const personalData = {
    name: "Svyatoslav Ivanyshyn",
    role: "FRONTEND DEVELOPER (JS/TS/React)",
    location: "Ukraine, Lviv",
    languages: [
        { type: "ENGLISH", level: "Intermediate" },
        { type: "UKRAINIAN", level: "Native" },
    ],
    education: [
        "Lviv Polytechnic National University",
        // "Master of Science in Artificial Intelligence, Imperial College London (2019-2021)",
    ],
    contactLinks: [
        // {
        //     title: "email",
        //     text: "mailto:emailto:blackdbf@gmail.com",
        // },
        {
            title: "linkedin",
            text: "https://www.linkedin.com/in/svyatoslav-ivanyshyn-a17060243",
        },
        {
            title: "github",
            text: "https://github.com/Apenflex",
        },
        {
            title: "phone",
            text: "tel:+380633420204",
        },
    ],
};

export const aboutMe = {
	title: "ABOUT ME",
	body: [
		"A have experience 7months in creating a layout using HTML, CSS(Preprocessors) used BEM technology and JavaScript, followed by landing on Wordpress. I have done some small projects on react. Commercial experience in WordPress development. I continue my studies in JavaScript, React,Next.js and also studying new technologies and English language. I have practical and commercial experience working in a team. ",
		"Development, growth, practice and for results are important for me. I am a quick learner, responsible and ready to perform difficult tasks.",
	],
};

export const skills = {
    soft: [
        { icon: "👂🏼", text: "Hardworking" },
        { icon: "💬", text: "Purposeful" },
        { icon: "👥", text: "Collaboration" },
        { icon: "⽓", text: "Teamwork" },
        { icon: "💡", text: "Self-organized" },
        { icon: "⌛️", text: "Time management" },
    ],
    hard: [
        { icon: "💻", text: "HTML" },
        { icon: "✍️", text: "CSS/SCSS" },
        { icon: "ʦ", text: "JAVASCRIPT/ TYPESCRIPT" },
        { icon: "📚", text: "BOOTSTRAP / TAILWIND" },
        { icon: "📐", text: "FIGMA (DESIGN SOFTWARE)" },
        { icon: "📈", text: "WORDPRESS (CMS)" },
        { icon: "🚀", text: "REACT/REACT HOOKS" },
        { icon: "🚦", text: "REDUX/ZUSTAND" },
		{ icon: "⛳️", text: "REST API" },
		{ icon: "📦", text: "NEXT.JS" },
		{ icon: "🎱", text: "GIT" },
    ],
};

export const professionalData = {
    title: "WORK EXPERIENCE",
    experiences: [
        {
            company: "SELF EMPLOYED",
            role: "Developer",
            time: "Jan 2023 - Present",
            description: "Working with CMS Wordpress",
            current: true,
        },

        {
            company: "SELF EMPLOYED",
            role: "Developer",
            time: "Dec 2022 - Present",
            description:
                "Practice with React and Next.js. I working on my projects and projects with my community.",
            current: true,
        },
        {
            company: "UDEMY",
            role: "Advanced Course  of  JavaScript  and  React(React  Hooks  + Redux)",
            time: "Sep 2022 - Nov 2022",
            description:
                "In this course I`m learned more diffucult JS and fundamentals of React and made 2 small projects.",
            current: false,
        },
        {
            company: "SCRIPTJEDI42",
            role: "Student of JavaScript. Practice cource with JavaScript",
            time: "Aug 2022 - Sep 2022",
            description:
                "Practice course with JavaScript from Vyacheslav Koldovsky",
            current: false,
        },
        {
            company: "SOFTSERVE ACADEMY",
            role: "Student of softserve academy",
            time: "Jun 2022 - Jul 2022",
            description:
                "HTML/CSS/JavaScript Fundamentals. In this course i got fundamentals skills HTML / CSS / JavaScript",
            current: false,
        },
        {
            company: "UDEMY",
            role: "Student of Course CMS Wordpress",
            time: "May 2022 - Jun 2022",
            description:
                "Studied in Course CMS Wordpress. I got basic knowledge how to  work  and  create  web-pages with CMS Wordpress",
            current: false,
        },
        {
            company: "UDEMY",
            role: "Student of Course HTML/CSS/JS",
            time: "Feb 2022 - May 2022",
            description:
                "Studied in course WebDeveloper. I got basic knowledge how to work with HTML/CSS/JS. Fundamentals of HTML, CSS, Scss, Sass, Less, JavaScript, OOP, Bootstrap and other Libraries",
            current: false,
        },
        {
            company: "SOLE TRADER",
            role: "Owner",
			time: "Feb 2014-Jan2022",
			description: "I was involved in selling, repairing sewing equipment and servicing sewing production, such as Aviatsiya Halychyny, Bohutska, Olya  Mak, and others.",
			current: false,
        },
    ],
};

export const projectsData = {
    works: [
        {
            title: "Next.js Checklisty",
            link: "https://github.com/programmingmentor/checklisty",
            description: "Checklisty app built with Next.js it`s my project with team. Still in development",
            stack: ["Next.js", "TypeScript", "Prisma", "Docker", "PostgreSQL", "TailwindCSS", "NextAuth"],
        },
        {
            title: "React-Heroes-Redux",
            link: "https://github.com/Apenflex/React-Heroes-Redux",
            description: "React App where you can add your hero and sort",
            stack: ["React", "Redux", "React Hooks", "Scss", "JSON", "API"],
        },
        {
            title: "Next.js PostIt App",
            link: "https://github.com/Apenflex/Next-PostIt-App",
            description: "PostIt App where you can authorize with Google and add your posts",
            stack: ["Next.js", "TypeScript", "NextAuth", "Prisma", "PostgreSQL", "Railway", "TailwindCSS", "Auth with Google"],
        },
        {
            title: "Plants Shop",
            link: "https://react-plants-shop.vercel.app/",
            description: "Small online shop with React and Zustand",
            stack: ["React", "Zustand", "React Router", "React Hooks", "CSS", "JSON", "Formik"],
        },
        {
            title: "React Marvel Heroes",
            link: "https://react-marvel-learn-api.vercel.app/",
            description: "Project with Marvel API where you can find your favorite hero",
            stack: ["React", "React Router", "React Hooks", "Scss", "Marvel API", "Suspense", "Lazy", "Skeleton"],
        },
        {
            title: "React Coffee Shop",
            link: "https://react-coffee-shop-psi.vercel.app/",
            description: "First React project about coffee shop",
            stack: ["React", "React Router", "React Hooks", "CSS"],
        },
        {
            title: "Heating Company",
            link: "https://prime-hvac.ca/",
            description: "WordPress commercial project for Heating Company",
            stack: ["WordPress", "PHP", "CSS", "HTML", "JavaScript"],
        },
        {
            title: "Car Rental",
            link: "https://apenflex.github.io/Car_Rental/dist/index.html",
            description: "WebPage for Car Rental",
            stack: ["HTML", "CSS", "JavaScript", "Scss", "BEM"],
        },
        {
            title: "WebPage with Observer Scroll",
            link: "https://apenflex.github.io/Modules/ObserverScroll//index.html",
            description: "WebPage with Observer Scroll",
            stack: ["HTML", "CSS", "JavaScript", "Scss",],
        },
        {
            title: "Calculator WebApp",
            link: "https://apenflex.github.io/Modules/Calculator//index.html",
            description: "Practice with JavaScript. Calculator WebApp",
            stack: ["HTML", "CSS", "JavaScript", "Scss",],
        },
        {
            title: "WebPage from my SoftServe Course",
            link: "https://apenflex.github.io/softserve_project/index.html",
            description: "WebPage from my SoftServe Course",
            stack: ["HTML", "CSS", "JavaScript", "Scss",],
        },
        {
            title: "WebPage from Udemy Course",
            link: "https://apenflex.github.io/Portfolio_site/index.html",
            description: "WebPage from Udemy Course",
            stack: ["HTML", "CSS", "JavaScript", "Scss",],
        },
    ]
};
