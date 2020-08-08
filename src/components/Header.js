import React from 'react'
import Date from './DateTime';
import Hour from './Hour';
import '../style/Header.scss'

export default function Header() {
    return (
      <section className="News-Header">
        <div className="News-Header-Hour">
          <Date />
        </div>
        <div className="News-Header-Date">
          <Hour />
        </div>
        <div className="News-Header-Title">The News</div>
        <div className="News-Header-Sign">Sign In</div>
        <div className="News-Header-Subscribe">
          <p>Subscribe</p>
        </div>
      </section>
    );
}
