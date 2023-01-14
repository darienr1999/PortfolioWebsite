import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkilsIcons from './SkillsIcons';
import SkilsParagraph from './SkillsParagraph';
import {motion} from 'framer-motion';

function Skills() {
    return (
        <div className='Section-style Section-color1'>
            <Container fluid className='p-5 '>
                <Row>
                <Col xxl={6}  className="">
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
                        <SkilsParagraph/> 
                    </motion.div>
                    </Col>

                    <Col xxl={6} >
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
                            <SkilsIcons/>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Skills;