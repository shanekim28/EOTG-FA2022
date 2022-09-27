import logo from './logo.svg';
import './App.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset, List, ListItem, Divider, Desktop, Window, WindowContent, Cutout, WindowHeader, Button } from 'react95';

import original, { progress } from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import CustomAppBar from './CustomAppBar';
import WelcomeWindow from './WelcomeWindow';
import ProgressWindow from './ProgressWindow';
import Html5QrcodePlugin from './Scanner';
import React from 'react';
import Scanner from './Scanner';

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
  const [welcomeOpen, setWelcomeOpen] = React.useState(true);
  const [progressOpen, setProgressOpen] = React.useState(false);
  const [qrText, setQrText] = React.useState("");
  const [scannerOpen, setScannerOpen] = React.useState(false);

  const toggleWelcomeWindow = (isOpen) => {
    setWelcomeOpen(isOpen);
  }

  const toggleProgressWindow = (isOpen) => {
    setProgressOpen(isOpen);
  }

  const openScanner = () => {
    setScannerOpen(true);
  }

  const closeScanner = () => {
    setScannerOpen(false);
  }

  const onQrTextChanged = (newText) => {
    setQrText(newText);
  }

    return (
      <div className="App">
        <GlobalStyles />
        <ThemeProvider theme={original}>
          <CustomAppBar toggleProgressWindow={toggleProgressWindow} toggleWelcomeWindow={toggleWelcomeWindow} />
          {welcomeOpen && (<WelcomeWindow toggleWelcomeWindow={toggleWelcomeWindow} />)}
          {progressOpen && (<ProgressWindow toggleProgressWindow={toggleProgressWindow} resetQrText={() => setQrText("")} qrText={qrText} onOpenQr={openScanner} onCloseQr={closeScanner} />)}
        
          {scannerOpen && (<Scanner textChanged={onQrTextChanged} onClose={closeScanner}/>)}
        
        </ThemeProvider>
      </div>
    );
  }

export default App;
