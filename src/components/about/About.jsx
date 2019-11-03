import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';
import './About.css'
import cutebb from '../../assets/img/cutebb.png';
import amy from '../../assets/img/amy.jpg';

import {Image, Container, Row, Col, Nav} from 'react-bootstrap';
import AnchorLink from "react-anchor-link-smooth-scroll";

class About extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="about-body" id="about">
                <Container>
                    <Row>

                        <Col lg={5} md={12} className="about-image-container">
                            <Image src={amy} roundedCircle className="about-image"/>
                        </Col>
                        <Col lg={7} md={12} className="about-bio-container">
                            <span className="about-bio">
                                <h1>
                                    hello
                                   <span className="wave">  👋</span>
                                </h1>
                                <div className="my-story">
                                    <p> I am an aspiring UX designer based in 📍Waterloo.</p>

                                    <p>I am looking for opportunities in Winter 2020 to build my knowledge in product and design, so feel free to connect with me! </p>
                                </div>
                            </span>
                        </Col>
                    </Row>
                </Container>

            </div>

        )
    }
}

export default About;