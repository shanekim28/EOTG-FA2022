import React from "react";
import { AppBar, Button, Toolbar, List, ListItem } from "react95";

import startLogo from './windows95.png';

function CustomAppBar() {
    const [open, setOpen] = React.useState(false);

    return (
        <AppBar>
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <Button
                        onClick={() => setOpen(!open)}
                        active={open}
                        style={{ fontWeight: 'bold' }}>
                        <img src={startLogo}
                            alt='Windows 95 logo'
                            style={{ height: '20px', marginRight: 4}} />
                        Start
                    </Button>
                    {open && (
                        <List style={{
                            position: 'absolute',
                            left: '0',
                            top: '100%'
                        }}
                        onClick={() => setOpen(false)}>
                            <ListItem>
                                Progress
                            </ListItem>
                            <ListItem>
                                About 
                            </ListItem>
                        </List>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default CustomAppBar;