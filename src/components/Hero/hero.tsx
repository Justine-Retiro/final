import React from 'react'
import Hero from '../../assets/home_banner_1.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card1 from '../../assets/JBPH-CSW-BEV-PROMO-FB-MOUNTAIN-DEW-FA-min-819x1024.jpg'
import Card2 from '../../assets/JBPH_CJOY-WEEKLONG-PROMO-Coke-min-_1_-819x1024.webp'
import Card3 from '../../assets/JBPH_PROJECT_CSW-BEV-PROMO-SPRITE_FB_FA-min-819x1024.jpg'

const imageStyle = {
    width: '50%', // or any size you want
    height: 'auto', // maintain aspect ratio
  };

const hero = () => {
  return (
        <Container fluid="xs">
                <section style={{backgroundImage: `url(${Hero})`, backgroundSize: 'cover',  width: '100%', height: '63vh'}}>
                    <Row className='text-start text-white d-flex justify-content-center align-items-center m-0' style={{height: '100%'}}>
                    
                    <Col className='ms-5 '>
                        <h1>Bring joy to you</h1>
                        <h3>Have your Jollibee favorites delivered <br />right to your doorstep! </h3>
                    </Col>
                        
                    </Row>
                    <Row className='text-center m-0'>
                        <Col className='my-5 p-0 d-flex justify-content-center align-content-center flex-column'>
                            <h1>Exclusive Promos</h1>
                            <hr style={{ margin: '0 auto', width: '50%' }}/>
                        </Col>
                    </Row>
                    <section>
                        <Row className='g-1 '>
                            <Col lg className='d-flex align-items-center justify-content-center'>
                                <img className='rounded-top' src={Card1} alt='' style={imageStyle}/>
                            </Col>
                            <Col lg className='d-flex align-items-center justify-content-center'>
                                <img className='rounded-top' src={Card2} alt='' style={imageStyle}/>
                            </Col>
                            <Col lg className='d-flex align-items-center justify-content-center'>
                                <img className='rounded-top' src={Card3} alt='' style={imageStyle} />
                            </Col>
                        </Row>
                    </section>
                </section>
        </Container>
   
  )
}

export default hero