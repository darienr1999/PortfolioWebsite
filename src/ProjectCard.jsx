import {motion} from "framer-motion";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';

function ProjectCard(project) {
  console.log('/project/' + project.id);
    return(
        <Col lg={4} className = "mb-5">
          <Link to = {'/project/' + project.id}>
            <motion.div
              whileHover={{
                scale: 1.1,
                
              }}
              whileTap = {{
                scale: 0.9
              }}
            >
            <Card className="bg-dark text-white card-size center">
              <Card.Img src= {project.imgPath} alt="Card image" />
              <Card.ImgOverlay className = "p-0">
                <motion.div
                  className='card-text-background'
                    initial = {{opacity: 0}}
                    whileHover = {{opacity: 1}}
                >
                <Container className='card-text-padding'>
                <Card.Title>{<p className="card-title-text">{project.projectName}</p>}</Card.Title>
                <Card.Text>
                  {project.cardDescription}
                </Card.Text>
                </Container>
                </motion.div>
        
              </Card.ImgOverlay>
            </Card>
            </motion.div>
          </Link>
    
      </Col>
    )

}

export default ProjectCard;