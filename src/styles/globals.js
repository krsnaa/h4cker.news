import { injectGlobal } from 'styled-components';

const setGlobalStyles = () =>
  injectGlobal`
    * {
      box-sizing: border-box;
    }

    html, body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;      
      overflow-x: hidden;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    a {
      text-decoration: none;

      &:visited {
        color: inherit;
      }
    }
  `;

export default setGlobalStyles;
