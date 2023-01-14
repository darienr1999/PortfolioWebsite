

import ProjectCard from './ProjectCard';
import Row from 'react-bootstrap/Row';

import {motion} from 'framer-motion';
import projectData from "./projectData.json";

function Projects() {
    return (
      
      <div className='Section-style pb-5 Section-color1'>
          <motion.div 
              initial={
                  {opacity: 0, y: 50}
                  
              }
              whileInView={{opacity: 1, y:0}}
              transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 20
              }}
          >
            <h2 className = "Sub-header-text text-center mb-5">Projects</h2>
            <Row>
              {Object.keys(projectData).map((key) => {return ProjectCard(projectData[key])})}
            </Row>

          </motion.div>

      </div>
      );
}
export default Projects;