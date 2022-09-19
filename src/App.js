import logo from './logo.svg';
import './App.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset, List, ListItem, Divider, Desktop, Window, WindowContent, Cutout } from 'react95';

import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import CustomAppBar from './CustomAppBar';
import WelcomeWindow from './WelcomeWindow';
import ProgressWindow from './ProgressWindow';
import { QrReader } from 'react-qr-reader';
import QR from './QR';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
    background: rgb(0, 128, 128);
  }
  .window {
    width: 350px;
    min-height: 200px;
  }
  .window-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .close-icon {
    width: 16px;
    height: 16px;
    font-weight: bold;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <CustomAppBar/>
        <WelcomeWindow />
        <ProgressWindow />
        
        <Window style={{ position: 'absolute', top: 0, left: 0 }}>
          <WindowContent>
            <Cutout style={{ width: 300, height: 300}}>
              <div>
                <QR />
              </div>
            </Cutout>
          </WindowContent>
        </Window>
        
      </ThemeProvider>
    </div>
  );
}

export default App;
