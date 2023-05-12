import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import shapes from '../img/download.png';
import seeds from '../img/1.jpg';
import rough from '../img/2.jpg';
import manmade from '../img/3.jpg';
import brith from '../img/brith.jpg';
import table from '../img/table.png';
import bannertop from '../img/11.jpg';

const Home = () => {
  return (
    <div>
      
        <div className='main_banner'>
          <div className='main_banner_bg'>
            <div>
              <div className='main_banner_heading'>
                <h2>AN ETHICALLY NURTURED BEAUTY <br /> WITH A SUSTAINABLE PROCESS.</h2>
              </div>
              <div className='main_banner_text mt-3'>
                <p>Lab created Diamond have the same Attributes of real Diamonds, Physically, Chemically and Optically. This Diamonds are Exquisite, Poket - friendly and are made Righteously, Causing no harm to Environment.  </p>
              </div>
              <div className='readmore_main mt-5'>
                <a href='About'>Read More</a>
              </div>
            </div>
          </div>
        </div>

      <div className='banner_img_responsive'>
        <img src={bannertop} />
      </div>
      <Container>
        <div className='banner_responsive mt-4 '>
          <div className='main_banner_heading_r'>
            <h2>AN ETHICALLY NURTURED BEAUTY  WITH A SUSTAINABLE PROCESS.</h2>
          </div>
          <div className='main_banner_text_r mt-3'>
            <p>Lab created Diamond have the same Attributes of real Diamonds, Physically, Chemically and Optically. This Diamonds are Exquisite, Poket - friendly and are made Righteously, Causing no harm to Environment.  </p>
          </div>
          <div className='readmore_main_r mt-5'>
            <a href=''>Read More</a>
          </div>
        </div>
      </Container>

      <div className='our_shapes'>
        <Container>
          <div className='shapes_title'>
            <h2>we <span>create </span>what you <span>demand</span></h2>
          </div>
          <div className='shapes_img mt-5'>
            <img src={shapes} />
          </div>
        </Container>







        <div className='birth_diamond web_p'>
          <Container>
            <div className='brith_title'>

              <Row className='align-items-center'>
                <Col lg={6} className='birth_order_text'>
                  <div className='brith_text'>
                    <h2>BIRTH OF <span>LAB GROWN </span>DIAMONDS</h2>
                    <p className='mt-4'>
                      Lab grown diamonds are <span>REAL</span> diamonds grown by exactly
                      replicating the diamond creation process from under the
                      surface of the earth. It all begins with a natural diamond
                      seed. The seed is placed in the <span>CVD</span> plasma chamber and
                      an intense environment of temperature and pressure is
                      created just like that found under the earth.
                      Gases are infused and along with the right combination
                      of pressure and temperature conditions, carbon formations
                      develop into rough diamonds.
                    </p>
                  </div>
                </Col>
                <Col lg={6} className='birth_order_img'>
                  <div className='brith_img'>
                    <img src={brith} />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>


      <div className='man_made_prosess'>
        <Container>
          <div className='diamonds_prosess'>
            <h2>JOURNEY OF <span>MAN-MADE/ LAB-GROWN </span>DIAMOND</h2>
          </div>
          <Row className='mt-5'>
            <Col lg={4} md={4} sm={6}>
              <div className='prosess_main'>
                <div className='prosess_img'>
                  <img src={seeds} />
                </div>
                <div className='name_img'>
                  <h4>DIAMOND SEEDS</h4>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6}>
              <div className='prosess_main'>
                <div className='prosess_img'>
                  <img src={rough} />
                </div>
                <div className='name_img'>
                  <h4>MAN-MADE GROWN DIAMOND ROUGH</h4>
                </div>
              </div>
            </Col>

            <Col lg={4} md={4} sm={6} className='m_responsive'>
              <div className='prosess_main'>
                <div className='prosess_img'>
                  <img src={manmade} />
                </div>
                <div className='name_img'>
                  <h4 className='m_0'>MAN-MADE DIAMOND</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='comparing_title'>
        <h2>COMPARING <span>NATURAL & LAB MADE</span> DIAMONDS</h2>
      </div>
      <div className='comparing_diamond'>
        <div className='comparing_diamond_bg'>
          <Container>
            <Row>
              <Col lg={2}></Col>
              <Col lg={8}>
                <div className='table_img'>
                  <img src={table} />
                </div>
              </Col>
              <Col lg={2}></Col>
            </Row>
          </Container>
        </div>
      </div>


    </div>
  )
}

export default Home
