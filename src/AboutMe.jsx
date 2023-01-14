import {motion} from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutMeParagraph from './AboutMeParagraph';

function AboutMe() {
    return (
        <div className='Section-style Section-color1'>
            <Container fluid className='p-5 '>
                <Row>
                <Col xl={6}  className=" my-auto p-5">
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
                        <img className= "About-me-picture" src='/mario.png' alt='elden ring art'></img>
                    </motion.div>
                    </Col>

                    <Col xl={6} >
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
                            <AboutMeParagraph/>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default AboutMe;