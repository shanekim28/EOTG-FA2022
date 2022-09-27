import React from "react";
import { Button, Panel, Window, WindowContent, WindowHeader } from "react95";

const WelcomeWindow = ({toggleWelcomeWindow}) => {
    return (
        <>
            <Window className="window" style={{ top: '150px' }} >
                <WindowHeader className="window-header">
                    <span>EOTG.exe</span>
                    <Button onClick={() => toggleWelcomeWindow(false)}>
                        <span className="close-icon">X</span>
                    </Button>
                </WindowHeader>
                <WindowContent>
                    <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                        Welcome to EOTG Fall 2022!
                    </p>
                    <br />
                    <p style={{ textAlign: 'left' }}>Click the &quot;Start&quot; button to start tracking your progress. You're already well on your way to winning some awesome swag!</p>
                </WindowContent>
                <Panel variant='well' style={{ textAlign: 'left', width: '100%', marginBottom: 4, padding: '0px 4px 0px 4px' }}>
                    Sincerely, your friends at TESC :)
                </Panel>

            </Window>
        </>
    );
}

export default WelcomeWindow;