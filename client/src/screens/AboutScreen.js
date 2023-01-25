import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Helmet } from 'react-helmet-async';
import ReadMoreAndLess from '../components/ReadMoreAndLess';

const AboutScreen = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>

      <section id="about-judo-heading" className="mt-4">
        <div className="text-center">
          <h1>Judo is a martial art, olympic sport, and way of life. </h1>
        </div>
      </section>

      <section id="about" className="about">
        <div className="">
          <Row className="mt-4 py-5 justify-content-center">
            <Col md={10}>
              <Row>
                <Col sm={12} md={6} className="ps-2 py-3">
                  <div className="ms-4 text-center">
                    <img
                      className="home-about-img img-fluid"
                      src="assets/img/Jigoro_Kano_and_Kyuzo_Mifune_(restoration)1.png"
                      alt="Kano"
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} className="ps-2 py-3">
                  <div className="ms-4">
                    <h2 className="section-heading text-black">
                      The Gentle Way
                    </h2>
                    <span className="section-text text-black">
                      <p>
                        Created in 1882 by Jigoro Kano, Judo Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </span>
                  </div>
                </Col>
              </Row>
              <Row className="py-5 ">
                <Col sm={12} md={6} className="ps-2 py-3">
                  <div className="ms-4">
                    <h2 className="section-heading text-black">Our Club</h2>
                    <span className="section-text text-black">
                      <p>
                        For more than 20 years, Denver Judo has been the premier
                        training club for competitive and recreational judoka.
                        The number one rule at Denver Judo is respect. We
                        facilitate a community of mutual respect and do not
                        allow any toxicity.
                      </p>
                      <p>
                        Denver Judo hosts two annual tournaments, the Denver
                        Classic and our spring tournament.
                      </p>
                    </span>
                  </div>
                </Col>
                <Col sm={12} md={6} className="ps-2 py-3">
                  <div className="ms-4 text-center">
                    <img
                      className="home-about-img img-fluid responsive"
                      src="assets/img/2016-Black-Belts-1024x731.png"
                      alt="Kano"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>

      <section id="senseis" className="px-4 mt-4 senseis">
        <h2 className="ms-4 cap-heading pt-4">Meet Our Senseis</h2>
        <div className="py-4">
          <Row>
            <Col className="p-3 section-text text-white">
              <img
                className="p-2 home-about-img img-fluid responsive"
                src="assets/img/ScottMooreProfileNew.png"
                alt="Scott Moore"
                style={{ float: 'left' }}
              />
              <b>Sensei Scott</b>
              <br />
              <ReadMoreAndLess>
                <p>
                  Scott Moore began judo in 1988 under Sensei Connie Lavergne in
                  Lafayette, Louisiana and currently holds the rank of rokudan,
                  or 6th degree black belt. He is the first American to win a
                  gold medal in the Paralympic Games in 2000.
                </p>
                <p>
                  He also won bronze medals in the 1996 and 2004 Paralympic
                  Games. In addition, he was the IBSA World Judo Champion in
                  1998 and won a pair of World Championship bronze medals in
                  1995 and 2002. In 2007 Scott retired from competition and was
                  selected as the assistant coach for the 2008 Paralympic Team.
                  In 2009 he became the head coach for the national visually
                  impaired program and served as the head coach for the US
                  Paralympic Judo team at the 2012 Paralympic Games in London,
                  England, 2016 Paralympic Games in Rio de Janeiro, Brazil, and
                  the 2020 Paralympics in Tokyo, Japan. In 2009, Scott was
                  selected by the US Olympic Committee as the Paralympic Coach
                  of the Year.
                </p>
                <p>
                  Scott became the head coach of Denver Judo in 1999. Expanding
                  the club to include classes for children, beginners and
                  competitive players, and opening classes to the visually
                  impaired on a fully integrated basis,  Scott has lead Denver
                  Judo students to multiple medals at the national and
                  international level.
                </p>
                <p>
                  Scott is also a certified coach with USA Judo at the
                  International “A” Level.
                </p>
              </ReadMoreAndLess>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default AboutScreen;
