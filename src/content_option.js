const logotext = "Yb";
const meta = {
    title: "Yb",
    description: "I'm {Your name}, a technologist and cybersecurity enthuist.",
};

const introdata = {
    title: "Hi, I'm {Your Name}",
    animated: {
        first: "Technologist",
        second: "Software Developer",
        third: "Amateur Drone Pilot",
        fourth: "Quality Engineer",
        // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
    },
    description: "",
    your_img_url: "https://i.ibb.co/hXHBLfh/yb-logo2.png",
};

const dataabout = {
    title: "Who am I?",
    aboutme: "I am a senior software quality engineer with nine years of experience, working in sectors like third-party logistics (3PL), software consulting, a startup, and currently at CarMax. My technical expertise is in JavaScript, especially in Node.js and React.js. I also have experience with Azure DevOps, particularly in integrating test automation frameworks into build pipelines. My specialty lies in developing test frameworks for web applications, with a focus on integration testing and reliably testing complex user interfaces. I graduated from Ohio University in 2014 with a degree in Management Information Systems.",
};
const worktimeline = [{
        jobtitle: "Senior Quality Engineer",
        where: "CarMax",
        date: "Present",
    },
    {
        jobtitle: "Software Quality Engineer",
        where: "Vantage Point Logistics (VPL)",
        date: "2019-2021",
    },
    {
        jobtitle: "Consultant - Engineering",
        where: "Perficient",
        date: "2018-2019",
    },
];

const skills = [{
        name: "NodeJS",
    },
    
    {
        name: "ReactJS",
    },
    
    {
        name: "TypeScript",
    },
    
    {
        name: "Python",
    },

    {
        name: "Azure DevOps",
    },

    {
        name: "Playwright",
    },

    {
        name: "WebDriverIO",
    },

    {
        name: "Linux",
    },
];

const dataportfolio = [{
        img: "https://storage.googleapis.com/porfolio-d6cff.appspot.com/1623953939349.mov",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://storage.googleapis.com/porfolio-d6cff.appspot.com/crescent-beach.mov",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://storage.googleapis.com/porfolio-d6cff.appspot.com/quarry.mov",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://storage.googleapis.com/porfolio-d6cff.appspot.com/sand-bar.mov",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://storage.googleapis.com/porfolio-d6cff.appspot.com/salt-pond.mp4",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://storage.googleapis.com/porfolio-d6cff.appspot.com/the-point.mov",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    //YOUR_EMAIL: "test@test.com",
    //description: "Looking forward to hearing from you!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "SERVICE_ID",
    YOUR_TEMPLATE_ID: "TEMPLATE_ID",
    YOUR_USER_ID: "USER_ID (PUBLIC_KEY)",
};

const socialprofils = {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};