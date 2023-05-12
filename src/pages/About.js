import React from 'react'
import '../css/about.css';
import abbanner from '../img/ab.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import diamond from '../img/112.jpg';
import misson from '../img/misson.jpg'


const About = () => {
    return (
        <div>
            <div className='ab_banner'>
                <img src={abbanner} />
            </div>
            <Container>
                <div className='about_avp_detail'>
                    <h2>about <span>apv star</span></h2>
                </div>
                <div className='avp_detail mt-4'>
                    <p>
                        We are proud to be the Grower and Manufacturer of Lab
                        Grown Diamonds, Created using cutting edge scientific
                        technology & graded by renowned gemological institutes.
                        AVP Star creates Lab Grown Diamonds ranging from
                        0.25 to 5 carats and Plus.
                    </p>
                    <p className='mt-3'>
                        Lab Grown Diamonds at AVP Star are grown in highly
                        controlled Laboratory Environment using advanced
                        technological process that duplicate the conditions under
                        which diamonds naturally develop when they form in the
                        mantle beneath the earth’s crust.
                    </p>
                    <p className='mt-3'>
                        We provide high-quality lab created diamonds to
                        progessive diamond merchants, distributors and manufacturers.
                    </p>
                </div>
            </Container>

            <div className='our_vision '>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={7} md={12} className='ab_order2'>
                            <div className='vision_taxt'>
                                <h2>our <span>vision</span></h2>
                            </div>
                            <div className='vision_datil mt-4'>
                                <p>
                                    Our Vision is to keep up with the latest trends to <span>provide contemporary technological </span> advanced, sustainable and cost effective diamond products.
                                </p>
                                <p className='mt-3'>
                                    We've moved beyond the 'What ifs' as we explore the 'What's next'.
                                    Our vision is to <span>think the extraordinary, chase perfection and move forward </span> with the future.
                                </p>
                            </div>
                        </Col>
                        <Col lg={5} md={12} className='ab_order'>
                            <div className='dimond_img_main'>
                                <div className='dimond_img'>
                                    <img src={diamond} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='our_misson'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={5} md={12} >
                            <div className='dimond_img_main'>
                                <div className='dimond_img'>
                                    <img src={misson} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={7} md={12}>
                            <div className='vision_taxt'>
                                <h2>our <span>mission</span></h2>
                            </div>
                            <div className='vision_datil mt-4'>
                                <p>
                                    Our Mission is to redefine the shine of a Lab Grown Diamond and make it accessible to large number of
                                    people on a regular basis at affordable price point through consistent innovation for a Better, Brighter and Sustainable Future.
                                </p>
                                <p className='mt-3'>
                                    To reappraise luxury in a conscious effort towards
                                    sustainability with our eco-friendly diamonds that
                                    not only help preserve the legacy of a diamonds
                                    but also protects the planet for a brighter future.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='choose_avp'>
                <div className='choose_title'>
                    <h2>WHY <span>CHOOSE AVP STAR</span> ?</h2>
                </div>
                <Container>
                    <div className='choose_detail mt-5'>
                        <div className='detail_text'>
                            <h2>QUALITY</h2>
                            <p className='mt-3'>
                                We serve with the aim to add more value to the lives of
                                people we touch. We expand our knowledge and base
                                to ensure that quality diamonds reach our customer.
                                Providing supreme quality is what determines our brand’s
                                character and that is exactly what we wish to portray through our diamonds.
                            </p>
                        </div>
                        <div className='detail_text mt-5'>
                            <h2>ASSURANCE & CERTIFICATE</h2>
                            <p className='mt-3'>
                                A true mark is necessary to help
                                build trust! and therefore , all our diamonds are certified by the
                                International Gemological Institute ( IGI) &
                                Gemological Institute of America (GIA).
                                This certificate is to prove that our intentions are pure and that
                                we mainly aim at making your lives rich and better with our diamonds.
                            </p>
                        </div>
                        <div className='detail_text mt-5'>
                            <h2>FAIR TRADE</h2>
                            <p className='mt-3'>
                                We believe in building trust with quality diamonds
                                and showcasing ourselves as a credible source. Fair-trade is what
                                we carry out! Right from the Process of creation to cutting and packaging,
                                we strictly abide by our ethical values and ensure that our customers
                                get only the best.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default About