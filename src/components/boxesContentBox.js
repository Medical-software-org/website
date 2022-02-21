import React from 'react';
import {globalColors} from './colors';
import { Link } from "react-router-dom";

function boxesContentBox({heading, subHeading}) {
  return (
    <div className='center-container-row' style={{color: globalColors.blue}} >
        <h1>{heading}</h1>
        <h2>{subHeading}</h2>
        <div className='flex-container' >
            <div className='flex-item-left-border' >
                <Link style={{textDecoration: "none", color: "inherit"}} to="/privacy">
                    <div className='box' >
                        <h1>Privacy Policy</h1>
                        <i id='icon' class="fa fa-info-circle" ></i>
                    </div>
                </Link>
            </div>
            {/* <div className='flex-item-right-border' >
                <Link style={{textDecoration: "none", color: "inherit"}} to="/terms-of-use">
                    <div className='box' >
                        <h1>Terms of use</h1>
                        <i id='icon' class="fa fa-handshake-o" ></i>
                    </div>
                </Link>
            </div> */}
        </div>
    </div>
  );
}

export default boxesContentBox;
