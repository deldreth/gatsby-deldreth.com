import React from 'react';

import { graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'emotion-theming';
import styled from 'react-emotion';
import { rhythm } from '../utils/typography';

import Layout from '../components/layouts/post';
import Grid from '../components/layouts/grid';
import theme from '../utils/theme';
import Post from '../components/post';

export default function Melon(props) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Helmet>
          <title>About me</title>
        </Helmet>
        <h1>About me, Devin Eldreth</h1>
        <p>
          <Img src="http://github.com/deldreth.png" height={128} />
          I'm a father, husband, and front end software developer. I also have a
          penchant for watermelon iconography (and sometimes the fruiting bodies
          of citrullus lanatus). I've been developing software and web
          applications for {new Date().getFullYear() - 2004} years. As a result
          I've worked on a lot of different things over the years, but my focus
          has always been web development (currently React, even). If you're
          super interested in my work then I suggest checking out some of my
          more interesting open source projects.
        </p>
        <h2>Current position</h2>
        Senior Full Stack Developer at{' '}
        <a href="https://www.fireflyxd.com/" target="_blank">
          Firefly XD
        </a>
        , where I lead the engineering processes. Moving the company forward.
        {/* <h3>The Sacred Doorway</h3> */}
      </Layout>
    </ThemeProvider>
  );
}

const Img = styled('img')`
  margin: 0 ${rhythm(1)} 0 0;
  border-radius: ${rhythm(1)};
  float: left;
`;
