import React, { useState, useEffect } from "react";
import { Button, Fieldset, Progress, Tab, TabBody, Tabs, Window, WindowContent, WindowHeader } from "react95";
import Cookies from "universal-cookie";

const ProgressWindow = ({ toggleProgressWindow, onOpenQr, qrText, resetQrText }) => {
    const cookies = new Cookies();
    let snackVal = 0;
    let swagVal = 0;
    if (cookies.get("snackProgress") !== undefined) {
        snackVal = parseInt(cookies.get("snackProgress"));
    } else {
        cookies.set("snackProgress", 0, { path: '/' });
    }

    if (cookies.get("swagProgress") !== undefined) {
        swagVal = parseInt(cookies.get("swagProgress"));
    } else {
        cookies.set("swagProgress", 0, { path: '/' });
    }
    const [state, setState] = useState({ activeTab: 0 });
    const [snackProgress, setSnackProgress] = React.useState(snackVal);
    const [swagProgress, setSwagProgress] = React.useState(swagVal);
    const handleChange = (e, value) => setState({ activeTab: value });
    const { activeTab } = state;

    React.useEffect(() => {
        console.log(typeof (snackProgress));
        if (qrText === 'aSBsb3ZlIHRlc2Mh') {
            if (snackProgress < 7) {
                setSnackProgress(snackProgress + 1);
                cookies.set("snackProgress", snackProgress + 1, { path: '/' });
            }
            if (swagProgress < 15) {
                setSwagProgress(swagProgress + 1);
                cookies.set("swagProgress", swagProgress + 1, { path: '/' });
            }
        }

        resetQrText();
    }, [qrText]);

    return (
        <Window className="window" style={{ left: '20px' }}>
            <WindowHeader className="window-header">
                <span>progress.exe</span>
                <Button onClick={() => toggleProgressWindow(false)}>
                    <span className="close-icon">X</span>
                </Button>
            </WindowHeader>
            <WindowContent>
                <Tabs value={activeTab} onChange={handleChange}>
                    <Tab value={0}>Snacks</Tab>
                    <Tab value={1}>Swag</Tab>
                </Tabs>
                <TabBody style={{ height: 300}}>
                    {activeTab === 0 && (
                        <div>
                            <div>
                                <Fieldset label='Progress:'>
                                    <p style={{ textAlign: 'left', padding: '0.5em 0 0.5em 0' }}>Speak to 7 orgs:</p>
                                    <Progress value={Math.round((snackProgress / 7) * 100)}  />
                                    <Button style={{ margin: '1em 0 0 0' }} onClick={onOpenQr}>Scan QR Code</Button>
                                </Fieldset>
                            </div>
                            <br/>
                            <div style={{ padding: '0.5em 0 0.5em 0', display: 'flex', gap: 10 }}>
                                <p style={{ fontWeight: 'bold' }}>Reward: </p>
                                <p style={{fontWeight: 'normal', textAlign: 'left'}}>Get a free snack at the snack table!</p>
                            </div>
                        </div>
                    )}
                    {activeTab === 1 && (
                        <div>
                            <div>
                                <Fieldset label='Progress:'>
                                    <p style={{ textAlign: 'left', padding: '0.5em 0 0.5em 0' }}>Speak to 15 orgs:</p>
                                    <Progress value={Math.round((swagProgress / 15) * 100)}  />
                                    <Button style={{ margin: '1em 0 0 0'}} onClick={() => onOpenQr()}>Scan QR Code</Button>
                                </Fieldset>
                            </div>
                            <br/>
                            <div style={{ padding: '0.5em 0 0.5em 0', display: 'flex', gap: 10 }}>
                                <p style={{ fontWeight: 'bold' }}>Reward: </p>
                                <p style={{fontWeight: 'normal', textAlign: 'left'}}>Get some free swag at the swag table!</p>
                            </div>
                        </div>
                    )}
                </TabBody>
                
            </WindowContent>
        </Window>
    )
}

export default ProgressWindow;