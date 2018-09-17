import styled from 'react-emotion';

import { rhythm } from '../../utils/typography';

export default styled('div')`
  display: grid;
  grid-gap: ${rhythm(2)} ${rhythm(1)};

  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding: ${rhythm(3)} ${rhythm(1)};

  @media ${props => props.theme.media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${props => props.theme.media.md} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${props => props.theme.media.lg} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${props => props.theme.media.xxl} {
    max-width: 1900px;
    grid-template-columns: repeat(6, 1fr);
  }
`;
