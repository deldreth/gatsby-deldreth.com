import styled from 'react-emotion';

import { rhythm } from '../../utils/typography';

export default styled('div')`
  display: grid;
  grid-gap: ${rhythm(2)} 2%;

  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding: ${rhythm(3)} ${rhythm(1)};

  @media ${props => props.theme.media.sm} {
    grid-template-columns: repeat(2, 48%);
  }

  @media ${props => props.theme.media.md} {
    grid-template-columns: repeat(3, 31%);
  }

  @media ${props => props.theme.media.lg} {
    grid-template-columns: repeat(4, 23%);
  }
`;
