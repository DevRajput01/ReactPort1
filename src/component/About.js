import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './About.css';
import { Button, Typography } from '@mui/material';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SchoolIcon from '@mui/icons-material/School';
import Devendra from './Devendra.pdf';
import Marquee from 'react-fast-marquee';
import comp21 from './logos/comp21.png';
import Python1 from './logos/Python1.png';
import Css from './logos/Css.png';
import Html from './logos/Html.png';
import jss from './logos/jss.png';
import React1 from './logos/React1.png';
import figma from './logos/figma.jpg';
import canva from './logos/canva.png';
import Mui from './logos/Mui.png';
import College1 from './logos/College1.jpeg';
import College2 from './logos/College2.jpeg';
import School from './logos/School.jpeg';
//import SchoolIcon from '@mui/icons-material/School';
//import { height, width } from '@mui/system';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className='tab-box'>
    <Box sx={{ width: '100%', typography: 'body1' , justifyContent: 'center' , alignContent: 'center' , alignItems: 'center' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example"  centered>
            <Tab  icon={<WorkHistoryIcon />} label="Experience" value="1" />
            <Tab icon={<AutoGraphIcon />} label="Skills" value="2" />
            <Tab icon={<SchoolIcon/>} label="Education" value="3" />
            <Tab icon={<EmojiEventsIcon />} label="Awards" value="4" />
          </TabList>
        </Box>

{/*************TABPANEL-1*****************/}


        <TabPanel value="1">
      <Box className="comp-card">
        <Typography>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <h4>Bharat Intern , </h4>
            <h5> Frontend Intern ( Jul 2023 - Aug 2023 )</h5>
          </Box>
        </Typography>
        <p>
          Work with HTML, CSS, and JavaScript to build user interfaces.
          Ensure responsive design for various devices and browsers.
          Understanding of web technologies and protocols.
          Experience with development tools and environments.
        </p>
        <Button
          href="https://www.linkedin.com/in/devtech01/details/experience/"
          className="center-button"
        >
          Know More
        </Button>
      </Box>
      <Box className="comp-card">
        <Typography>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <h4>TP Cell, MIMIT Malout  , </h4>
            <h5>Graphic Designer ( Apr 2023 - Present )</h5>
          </Box>
        </Typography>
        <p>
          During my tenure as a student representative in the Training and Placement Cell (TP Cell) at my college, I have had the privilege of working across diverse domains, honing skills that go beyond the realms of academics.
        </p>
        <Button
          href="https://www.linkedin.com/in/devtech01/details/experience/"
          className="center-button"
        >
          Know More
        </Button>
      </Box>
      <Button
            variant="contained"
            color="secondary"
            href={ Devendra }
            download
          >
            Download Resume
          </Button>
    </TabPanel>



{/*************TABPANEL-2*****************/}

      <TabPanel value="2">
          <Typography className='heading-skill'></Typography>
          <Box className="Skills-Section">
            <div className='left'>
              <img src={ comp21 } alt="" />
            </div>
            <div className='right'>
              <ul>
              <li className="bar html"> <span className="language"> HTML </span> <span class="percentage"> 90% </span> </li>
                <li className="bar css"> <span className="language "> CSS </span> <span class="percentage"> 80% </span> </li>
                <li className="bar js"> <span className="language "> JavaScript </span> <span class="percentage"> 60% </span></li>
                <li className="bar MaterialUi"> <span className="language "> Material UI </span> <span class="percentage"> 70%</span> </li>
                <li className="bar reactjs"> <span className="language "> ReactJS </span> <span class="percentage"> 60% </span></li>
               </ul>
            </div>
            <Marquee gradient={false} speed={70} >
                <img src={Html} alt="HTML" style={{ height: '60px', width: '60px', margin: '0 10px' }} />
                <img src={Css} alt="CSS" style={{ height: '60px', width: '60px', margin: '0 10px' }} />
                <img src={jss} alt="JavaScript" style={{ height: '60px', width: '60px', margin: '0 10px' }} />
                <img src={React1} alt="ReactJS" style={{ height: '60px', width: '60px', margin: '0 10px' }} />
                <img src={Python1} alt="Python" style={{ height: '60px', width: '60px', margin: '0 10px' }} />
                <img src={canva} alt="canva" style={{ height: '60px', width: '80px', margin: '0 10px' , borderRadius:"50%" }} />
                <img src={figma} alt="figma" style={{ height: '60px', width: '100px', margin: '0 10px' }} />
                <img src={Mui} alt="Mui" style={{ height: '60px', width: '60px', margin: '0 10px' }} />
            </Marquee>
          </Box>
          </TabPanel>



{/*************TABPANEL-3*****************/}



<TabPanel value="3">
    <Box className='edu-card'>
        <div class='edu-header'>
            <div class='edu-title'>
                <h4>BTech</h4>
                <h5>Computer Science & Engineering</h5>
            </div>
            <h6>(2022-2026)</h6>
        </div>
        <p>MIMIT Malout (Punjab Govt. Engineering & Management College), affiliated with IKG PTU, Jalandhar.</p>
    </Box>
    <Box className='edu-card'>
        <div class='edu-header'>
            <div class='edu-title'>
                <h4>Class 12th (ISc)</h4>
                <h5>Intermediate Science</h5>
            </div>
            <h6>(2019-2021)</h6>
        </div>
        <p>Completed Intermediate Science with a focus on Physics, Chemistry, and Mathematics. This period of study provided a solid foundation in scientific principles and analytical thinking, which has been invaluable in my engineering education.</p>
    </Box>
    <Box className='edu-card'>
        <div class='edu-header'>
            <div class='edu-title'>
                <h4>Class 10th</h4>
                <h5>High School</h5>
            </div>
            <h6>(Completed in 2019)</h6>
        </div>
        <p>Completed high school education with a focus on Science and Mathematics.</p>
    </Box>
</TabPanel>


{/*************TABPANEL-4*****************/}


<TabPanel value="4">
    <Box className="Award-box">
        <Box className='award-card'>
            <div class='award-content'>
                <div class='award-text'>
                 <h4>🥇 1st place in logo designing Competition in College.</h4>
                <p> 1st Place in logo designing Competition</p>
                </div>
                <img src={College1} alt="Award" />
            </div>
        </Box>
    </Box>
    <Box className="Award-box">
        <Box className='award-card'>
            <div class='award-content'>
                <div class='award-text'>
                    <h4>🥈 2nd place at our college Techfest (#Prayog 2022)</h4>
                    <p>Thrilled to have clinched 2nd place at our college Techfest (#Prayog 2022) during my first year. 🥈🥈 My project, a cutting-edge sensor-based home security system, not only impressed the judges but also showcased the power of innovation and dedication.💻</p>
                </div>
                <img src={College2} alt="Award" />
            </div>
        </Box>
    </Box>
    <Box className="Award-box">
        <Box className='award-card'>
            <div class='award-content'>
                <div class='award-text'>
                    <h4>🥇 School Topper</h4>
                    <p>Secured 1st position in school in 10th Class</p>
                </div>
                <img src={School} alt="Award" />
            </div>
        </Box>
    </Box>
    <Button
            variant="contained"
            color="secondary"
            href="https://www.linkedin.com/in/devtech01/details/honors/"
          >
            Know More
          </Button>
</TabPanel>
    </TabContext>
    </Box>
    </Box>
  );
}
