// import React from 'react';
// import './Project.css';
// import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
// import { Box } from '@mui/system';
// import tempConverter from './image/tempConverter.png';
// import todo from './image/todo.png';
// import movieFetch1 from './image/movieFetch1.png';
// import port1 from './image/port1.png';
// import port2 from './image/port2.png';
// import Zomato from './image/Zomato.png';

// const projectsData = [
//   {
//     title: "Movie Fetching With Name",
//     description: "This project is a simple movie fetching application where user can search for movies by their Name.",
//     techStack: "HTML, CSS, JavaScript, React, API",
//     image: movieFetch1,
//     link: "#"
//   },
//   {
//     title: "ToDo List Web App",
//     description: "This project is a simple Todo List web application where user can add, delete, and edit tasks.",
//     techStack: "HTML, CSS, JavaScript, React, LocalStorage",
//     image: todo,
//     link: "#"
//   },
//   {
//     title: "Temprature Converter",
//     description: "It is a simple Temprature Converter web application .",
//     techStack: "HTML, CSS, JavaScript",
//     image: tempConverter,
//     link: "https://youtu.be/LNQCVcbo8Cc?si=gB-50HmRYwEXZfoA"
//   },
//   {
//     title: "Portfolio-1",
//     description: "This project is a simple Portfolio website.",
//     techStack: "HTML, CSS, JavaScript",
//     image: port1,
//     link: "https://devrajput.netlify.app/"
//   },
//   {
//     title: "Zomato WebSite Clone",
//     description: "Zomato-inspired website frontend using just HTML and CSS.",
//     techStack: "HTML, CSS",
//     image: Zomato,
//     link: "https://youtu.be/9-rzNICpSOo?si=vuXst6gE5Ievz9Vb"
//   },
//   {
//     title: "Portfolio-2",
//     description: "This project is a simple Portfolio Website Using Html and Css .",
//     techStack: "HTML, CSS, JavaScript",
//     image: port2,
//     link: "https://youtu.be/j_dUaLIxqYI?si=MEo_Xp2-47zdAvI-"
//   }
// ];

// const Project = () => {


//   return (
//     <div>
//       <Box>
//         <Box variant='h5' className='pro-head'>PROJECTS</Box>
//         <Box className='pro-p' variant='body2' >
//           <p>Some of my projects include developing a responsive web application using HTML, CSS, JavaScript, React, and Material-UI for a seamless user experience across devices.</p>
//         </Box>
//       </Box>
//       <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, mt: 4 }}>
//         {projectsData.map((project, index) => (
//           <Box className='card1'>
//             <Card  key={index} sx={{ maxWidth: 350, height: 400  }}>
//             <CardMedia
//               component="img"
//               height="200"
//               image={project.image}
//               alt={project.title}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {project.title}
//               </Typography>
//               <Typography variant='body2' className='techStack' >
//                 {project.techStack}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {project.description}
//               </Typography>
//             </CardContent>
//             <CardActions>
//               <Button size="small" variant='outlined' color="primary" href={project.link} target="_blank">
//                 Learn More
//               </Button>
//             </CardActions>
//           </Card>
//           </Box>
//         ))}
//       </Box>
//     </div>
//   );
// };

// export default Project;





import React from 'react';
import './Project.css';
import Slider from 'react-slick';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tempConverter from './image/tempConverter.png';
import todo from './image/todo.png';
import movieFetch1 from './image/movieFetch1.png';
import port1 from './image/port1.png';
import port2 from './image/port2.png';
import Zomato from './image/Zomato.png';

const projectsData = [
  {
    title: "Movie Fetching With Name",
    description: "This project is a simple movie fetching application where user can search for movies by their Name.",
    techStack: "HTML, CSS, JavaScript, React, API",
    image: movieFetch1,
    link: "#"
  },
  
  {
    title: "Portfolio-1",
    description: "This project is a simple Portfolio website.",
    techStack: "HTML, CSS, JavaScript",
    image: port1,
    link: "https://devrajput.netlify.app/"
  },
  {
    title: "Zomato WebSite Clone",
    description: "Zomato-inspired website frontend using just HTML and CSS.",
    techStack: "HTML, CSS",
    image: Zomato,
    link: "https://youtu.be/9-rzNICpSOo?si=vuXst6gE5Ievz9Vb"
  },
  {
    title: "Portfolio-2",
    description: "This project is a simple Portfolio Website Using Html and Css .",
    techStack: "HTML, CSS, JavaScript",
    image: port2,
    link: "https://youtu.be/j_dUaLIxqYI?si=MEo_Xp2-47zdAvI-"
  },
  {
    title: "ToDo List Web App",
    description: "This project is a simple Todo List web application where user can add, delete, and edit tasks.",
    techStack: "HTML, CSS, JavaScript, React, LocalStorage",
    image: todo,
    link: "#"
  },
  {
    title: "Temprature Converter",
    description: "It is a simple Temprature Converter web application .",
    techStack: "HTML, CSS, JavaScript",
    image: tempConverter,
    link: "https://youtu.be/LNQCVcbo8Cc?si=gB-50HmRYwEXZfoA"
  }
];

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <Box>
        <Box variant='h5' className='pro-head'>PROJECTS</Box>
        <Box className='pro-p' variant='body2' >
          <p>Some of my projects include developing a responsive web application using HTML, CSS, JavaScript, React, and Material-UI for a seamless user experience across devices.</p>
        </Box>
      </Box>
      <Slider {...settings}>
        {projectsData.map((project, index) => (
          <Box className='card1' key={index}>
            <Card sx={{ maxWidth: 350, height: 400 }}>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant='body2' className='techStack'>
                  {project.techStack}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant='outlined' color="primary" href={project.link} target="_blank">
                  Know More
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default Project;


































