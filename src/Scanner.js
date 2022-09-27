// Html5QrcodePlugin.jsx

import { Html5Qrcode } from "html5-qrcode";
import React, { useEffect } from 'react';
import { Window, WindowHeader, WindowContent, Cutout, Button } from "react95";

const qrcodeRegionId = "reader";

const Scanner = ({ onClose, textChanged }) => {

    useEffect(() => {
        const reader = new Html5Qrcode(qrcodeRegionId);
        reader.start(
            { facingMode: "environment" },
            {
                fps: 5,
                qrbox: { width: 300, height: 300}
            },
            (decodedText, decodedResult) => {
                textChanged(decodedText);
                reader.stop();
                onClose();
            },
            (errorMessage) => {

            }
        ).catch((err) => {
            reader.stop();
        }); 
    });

    return (<Window style={{ zIndex: 1, position: 'absolute', left: '20px' }}>
        <WindowHeader className="window-header">
            <span>EOTG.exe</span>
            <Button onClick={() => {
                onClose();
            }}>
                <span className="close-icon">X</span>
            </Button>
        </WindowHeader>
        <WindowContent>
                <Cutout style={{ width: 300, height: 300 }}>
                    <div id={qrcodeRegionId} />
                </Cutout>
        </WindowContent>
    </Window>);
}

export default Scanner;