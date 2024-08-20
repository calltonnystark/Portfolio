import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'File Compression System Using Huffman Coding',
        description: "This project presents a file compression system utilizing the Huffman coding algorithm, a well-known method in data compression. Huffman coding is an optimal prefix code that assigns variable-length codes to input characters, with shorter codes assigned to more frequent characters. This system efficiently compresses files by reducing the overall size while ensuring lossless data recovery. The project demonstrates the implementation of the Huffman coding algorithm, showcasing its effectiveness in minimizing storage requirements and improving data transmission efficiency.",
        tools: ['Java', 'Huffman Coding', 'Priority Queue', 'Hash Table', 'Bit Manipulation', 'Greedy Algorithms'],
        role: 'Problem Solver',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Travel Agency App',
        description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: ' Job Portal',
        description: 'This project is a job portal web application developed using the MERN stack (MongoDB, Express, React, Node.js) with state management facilitated by Redux and Redux-Toolkit. The platform enables job seekers to create profiles, search for job listings, and apply for positions. Employers can post job openings, review applications, and manage their listings. The use of React ensures a dynamic and responsive user interface, while Node.js and Express handle the server-side logic and API endpoints. MongoDB serves as the database for storing user and job-related data. Redux and Redux-Toolkit provide a streamlined approach to state management, ensuring efficient data handling and a seamless user experience.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Axios', 'Express', 'Redux and Redux-Toolkit', 'MongoDB', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Newsroom Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },