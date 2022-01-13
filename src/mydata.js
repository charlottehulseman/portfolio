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


export default {

  //   Header Details ---------------------
  name: "Software Engineer",
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
    "Hello, I'm a software engineer specializing in full stack development. Previously, I was a freelance UX Designer alongside my undergraduate studies at Fordham University. I live in New York City and am seeking a remote or on-site engineering role to showcase and and strenghthen my skills.",

  //Contact Email
  contactEmail: "cchulseman@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "PetIt", //Project Title
      para:
        "Full Stack social networking app allowing users to inform each other on the pet-friendliness of employers and establishments using MySQL, React, Node, and Express.", 
      imageSrc:
        "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    
      url: "https://petit-petfriendly.herokuapp.com",
      repourl: "https://github.com/charlottehulseman/petit-frontend",
    },
    {
      title: "Twick", //Project Title
      para:
        "Twick is a visual dashboard displaying Tweets mentioning a pre-selected stock ticker in real-time, meaning it is updated everytime a new tweet is posted. The purpose is to be able to see what everyday people have to say about the stock market rather than a news source, in an organized and direct fashion.",

      imageSrc:
        "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
    
      url: "http://chetanverma.com/",
    },
    {
      title: "Animal Crossing New Horizons Dashboard", //Project Title
      para:
        "This Website was built to help end-users keep track of their villages and manage their collectibles of all the different parts of Animal Crossing: New Horizons in one central hub.",

      imageSrc:
        "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    
      url: "https://github.com/charlottehulseman/project1-animal-crossing",
    },
    {
      title: "Weather Dashboard", //Project Title
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",

      imageSrc:
        "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    
      url: "http://chetanverma.com/",
    },
    {
      title: "Budget Tracker", //Project Title
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",

      imageSrc:
        "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    
      url: "http://chetanverma.com/",
    },
    {
      title: "Team Profile Generator", //Project Title
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",

      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
    
      url: "http://chetanverma.com/",
    },
  ],

  

  // About Secton --------------
  aboutParaOne:
    "I recently graduated from the University of Washington full stack development bootcamp in partnership with Trilogy Education Services. In July 2021, I graduated from Fordham University with a B.A. in Digital Design and New Media. Alongside my college courses, I was a freelance UX Designer and received a certificate from General Assembly's User Experience Immersive bootcamp. The two computer science classes I took in college is what introduced me to the field.",
  aboutParaTwo:
    "Throughout most of college, I failed to consider computer science as a possible path for me because I believed I was a creative-brained person, and therefore would never be capable of engineering. When I tried it, I quickly realized that coding requires more of an innovative mind than anything I have ever experienced. I fell in love with the challenges it created for me, the gratification I felt when solving a problem, and training my brain to think like a computer. I didn't grow up taking electronics apart or completing mathematical equations in my free time, but I am a passionate learner dedicated to excelling my skills and digging deeper into the field.",
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
        "Proficiency with HTML, including DOM, XML and Markdown, as well as with other operational skills such as Git, GitHub, pseudocoding and creating ERD's.",
    },
    {
      img: cssIcon,
      para:
        "Advanced CSS including media queries, animations, advanced selectors and CSS frameworks such as Bootstrap, Material UI and UIKit.",
    },
    {
      img: jsIcon,
      para:
        "Skills and tools include advanced JavaScript, React, JQuery, JEST for testing, MERN Stack, Babel, State, GraphQL, Object-Oriented Programming, Object-relational Mapping, Redux, PWA's, Handlebars, Cloudinary, and the use of server-side, web and third-party API's.",
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
        "Experience with Python and Python frameworks for creating websites such as Flask and Jekyll, and data manipulation and analysis libraries and such as Pandas, NumPy or framworks such as PyPretty.",
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
      url: "https://www.codepen.com/",
    },
  ],
}
