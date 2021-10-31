import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Pin from './images/Logo.png';
import ReactDOM from 'react-dom';
import App from '../App'; //This is hella important to view it

function Land() {

    const returnmain = () => {
        ReactDOM.render(<App />, document.getElementById('root'));
    }

    return (
        <>
            <div class="img-with-text">
                <img src={Pin} style={{ width: "50px", height: "50px", paddingLeft: "20px" }} />
                <h4 style={{ fontSize: "20px", fontFamily: "Roboto", fontWeight: "bold", paddingLeft: "5px" }}>Clipboard</h4>
            </div>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
                {/* <DrawerHeader /> */}
                < Typography paragraph style={{ fontWeight: "bold", fontSize: "40px", fontFamily: "Roboto", textAlign: "center", color: "#E42346" }}>
                    Compile everything.

                </Typography>
                <Typography paragraph style={{ fontWeight: "bold", fontSize: "20px", fontFamily: "Roboto", textAlign: "center", color: "#E42346" }}>

                    Even if its a simple note
                </Typography>
                <Typography paragraph style={{ fontSize: "20px", fontFamily: "Roboto", textAlign: "center", color: "#E42346" }}>
                    What is PinBoard you ask?
                    It’s a hyper effective planner for your daily needs.
                    <br />What are you waiting for, get registered now!
                </Typography>
                <div style={{ paddingTop: "100px", textAlign: "center" }}>
                    <button onClick={returnmain} style={{ fontSize: "20px", borderRadius: "10px", height: "50px", width: "300px", backgroundColor: "#0D0C1D", Left: "200px", color: "#FFFFFF" }}>Let's get started</button>
                </div>
            </Box>

            {/* Need to modify the contents of the actual navbar*/}
            <div class="navbar" style={{
                position: "fixed",
                overflow: "hidden",
                backgroundColor: "#0D0C1D",
                position: "fixed",
                bottom: 0,
                width: "100%",
                marginLeft: "-8px",
            }}>
                <p style={{ paddingLeft: "85%", fontWeight: "bold", fontSize: "20px", fontFamily: "Roboto", color: "#E42346", float: "Left" }}> About us &emsp;</p>

            </div >

        </>
    );
}

export default Land;