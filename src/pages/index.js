import React from 'react';
import clsx from 'clsx';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from "@docusaurus/useBaseUrl";

import Layout from '@theme/Layout';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Socials from '@site/src/components/Socials';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    //<header className={clsx('hero hero --primary', styles.heroBanner)}>
    <header className={clsx(styles.heroBanner)}>
      <div class="container">
        <img src="https://avatars.githubusercontent.com/u/26019782?v=4" style={{ width: 280, borderRadius: '50%', }} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Socials />
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/helloReact">
            My Projects
          </Link>
        </div> */}
      </div>
      {/* <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div> */}
    </header>
  );
}

export default function Home() {
  //const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Wheremyfiji portfolio home page">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}

        {/* <div className={styles.aboutHeader}>
          <h2 className="border-0 border-b-4 border-solid border-success">SibOil Enjoyer</h2>
        </div> */}

        {/* <div className={styles.about}>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/test.jpg")}
            />
          </div>
          <div class={styles.aboutText}>
            <h2>Hi</h2>
            <p>
              I am Evan, a Full Stack Software Engineer and Certified Cloud
              Engineer based in Singapore.
            </p>
            <p>
              🚀 I love building cool and meaningful things with tech like {" "}
              <Link to={useBaseUrl("projects/")}>
                websites, applications or games
              </Link>
              .
            </p>
            <p>
              🌏 To me, coding is the closest thing to magic we have on Earth.
            </p>
            <p>
              👨‍💻 I have been writing beautiful code at <a href="https://padlet.com">Padlet</a>{" "}
              since 2021.
            </p>
            <p>
              🎒 I was a{" "}
              <a href="https://www.comp.nus.edu.sg/programmes/ug/cs/">
                Computer Science major
              </a>{" "}
              at the{" "}
              <a href="https://www.comp.nus.edu.sg/">
                National University of Singapore
              </a>{" "}
              from 2017 to 2020.
            </p>
            <p>
              🧑‍🏫 Back then, I was a{" "}
              <a href="https://github.com/DigiPie/CS1010-Tutorial-C09">
                Teaching Assistant
              </a>{" "}
              for Programming Methodology and Networking courses.
            </p>
            <p>
              🛼 I was also Deputy Head of
              Technology for the{" "}
              <a href="https://dscnustech.github.io/">
                NUS Google Developer Student Club
              </a>
              , and President of the{" "}
              <a href="https://www.instagram.com/nusskating/">
                NUS Skating Club
              </a>
              .
            </p>
          </div>
        </div> */}

        {/* <section className={styles.directory}>
          <div className="container">
            <h3>Continue exploring?</h3>
            <nav className="pagination-nav">
              <div className="pagination-nav__item">
                <Link className="pagination-nav__link" to={useBaseUrl("blog/")}>
                  <div className="pagination-nav__sublabel">Read</div>
                  <div className="pagination-nav__label">My blog</div>
                </Link>
              </div>
              <div className="pagination-nav__item pagination-nav__item--next">
                <Link className="pagination-nav__link" to={useBaseUrl("docs/")}>
                  <div className="pagination-nav__sublabel">Refer to</div>
                  <div className="pagination-nav__label">My docs</div>
                </Link>
              </div>
            </nav>
            <nav className="pt-4 pagination-nav">
              <div className="pagination-nav__item">
                <Link
                  className="pagination-nav__link"
                  to={useBaseUrl("projects/")}
                >
                  <div className="pagination-nav__sublabel">Check out</div>
                  <div className="pagination-nav__label">My projects</div>
                </Link>
              </div>
              <div className="pagination-nav__item pagination-nav__item--next">
                <a
                  className="pagination-nav__link"
                  href={useBaseUrl("pdf/resume.pdf")}
                >
                  <div className="pagination-nav__sublabel">Download</div>
                  <div className="pagination-nav__label">My resume</div>
                </a>
              </div>
            </nav>
          </div>
        </section> */}

      </main>



    </Layout>
  );
}
