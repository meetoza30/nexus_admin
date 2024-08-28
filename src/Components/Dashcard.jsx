import React from "react";
import './Dashcard.css';
// import img1 from '../assets/Addppatient.png'
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

function Dashcard({cardname, img}) {
  const [imgSrc, setimgSrc] = useState(null);
  useEffect(()=>{
    import(`../assets/${img}.png`)
    .then(img=>setimgSrc(img.default))
    .catch(err=>console.error(err));
  }, [img])

    return (
        <>
            <div className="ag-courses_box">
                <div className="ag-courses_item">
                    <Link to={`/${img}`} className="ag-courses-item_link" >
                        <div className="ag-courses-item_bg" >
                           
                        </div>
                        <img src={imgSrc} alt="Top-right icon" className="ag-courses-item_image" />
                        <h1 id="cardname">{cardname}</h1>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Dashcard;
