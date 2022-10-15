import React from 'react'
import "./ten.scss";
import { Search, Handshake, VerifiedUser } from '@mui/icons-material';

export default function Ten() {
  return (
    <div className='ten' id="about us">
<div className="wahid">
<img src="https://firebasestorage.googleapis.com/v0/b/coffee-b91b2.appspot.com/o/coffe%2FIMG_6166.JPG?alt=media&token=3d47a4c2-43d3-4d1c-8462-67c9972fef79" alt="" />
</div>
     
      <div className="tilte">
        <h2>
        Principles
        </h2>
        <span>
        We will attend to you and your interests without fault and vow to serve you with the integrity that befits you!
        </span>
      </div>
      <div className="attributes">
        <div className="single">
          <div className="icon">
          <Search style={{height: 40, width: 100}} />
          </div>
          <h2>
          Diligence
          </h2>
          <span>We are motivated to keep following up on issues that are of value to you until you find the results you need.</span>
        </div>
        <div className="single">
          <div className="icon">
<VerifiedUser style={{height: 40, width: 100}}/>
          </div>
          <h2>
          Integrity
          </h2>
          <span>We will attend to you and your interests with out fault and vow to serve you with the integrity that befits you!</span>
        </div>
        <div className="single">
          <div className="icon">
            <Handshake style={{height: 40, width: 100}}/>
          </div>
          <h2>
          Good- faith
          </h2>
          <span>We understand that trust is not something appears overnight. That is why we vow to start working on your business interests with the utmost good faith!</span>
        </div>
      </div>
    </div>
  )
}