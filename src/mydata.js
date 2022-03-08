// Skills Icons
import htmlIcon from "./images/html.svg"
import databaseIcon from "./images/database.svg"
import cssIcon from "./images/css.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import pythonIcon from "./images/python.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedinicon.png"

// About image
import proPic from "./images/profilepic.jpg"

// Project thubnails
import petitpic from "./images/petit.jpg"
import acnhpic from "./images/acnh.jpg"
import readme from "./images/readme.jpg"
import notetakerpic from "./images/notetaker.jpg"
import twickpic from "./images/twick.jpg"
import weatherpic from "./images/weatherdash.jpg"


export default {

  //   Header Details ---------------------
  name: "Software Development Engineer",
  headerTagline: [
    //Line 1 For Header
    "Charlotte Hulseman",
    //Line 2 For Header
    " ",
    //Line 3 For Header
    " ",
  ],
  //   Header Paragraph
  headerParagraph:
    "I'm a software development engineer with a focus in full stack engineering and back-end functionality. Previously, I was a freelance UX designer alongside my undergraduate studies at Fordham University, then pivoted to engineering by completing the University of Washington's coding bootcamp. I live in New York City and am seeking a remote or on-site role to contribute to an impactful product and team.",

  //Contact Email
  contactEmail: "cchulseman@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "PetIt", //Project Title
      para:
        "React app that publishes crowd-sourced reviews for the pet-friendliness of establishments and employers. The Yelp for pet-owners! Uses React, MySQL, Node.js, Express.js.", 
      imageSrc: petitpic,
    
      url: "https://petit-petfriendly.herokuapp.com/",
      repourl: "https://github.com/charlottehulseman/petit-frontend",
    },
    {
      title: "Twick", //Project Title
      para:
        "Twick is a visual dashboard displaying Tweets mentioning a user-selected stock ticker in real-time, for anyone wanting to view stock market information from your everyday trader rather than a news source. Uses Python, pandas, Docker, tweepy, AWS.",

      imageSrc: twickpic,
    
      url: "http://ec2-44-201-100-202.compute-1.amazonaws.com/stock/5",
      repourl: "https://github.com/charlottehulseman/twitter-stock-website",
    },
    {
      title: "Animal Crossing: New Horizons Dashboard", //Project Title
      para:
        "This Website was built to help end-users keep track of their villages and manage their collectibles of all the different parts of Animal Crossing: New Horizons in one central hub. Uses local storage to keep track of your gaming progress, and public ACNH API's.",

      imageSrc: acnhpic,
    
      url: "https://charlottehulseman.github.io/project1-animal-crossing/",
      repourl: "https://github.com/charlottehulseman/project1-animal-crossing",
    },
    {
      title: "Weather Dashboard", //Project Title
      para:
        "Intuitive weather dashboard that uses weather API's from Open Weather to display the weekly and daily forcast in a city of your choosing.",

      imageSrc: weatherpic,
    
      url: "https://charlottehulseman.github.io/weather-dashboard/",
      repourl: "https://github.com/charlottehulseman/weather-dashboard",
    },
    {
      title: "README Generator", //Project Title
      para:
        "Simple terminal program that prompts questions in your terminal and returns a structured README file for your project with the information given by the user.",

      imageSrc: readme,
    
      url: "https://www.youtube.com/watch?v=xk7PwszuOVg",
      repourl: "https://github.com/charlottehulseman/readme-generator",
    },
    {
      title: "SQL Employee Tracker", //Project Title
      para:
        "This SQL Employee Tracker terminal program is used to simply keep and make changes to a database of departments, roles and employees directly from the termainal via MySQL databases.",

      imageSrc: notetakerpic,
    
      url: "https://www.youtube.com/watch?v=0qsmgjvPye8",
      repourl: "https://github.com/charlottehulseman/sql-employee-tracker",
    },
  ],

  

  // About Secton --------------
  aboutParaOne:
    "I recently graduated from a full stack development bootcamp at the University of Washingotn. In July 2021, I graduated from Fordham University with a B.A. in Digital Design and New Media. Alongside my college courses, I was a freelance UX Designer & Researcher and received a certificate from General Assembly's User Experience Immersive bootcamp. The three computer science courses I took in college is what introduced me to the field.",
  aboutParaTwo:
    "Throughout college, I established myself as a creative-brained individual and problem-solver, which led me to pursue a major in digital design. When I began experimenting with programming by attending hack-a-thons and a global game jam, I realized that it requires more of an innovative mind than anything I have ever experienced. I fell in love with the challenges it created for me, the gratification I felt when solving a problem, and training my brain to think more like a computer. I am a passionate learner dedicated to excelling my skills and digging deeper into the field of computer science.",
  aboutParaThree:
    "As a worker, I am team-oriented, a strong communicator, an assertive leader and inspired by my enviornment. I work best when I adapt to a team's dynamic by gaining a sense of how my other colleagues operate, and when I am in a respectful space that welcomes brainstorming and collaboration. I also enjoy putting my brain to the test and teaching myself new tasks, and being able to see a higher up as a mentor. In my free time, I love to read and take walks around Manhattan with my dog, Panda. When I can, I like to ski, scuba dive, hike and travel. I also nerd out over Nintendo! Fun fact — you'll never beat me in a game of Mario Kart.",
  aboutImage:
    proPic,



  // Skills Section ---------------
  //   Icons imported at top

  skills: [
    {
      img: htmlIcon,
      para:
        "Proficiency with HTML, including DOM, XML and Markdown, as well as with other operational skills such as Git, GitHub, deployment, pseudocoding and creating ERD's.",
    },
    {
      img: cssIcon,
      para:
        "Advanced CSS including media queries, animations, advanced selectors and CSS frameworks such as Bootstrap, Material UI and UIKit.",
    },
    {
      img: jsIcon,
      para:
        "Skills and tools include advanced JavaScript, React, JQuery, JEST for testing, MERN Stack, State, GraphQL, Object-Oriented Programming, Object-relational Mapping, Redux, PWA's, Handlebars, Cloudinary, and the use of server-side, web and third-party API's.",
    },
    {
      img: databaseIcon,
      para:
        "Proficient with MySQL, NoSQL, MongoDB, including the generation, manipulation and integration of a database as well as database modeling. Tools include MySQLWorkbench and Insomnia.",
    },
    {
      img: designIcon,
      para:
        "Experience with the UX Design process such as user research, which includes affinity mapping and generating use cases and personas; information architecture such as site maps user flows and journey maps; wireframing, prototyping and usability testing; and visual design. Tools include Adobe CC, Figma, InVision, Unity.",
    },
    {
      img: pythonIcon,
      para:
        "Experience with Python and creating a website with Flask, and data manipulation and analysis libraries and such as Pandas, NumPy as well as Docker and AWS.",
    },
  ],


  //   Promotion Section --------------------------

  promotionHeading: "Testimonal",
  promotionPara:
    "''Charlotte and I have worked on two projects together, both of which I was project manager of. She is one of the most driven, hardworking, skilled, and kind-hearted people I know. She is that person who you give a task and know that regardless of how difficult or demanding it may be, she will give it her all! She is the first to volunteer when you have a task that needs taking care of, and is always voicing suggestions and opinions on hiccups that were encountered during project lifecycle. I will miss having my days brightened and my work motivations gassed by having her in my team, and look forward to the opportunity to have it once again.'' —via LinkedIn Recommendations",


  //   Contact Section --------------

  contactSubHeading: "Please don't hesitate to reach out",
  social: [

    { img: githubIcon, url: "https://github.com/charlottehulseman" },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/charlotte-hulseman",
    },
  ],
}
