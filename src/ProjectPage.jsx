
import projectData from "./projectData.json";
import "./ProjectPageCSS.css";
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import {motion} from 'framer-motion';


function ProjectPage() {
    const{projectLinkParam} = useParams();
    var selectedProject = projectData[projectLinkParam];
    console.log(selectedProject);
    var renderLink = true;
    if (selectedProject.linkToRepository === "") {
        renderLink = false;
    }

    return (
        <div className="Project-page-format Section-color1 ">
            <Row>

                <Col lg={6} className="p-5">
                    <motion.div 
                        initial={
                            {opacity: 0, x: -100}
                            
                        }
                        whileInView={{opacity: 1, x:0}}
                        transition={{
                            type: "spring",
                            stiffness: 60,
                            damping: 20
                        }}
                    >
                        <h1 className="Project-header-text mb-5">
                            {selectedProject.projectName}
                        </h1>
                        <p className = "Project-description-text mb-5">
                            {selectedProject.projectDescription}
                        </p>
                        {renderLink === true ? 
                            <p className = "Project-description-text mb-5">
                                Document/Repository:  
                                <a href= {selectedProject.linkToRepository} target="_blank" rel="noreferrer">
                                    Link
                                </a>
                            </p>
                            :
                            null
                        }


                    </motion.div>

                </Col>
                <Col lg={6}>
                    <motion.div 
                        initial={
                            {opacity: 0, x: 100}
                            
                        }
                        whileInView={{opacity: 1, x:0}}
                        transition={{
                            type: "spring",
                            stiffness: 60,
                            damping: 20
                        }}
                    >

                        <iframe className="Project-vid-size" title="Project Video"
                            src= {selectedProject.video}>
                        </iframe>
                    </motion.div>
                </Col>
            </Row>
        </div>

    );
}
export default ProjectPage;