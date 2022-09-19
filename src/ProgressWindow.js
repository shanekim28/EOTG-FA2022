import React, { useState } from "react";
import { Button, Fieldset, Progress, Tab, TabBody, Tabs, Window, WindowContent, WindowHeader } from "react95";

function ProgressWindow() {
    const [state, setState] = useState({ activeTab: 0 });
    const handleChange = (e, value) => setState({ activeTab: value });
    const { activeTab } = state;
    const [open, setOpen] = React.useState(true);

    if (open)
    return (
        <Window className="window" style={{ left: '20px' }}>
            <WindowHeader className="window-header">
                <span>progress.exe</span>
                <Button onClick={() => setOpen(false)}>
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
                                    <p style={{ textAlign: 'left', padding: '0.5em 0 0.5em 0' }}>Visit 5 orgs with a robot:</p>
                                    <Progress variant='tile' value={80}  />
                                    <Button style={{ margin: '1em 0 0 0'}}>Scan QR Code</Button>
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
                                    <p style={{ textAlign: 'left', padding: '0.5em 0 0.5em 0' }}>Speak to 10 orgs:</p>
                                    <Progress variant='tile' value={80}  />
                                    <Button style={{ margin: '1em 0 0 0'}}>Scan QR Code</Button>
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