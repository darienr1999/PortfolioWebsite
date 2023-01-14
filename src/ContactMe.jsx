
import Row from 'react-bootstrap/Row';

import Contacts from './Contacts';
import {motion} from 'framer-motion';

function ContactMe() {
    return (
        <div className='Section-color1'>
            <Row className="justify-content-md-center ">
            <motion.div 
              initial={
                  {opacity: 0, y: -50}
                  
              }
              whileInView={{opacity: 1, y:0}}
              transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 20
              }}
          >

            
                <h2 className = "Sub-header-text text-center">Contact Me</h2>
                    <Contacts />
           
          </motion.div>
          </Row> 
        </div>
    );
}
export default ContactMe;