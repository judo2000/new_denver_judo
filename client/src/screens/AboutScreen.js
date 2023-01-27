import React from 'react';
import { useQuery } from '@apollo/client';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Helmet } from 'react-helmet-async';
import ReactReadMoreReadLess from 'react-read-more-read-less';
import GMap from '../components/Map';
import { GET_HEAD_INSTRUCTORS } from '../utils/queries';

const AboutScreen = () => {
  const { loading, data } = useQuery(GET_HEAD_INSTRUCTORS, {
    variables: { instructorType: 'headInstructor' },
  });

  const headInstData = data?.headInstructors || {};

  console.log(headInstData);
  loading
    ? console.log('loading...')
    : headInstData.map((h) => console.log(h.instructorName));
  //const senseiData = data?.content || {};

  //console.log(senseiData);
  return loading ? (
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
            <Row key={inst._id} className="justify-content-center">
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
              </Col>
            </Row>
          ))}
          <Row className="justify-content-center">
            <Col lg={10} className="p-3 ">
              <img
                className="p-2 home-about-img img-fluid responsive"
                src="assets/img/ScottMooreProfileNew.png"
                alt="Scott Moore"
                style={{ float: 'left', maxWidth: '184px', maxHeight: '250px' }}
              />
              <b>Scott Moore</b>
              <br />

              <p>
                Scott Moore began judo in 1988 under Sensei Connie Lavergne in
                Lafayette, Louisiana and currently holds the rank of rokudan, or
                6th degree black belt. He is the first American to win a gold
                medal in the Paralympic Games in 2000.
              </p>
              <p>
                He also won bronze medals in the 1996 and 2004 Paralympic Games.
                In addition, he was the IBSA World Judo Champion in 1998 and won
                a pair of World Championship bronze medals in 1995 and 2002. In
                2007 Scott retired from competition and was selected as the
                assistant coach for the 2008 Paralympic Team. In 2009 he became
                the head coach for the national visually impaired program and
                served as the head coach for the US Paralympic Judo team at the
                2012 Paralympic Games in London, England, 2016 Paralympic Games
                in Rio de Janeiro, Brazil, and the 2020 Paralympics in Tokyo,
                Japan. In 2009, Scott was selected by the US Olympic Committee
                as the Paralympic Coach of the Year.
              </p>
              <p>
                Scott became the head coach of Denver Judo in 1999. Expanding
                the club to include classes for children, beginners and
                competitive players, and opening classes to the visually
                impaired on a fully integrated basis, Scott has lead Denver Judo
                students to multiple medals at the national and international
                level.
              </p>
              <p>
                Scott is also a certified coach with USA Judo at the
                International “A” Level.
              </p>
            </Col>
          </Row>
          <div className="text-center">
            <img src="assets/img/divider_white.png" alt="divider" />
          </div>
          <Row className="justify-content-center">
            <Col lg={10} className="p-3 ">
              <img
                className="p-2 home-about-img img-fluid responsive"
                src="assets/img/HeidiMoore.png"
                alt="Scott Moore"
                style={{
                  float: 'right',
                  maxWidth: '184px',
                  maxHeight: '250px',
                }}
              />
              <b>Heidi Moore, LAT, ATC</b>
              <br />

              <p>
                Heidi started judo in 1986 in Santa Monica, California. She
                currently holds the rank of rokudan, or 6th degree black belt.
                Heidi has had competitive success at every stage of her career,
                medaling multiple times at national tournaments at the junior,
                high school, collegiate, senior, and masters levels. She has won
                11 medals at the USA Judo Senior National Championships. She
                represented the United States at the 2005 and 2007 World
                Championships and at the 2005, 2007 and 2008 Pan American
                Championships. She finished the 2007 Pan American Championships
                with a bronze medal.
              </p>
              <p>
                Heidi moved to Denver in 1999 and took over Denver Judo with her
                husband Scott. Through Scott, Heidi became involved in the US
                Paralympic judo program and has served as a coach for the
                national team many times, including serving as the assistant
                coach at the 2012 Paralympic Games in London, 2016 Paralympic
                Games in Rio de Janeiro, and the 2020ne Paralympics in Tokyo,
                Japan. Heidi serves as head instructor and executive director of
                Denver Judo and enjoys teaching the youth and senior competitive
                classes.
              </p>
              <p>
                Heidi is a Certified Athletic Trainer and an International “A”
                level coach with USA Judo, as well as current President of the
                Colorado Judo League.
              </p>
            </Col>
          </Row>
          <div className="text-center">
            <img src="assets/img/divider_white.png" alt="divider" />
          </div>
          <Row className="d-flex justify-content-around">
            <Col lg={3} className="p-3">
              <strong>Keith Lewis</strong>
              <br />
              <img
                src="assets/img/Keith.png"
                alt="Keith Lewis"
                style={{
                  maxWidth: '184px',
                  maxHeight: '250px',
                }}
              />
              <br />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt consectetur impedit, similique suscipit placeat odit
                error esse voluptatem magni veritatis! Voluptatibus iusto
                voluptas omnis illum quasi laboriosam sit dolorem esse repellat
                magnam provident alias, est vel ipsum odit inventore mollitia.
                Repellat quas doloremque veniam voluptatibus dignissimos
                molestias libero odio nisi.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus dicta voluptates error? Obcaecati dicta ducimus
                perferendis eligendi consequuntur quaerat accusamus quisquam
                sequi nesciunt in, officia reprehenderit voluptatibus nisi,
                ratione tempora. Nulla, sed consequuntur autem nobis adipisci
                voluptatum velit, modi dolore aliquid tempore saepe pariatur
                accusantium blanditiis aut nesciunt! Error, earum!
              </p>
            </Col>
            <Col lg={3} className="p-3">
              <strong>Alyssa Zawack</strong>
              <br />
              <img
                src="assets/img/Kedge_Alyssa.png"
                alt="Alyssa Zawack"
                style={{ maxWidth: '184px', maxHeight: '250px' }}
              />
              <br />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt consectetur impedit, similique suscipit placeat odit
                error esse voluptatem magni veritatis! Voluptatibus iusto
                voluptas omnis illum quasi laboriosam sit dolorem esse repellat
                magnam provident alias, est vel ipsum odit inventore mollitia.
                Repellat quas doloremque veniam voluptatibus dignissimos
                molestias libero odio nisi.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus dicta voluptates error? Obcaecati dicta ducimus
                perferendis eligendi consequuntur quaerat accusamus quisquam
                sequi nesciunt in, officia reprehenderit voluptatibus nisi,
                ratione tempora. Nulla, sed consequuntur autem nobis adipisci
                voluptatum velit, modi dolore aliquid tempore saepe pariatur
                accusantium blanditiis aut nesciunt! Error, earum!
              </p>
            </Col>
            <Col lg={3} className="p-3">
              <strong>Kedge Zawack</strong>
              <br />
              <img
                src="assets/img/Kedge_Alyssa.png"
                alt="Kedge Zawack"
                style={{ maxWidth: '184px', maxHeight: '250px' }}
              />
              <br />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt consectetur impedit, similique suscipit placeat odit
                error esse voluptatem magni veritatis! Voluptatibus iusto
                voluptas omnis illum quasi laboriosam sit dolorem esse repellat
                magnam provident alias, est vel ipsum odit inventore mollitia.
                Repellat quas doloremque veniam voluptatibus dignissimos
                molestias libero odio nisi.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus dicta voluptates error? Obcaecati dicta ducimus
                perferendis eligendi consequuntur quaerat accusamus quisquam
                sequi nesciunt in, officia reprehenderit voluptatibus nisi,
                ratione tempora. Nulla, sed consequuntur autem nobis adipisci
                voluptatum velit, modi dolore aliquid tempore saepe pariatur
                accusantium blanditiis aut nesciunt! Error, earum!
              </p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-around">
            <Col lg={4} className="p-3">
              <strong>Nikki Jones</strong>
              <br />
              <img
                src="assets/img/Nikki_Jones.png"
                alt="Nikki Jones"
                style={{ maxWidth: '184px', maxHeight: '250px' }}
              />
              <br />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt consectetur impedit, similique suscipit placeat odit
                error esse voluptatem magni veritatis! Voluptatibus iusto
                voluptas omnis illum quasi laboriosam sit dolorem esse repellat
                magnam provident alias, est vel ipsum odit inventore mollitia.
                Repellat quas doloremque veniam voluptatibus dignissimos
                molestias libero odio nisi.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus dicta voluptates error? Obcaecati dicta ducimus
                perferendis eligendi consequuntur quaerat accusamus quisquam
                sequi nesciunt in, officia reprehenderit voluptatibus nisi,
                ratione tempora. Nulla, sed consequuntur autem nobis adipisci
                voluptatum velit, modi dolore aliquid tempore saepe pariatur
                accusantium blanditiis aut nesciunt! Error, earum!
              </p>
            </Col>
            <Col lg={4} className="p-3">
              <strong>Sophia Teissler</strong>
              <br />
              <img
                src="assets/img/Sophia.png"
                alt="Sophia Teissler"
                style={{ maxWidth: '184px', maxHeight: '250px' }}
              />
              <br />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt consectetur impedit, similique suscipit placeat odit
                error esse voluptatem magni veritatis! Voluptatibus iusto
                voluptas omnis illum quasi laboriosam sit dolorem esse repellat
                magnam provident alias, est vel ipsum odit inventore mollitia.
                Repellat quas doloremque veniam voluptatibus dignissimos
                molestias libero odio nisi.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus dicta voluptates error? Obcaecati dicta ducimus
                perferendis eligendi consequuntur quaerat accusamus quisquam
                sequi nesciunt in, officia reprehenderit voluptatibus nisi,
                ratione tempora. Nulla, sed consequuntur autem nobis adipisci
                voluptatum velit, modi dolore aliquid tempore saepe pariatur
                accusantium blanditiis aut nesciunt! Error, earum!
              </p>
            </Col>
          </Row>
          <div className="text-center">
            <img src="assets/img/divider_white.png" alt="divider" />
          </div>
          <h2 className="ms-4 cap-heading pt-4text-center">Other Yudansha</h2>
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
