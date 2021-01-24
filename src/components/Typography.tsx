import { createGlobalStyle } from 'styled-components'
import font from '../assets/fonts/euclidcircularb.woff'

const Typography = createGlobalStyle`
  @font-face {
    font-family: EuclidCircularB;
    src: url(${font});
  }
  html {
    font-family: EuclidCircularB, sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  .center {
    text-align: center;
  }
`

export default Typography
