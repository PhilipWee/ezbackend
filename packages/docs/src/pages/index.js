import React from 'react';
import { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import clickhere from './clickhere.png'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

function HomepageHeader() {

  const [raise, setRaise] = useState(false);

  const { siteConfig } = useDocusaurusContext();
  return (
    <Grid container direction="row" justifyContent="center" alignItems="flex-start" style={{ padding: 48 }}>
      <Grid item xs={12} lg={5}>
        <h1 className="hero__title" style={{ fontSize: 64, fontFamily: "monospace", textAlign: "start" }}>
          Create a <span style={{ color: "#5396CE" }}>fully <br />
            extensible</span> backend in <br />
          <span style={{ color: "#5396CE" }}>2 lines</span> of code
        </h1>
        <p className="hero__title" style={{ fontSize: 28, textAlign: "start" }}>
          Backend development in one npm package <br /> Focus on the stuff that matters
        </p>
      </Grid>
      <Grid item style={{ marginRight: -48 }}>
        <Link to="/alpha-sign-up">
          <Button
            variant="contained"
            size="large"
            onMouseOver={() => setRaise(true)}
            onMouseOut={() => setRaise(false)}
            style={{
              padding: 12,
              backgroundColor: (!raise) ? "#5396CE" : "#fff",
              color: (!raise) ? "#003A2D" : "#5396CE",
              fontSize: 24,
              fontFamily: "monospace",
              fontWeight: "bold",
              width: 200
            }}>
            Alpha Signup
          </Button>
        </Link>
      </Grid>
      <Grid item>
        <Box width={400}>
          <img alt="clickhere" src={clickhere}/>
        </Box>
      </Grid>
    </Grid>
    // <header className={clsx('hero hero--primary-darkest', styles.heroBanner)} style={{ backgroundColor: "#18191a" }}>
    //   <div className="container">
    //     <h1 className="hero__title" style={{ fontSize: 64, fontFamily: "monospace", textAlign: "start" }}>Create a <span style={{ color: "#5396CE" }}>fully <br /> extensible</span> backend <br /> in <span style={{ color: "#5396CE" }}>2 lines</span> of code</h1>
    //   </div>
    //   <div className="container">
    //     <img alt="clickhere" src={clickhere} style={{width:300}} />
    //   </div>
    // </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Backend made easy">
      <br />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <br />
      </main>
    </Layout>
  );
}
