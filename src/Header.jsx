import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {motion} from 'framer-motion';
import Background from './Background';



function Header() {
    return (
        <div>
        <Background/>
        <div className='Header'>

            <div className='Section-style'>
            <motion.div 
              initial={
                  {opacity: 0, y: -500}
                  
              }
              whileInView={{opacity: 1, y:0}}
              transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 30
              }}
          >
                <Container fluid className=' text-center' >
                    <div className=''>

                            <img className='portrait' src = "meDrawn.png"></img>
                            <h1 className = "Header-text text-center">Hi, Im Darien Rogers. <br/> I Code stuff.</h1>
                    </div>
                </Container>

          </motion.div>

                
            </div>
        </div>
        </div>
    )
}

export default Header;