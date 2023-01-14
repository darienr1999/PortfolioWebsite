
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contacts() {
    return (
        <div className='text-center Contacts-table-padding'>
            <div>
                <Row className='mb-5 w-100 px-5'>
                    <Col xxl={4} className = "">
                        <i class="fa-regular fa-envelope fa-8x mx-auto pb-4"></i>
                        <p className='fs-1'>darienrogers18@gmail.com</p>
                        
                    </Col>
                    <Col xxl={4} className = "">
                    <i class="fa-solid fa-phone fa-8x pb-4"></i>
                    
                    <p className='fs-1'>908-432-6878</p>
                    
                    </Col>

                    <Col xxl={4} className = "">
                    <i class="fa-brands fa-linkedin fa-8x pb-4"></i>
                    <br/>
                    <a href='https://www.linkedin.com/in/darien-rogers-730074208/' target="_blank" className='fs-1'>LinkedIn</a>
                    
                    </Col>

                </Row>
            </div>

    </div>
    )

}
export default Contacts;