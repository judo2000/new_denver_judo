import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Helmet } from 'react-helmet-async';
import parse from 'html-react-parser';
import MoreLessText from '../components/MoreLessText';
import GMap from '../components/Map';
import {
  GET_HEAD_INSTRUCTORS,
  GET_INSTRUCTORS_BY_TYPE,
} from '../utils/queries';

const AboutScreen = (props) => {
  const { loading, data } = useQuery(GET_HEAD_INSTRUCTORS, {
    variables: { instructorType: 'headInstructor' },
  });

  const headInstData = data?.headInstructors || {};

  const { loading: assistInstLoading, data: assistInstData } = useQuery(
    GET_INSTRUCTORS_BY_TYPE,
    {
      variables: { instructorType: 'assistantInstructor' },
    }
  );

  const assistantInst = assistInstData?.instructorsByType || {};

  const { loading: otherInstLoading, data: otherInstData } = useQuery(
    GET_INSTRUCTORS_BY_TYPE,
    {
      variables: { instructorType: 'other' },
    }
  );

  const otherInst = otherInstData?.instructorsByType || {};
  let first4;
  let second3;
  let third3;

  if (!otherInstLoading) {
    const otherCount = otherInst.length;
    first4 = otherInst.slice(0, 4);
    console.log(otherInst.length);
    second3 = otherInst.slice(4, 7);
    third3 = otherInst.slice(7, 9);
  }

  return loading || assistInstLoading || otherInstLoading ? (
    'loading...'
  ) : (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>

      <section id="about-judo-heading" className="mt-4">
        <div className="cap-heading text-center">
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
                <Col sm={12} md={6} className="ps-2 py-3 section-text">
                  <div className="ms-4">
                    <h2 className="section-heading ">The Gentle Way</h2>
                    <span className="">
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
              <Row className="pt-5 ">
                <Col sm={12} md={6} className="ps-2 py-3 section-text">
                  <div className="ms-4">
                    <h2 className="section-heading ">Our Club</h2>
                    <span className="">
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
                      style={{ width: '300px', height: '214px' }}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>

      <section
        id="senseis"
        className="px-4 pt-3 mb-4 senseis section-text text-white"
      >
        <h2 className="cap-heading text-center">Meet Our Senseis</h2>
        <div className="pb-4">
          {headInstData.map((inst, index) => (
            <div key={inst._id}>
              <Row className="justify-content-center">
                <Col lg={10} className="p-3 ">
                  <img
                    className="p-2 home-about-img img-fluid responsive"
                    src={`assets/img/${inst.instructorImage}`}
                    alt={inst.instructorName}
                    style={{
                      float: `${index % 2 === 0 ? 'left' : 'right'}`,
                      maxWidth: '184px',
                      maxHeight: '250px',
                    }}
                  />
                  {inst.instructorName}
                  <br />
                  {inst.instructorRank}
                  <br />
                  <br />
                  <MoreLessText>{parse(inst.instructorBio)}</MoreLessText>
                </Col>
              </Row>
              <div className="text-center">
                <img src="assets/img/divider_white.png" alt="divider" />
              </div>
            </div>
          ))}
          <Row className="d-flex justify-content-center">
            <Col lg={8}>
              <Row className="d-flex justify-content-center">
                {assistantInst.map((assistInst) => (
                  <Col lg={4} className="p-3" key={assistInst._id}>
                    <strong>{assistInst.instructorName}</strong>
                    <br />
                    <img
                      src={`assets/img/${assistInst.instructorImage}`}
                      alt={assistInst.instructorName}
                      style={{
                        maxWidth: '184px',
                        maxHeight: '250px',
                      }}
                    />
                    <MoreLessText>
                      {parse(assistInst.instructorBio)}
                    </MoreLessText>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          <div className="text-center">
            <img src="assets/img/divider_white.png" alt="divider" />
          </div>

          <h2 className="ms-4 cap-heading pt-4 text-center">Other Yudansha</h2>

          <Row className="d-flex justify-content-center section-sub-text">
            <Col lg={2} className="p-3">
              {first4.map((first) => (
                <div key={first._id}>
                  <strong>{first.instructorName}</strong>
                  <br />
                  {first.instructorRank}
                  <br />
                  <br />
                </div>
              ))}
            </Col>
            <Col lg={2} className="p-3">
              {second3.map((second) => (
                <div key={second._id}>
                  <strong>{second.instructorName}</strong>
                  <br />
                  {second.instructorRank}
                  <br />
                  <br />
                </div>
              ))}
            </Col>
            <Col lg={2} className="p-3">
              {third3.map((third) => (
                <div key={third._id}>
                  <strong>{third.instructorName}</strong>
                  <br />
                  {third.instructorRank}
                  <br />
                  <br />
                </div>
              ))}
            </Col>
          </Row>

          <Row className="d-flex justify-content-center section-sub-text"></Row>
          <Row className="d-flex justify-content-center section-sub-text">
            <Col lg={2} className="p-3">
              <strong>Jim Carmer</strong>
              <br />
              5th degree black belt
              <br />
              <br />
              <strong>Tracy Crawford</strong>
              <br />
              5th degree black belt
              <br />
              <br />
              <strong>Jessica Lockfeld</strong>
              <br />
              4th degree black belt
              <br />
              <br />
              <strong>Megan Post</strong>
              <br />
              3rd degree black belt
            </Col>
            <Col lg={2} className="p-3 section-sub-text text-white">
              <strong>Dave Wises</strong>
              <br /> 2nd degree black belt
              <br />
              <br />
              <strong>Ryan Joness</strong>
              <br /> 2nd degree black belt
              <br />
              <br />
              <strong>Jason Falcones</strong>
              <br /> 2nd degree black belt
            </Col>
            <Col lg={2} className="p-3 section-sub-text text-white">
              <strong>Steeve Alvaro</strong>
              <br /> 2nd degree black belt
              <br />
              <br />
              <strong>Carlos Rivera</strong>
              <br /> 1st degree black belt
              <br />
              <br />
              <strong>Hisashi Araya-Kjeseth</strong>
              <br /> 1st degree black belt
            </Col>
            <Col lg={2} className="p-3 section-sub-text text-white">
              <strong>Nobuo Yagai</strong>
              <br /> 1st degree black belt
              <br />
              <br />
              <strong>Garmaa Shinebayar</strong>
              <br /> 1st degree black belt
              <br />
              <br />
              <strong>Jeremy Goodwin 1st</strong>
              <br /> degree black belt
            </Col>
          </Row>
        </div>
      </section>

      <section id="map" className="mx-4 px-4">
        <h2>Our Location</h2>
        We are located at 719 Mariposa St, Denver, CO 80204
        <GMap />
      </section>
    </div>
  );
};

export default AboutScreen;
