import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../node_modules/video-react/dist/video-react.css';
import { Player } from 'video-react';
import video from '../assets/Denver-Judo-Splash-1080.mp4';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import GMap from '../components/Map';
import { useQuery } from '@apollo/client';
import { GET_KANO, GET_OUR_DOJO } from '../utils/queries';
import Loader from '../components/Loader';

const HomeScreen = () => {
  const { loading: dojoLoading, data } = useQuery(GET_OUR_DOJO, {
    variables: { page: 'home', section: 'ourDojo' },
  });

  const ourDojo = data?.ourDojo[0] || {};

  const { loading: kanoLoading, data: kanoData } = useQuery(GET_KANO, {
    variables: { page: 'home', section: 'kano' },
  });

  console.log(kanoData);
  const kano = kanoData?.kano[0] || {};

  (function (
    win,
    doc,
    zenJSHost,
    src,
    module,
    partitionApiKey,
    widgetInstanceId
  ) {
    win.zenplanner = win.zenplanner || {};
    win.zenplanner.directLoadArgs = win.zenplanner.directLoadArgs || [];
    var tryCount = 0,
      intervalId = null;
    function afterLoad() {
      if (
        win.zenplanner.directLoader !== undefined &&
        window.zenplanner.directLoader !== null
      ) {
        clearInterval(intervalId);
        for (var i = 0, l = win.zenplanner.directLoadArgs.length; l > i; i++) {
          if (
            win.zenplanner.directLoadArgs[i].widgetInstanceId ===
            widgetInstanceId
          ) {
            win.zenplanner.directLoader.loadWidget(
              zenJSHost,
              module,
              partitionApiKey,
              widgetInstanceId
            );
          }
        }
      } else if (tryCount++ > 200) {
        console.log('Zen Planner widget : ' + module + ', failed to load.');
        clearInterval(intervalId);
      }
    }
    if (
      win.zenplanner.directLoader === undefined ||
      win.zenplanner.directLoader === null
    ) {
      win.zenplanner.directLoadArgs.push({
        module: module,
        partitionApiKey: partitionApiKey,
        widgetInstanceId: widgetInstanceId,
      });
      var s = doc.createElement('script');
      s.async = 1;
      s.src = zenJSHost + '/' + src;
      doc.head.appendChild(s);
      intervalId = setInterval(afterLoad, 50);
    } else {
      win.zenplanner.directLoader.loadWidget(
        zenJSHost,
        module,
        partitionApiKey,
        widgetInstanceId
      );
    }
  })(
    window,
    document,
    'https://studio.zenplanner.com',
    'zenplanner/studio/target/zp-widget-direct.js',
    'freetrial',
    '6e318d86-ee75-4758-ab91-65e9ce00b105',
    '583f3707-bf52-41ea-8215-8213abeb0f83'
  );
  return (
    <>
      <section id="video" className="text-center">
        <div className="video-wrapper">
          <Player
            playsInline
            src={video}
            className="react-player"
            playing
            width="100%"
            height="100%"
            fluid={false}
            controls={false}
          />
        </div>
      </section>

      <section id="home-heading" className="my-4">
        <div className="text-center">
          <h1 className="cap-heading my-4 pt-2">
            Train for competition or self defence at Denver Judo
          </h1>
        </div>
      </section>

      <section className="classes my-4 p-4">
        <Row>
          <Col sm={12} md={6} lg={4} className="py-2">
            <div>
              <img
                src="assets/img/placeholder_217_175.png"
                className="class-image img-fluid rounded d-block p-2"
                alt="Judo Fundamentals"
              />
              <h3 className="home-section-heading">Judo Fundamentals</h3>
              <span className="home-section-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Assumenda eius hic fugit provident officia suscipit.{' '}
                <Link to="/">Learn more...</Link>
              </span>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} className="py-2">
            <div>
              <img
                src="assets/img/placeholder_217_175.png"
                className="class-image img-fluid rounded d-block p-2"
                alt="Judo Fundamentals"
              />
              <h3 className="home-section-heading">Competition Judo</h3>
              <span className="home-section-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
                amet. Voluptatum cupiditate magnam enim sunt!{' '}
                <Link to="/">Learn more...</Link>
              </span>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} className="py-2">
            <div>
              <img
                src="assets/img/placeholder_217_175.png"
                className="class-image img-fluid rounded d-block p-2"
                alt="Judo Fundamentals"
              />
              <h3 className="home-section-heading">Kids Judo</h3>
              <span className="home-section-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                cumque incidunt temporibus excepturi perspiciatis magni!{' '}
                <Link to="/">Learn more...</Link>
              </span>
            </div>
          </Col>
        </Row>
      </section>

      <section id="try-a-class" className="px-4 mt-4 try-a-class">
        <h2 className="ms-4 free-class-heading pt-4">TRY A FREE CLASS</h2>
        <div className="text-center py-4">
          <div id="freetrial_583f3707-bf52-41ea-8215-8213abeb0f83"></div>
        </div>
      </section>

      <section id="about-judo" className="home-about">
        <div className="pt-4">
          <Row className="mt-4 py-5 justify-content-center">
            <Col md={10}>
              <Row>
                <Col sm={12} md={6} className="ps-2 py-3">
                  <div className="ms-4 text-center">
                    <img
                      className="home-about-img img-fluid"
                      src="assets/img/kano.png"
                      alt="Kano"
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} className="ps-2 py-3">
                  <div className="ms-4">
                    {kanoLoading ? (
                      <Loader />
                    ) : (
                      <>
                        <h2 className="section-heading text-white">
                          {kano.contentHead}
                        </h2>
                        <span className="section-text text-white">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: kano.contentText,
                            }}
                          />
                        </span>
                      </>
                    )}
                  </div>
                </Col>
              </Row>

              <Row className="py-5 ">
                <Col sm={12} md={6} className="ps-2 py-3">
                  <div className="ms-4">
                    {kanoLoading ? (
                      <Loader />
                    ) : (
                      <>
                        <h2 className="section-heading text-white">
                          {ourDojo.contentHead}
                        </h2>
                        <span className="section-text text-white">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: ourDojo.contentText,
                            }}
                          />
                        </span>
                      </>
                    )}
                  </div>
                </Col>
                <Col sm={12} md={6} className="ps-2 py-3">
                  <div className="ms-4 text-center">
                    <img
                      className="home-about-img img-fluid"
                      src="assets/img/Den_Judo_Kayla_Harrison.jpg"
                      alt="Kano"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          )
        </div>
      </section>

      <section id="faq" className="mx-4 px-4 py-4">
        <div>
          <h2 className="home-sub-heading py-4">Frequently Asked Questions</h2>
        </div>
        <FAQ />
      </section>

      <section id="map" className="mx-4 px-4">
        <h2>Our Location</h2>
        We are located at 719 Mariposa St, Denver, CO 80204
        <GMap />
      </section>
    </>
  );
};

export default HomeScreen;
