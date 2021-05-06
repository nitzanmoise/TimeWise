import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Appbar, Button, Container } from "muicss/react";
import M from 'materialize-css';



function Home() {
  //  let s1 = {verticalAlign: 'middle'};
  //   let s2 = {textAlign: 'right'};
  return (
    
    <div className="Home">
      {/* <nav>
        <ul>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/requests">Requests</Link>
          </li>
        </ul>
      </nav> */}
     
{/* <div calsssName="">
 <div className="navbar">
    <nav>
      <div className="nav-wrapper">
        <div className="brand-logo"><i className="large material-icons">menu</i></div>
        <ul className="right hide-on-med-and-down">
          <li><i className="large material-icons sms">sms</i></li>
          <li><i className="large material-icons notification">notifications_none</i></li>
          <li><i className="large material-icons search">search</i></li>
          
        </ul>
      </div>
    </nav>
  </div>
  </div> */}

<nav>
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo">Logo</a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>

   
      {/* <Appbar>
       <table width="100%">
         <tbody>
            <tr class="mui--appbar-height">
      <td class="mui--text-title burger"><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="white"/>
</svg>
</td>
      <td class="mui--text-right">
        <ul class="mui-list--inline mui--text-body2">
          <li><svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.14623 20.0507C3.79508 17.773 3.3219 15.0804 3.81553 12.4785C4.30917 9.87663 5.73566 7.54443 7.82715 5.91986C9.91864 4.29529 12.5312 3.49011 15.1744 3.65551C17.8175 3.82091 20.3094 4.94552 22.182 6.81815C24.0547 8.69079 25.1793 11.1826 25.3447 13.8258C25.5101 16.4689 24.7049 19.0815 23.0804 21.173C21.4558 23.2645 19.1236 24.691 16.5217 25.1847C13.9198 25.6783 11.2272 25.2051 8.9495 23.854L8.94953 23.8539L5.19351 24.927C5.03811 24.9714 4.87367 24.9735 4.71722 24.9329C4.56077 24.8924 4.41801 24.8108 4.30372 24.6965C4.18944 24.5822 4.1078 24.4394 4.06726 24.283C4.02672 24.1265 4.02876 23.9621 4.07316 23.8067L5.14631 20.0507L5.14623 20.0507Z" stroke="white" stroke-opacity="0.78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 15.8594C15.2508 15.8594 15.8594 15.2508 15.8594 14.5C15.8594 13.7492 15.2508 13.1406 14.5 13.1406C13.7492 13.1406 13.1406 13.7492 13.1406 14.5C13.1406 15.2508 13.7492 15.8594 14.5 15.8594Z" fill="white"/>
<path d="M9.0625 15.8594C9.81326 15.8594 10.4219 15.2508 10.4219 14.5C10.4219 13.7492 9.81326 13.1406 9.0625 13.1406C8.31174 13.1406 7.70312 13.7492 7.70312 14.5C7.70312 15.2508 8.31174 15.8594 9.0625 15.8594Z" fill="white"/>
<path d="M19.9375 15.8594C20.6883 15.8594 21.2969 15.2508 21.2969 14.5C21.2969 13.7492 20.6883 13.1406 19.9375 13.1406C19.1867 13.1406 18.5781 13.7492 18.5781 14.5C18.5781 15.2508 19.1867 15.8594 19.9375 15.8594Z" fill="white"/>
</svg>
</li>
          <li><svg width="25" height="34" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 33C13.1 33 13.99 32.11 13.99 31.01H10.01C10.01 32.11 10.9 33 12 33ZM19 27V21C19 17.65 16.64 14.85 13.5 14.17V13C13.5 12.17 12.83 11.5 12 11.5C11.17 11.5 10.5 12.17 10.5 13V14.17C7.36 14.85 5 17.65 5 21V27L3 29V30H21V29L19 27ZM13 26H11V24H13V26ZM13 22H11V18H13V22Z" fill="white" fill-opacity="0.75"/>
<path d="M24.4824 12H18.6348V10.8398L21.3945 7.89844C21.7734 7.48438 22.0527 7.12305 22.2324 6.81445C22.416 6.50586 22.5078 6.21289 22.5078 5.93555C22.5078 5.55664 22.4121 5.25977 22.2207 5.04492C22.0293 4.82617 21.7559 4.7168 21.4004 4.7168C21.0176 4.7168 20.7148 4.84961 20.4922 5.11523C20.2734 5.37695 20.1641 5.72266 20.1641 6.15234H18.4648C18.4648 5.63281 18.5879 5.1582 18.834 4.72852C19.084 4.29883 19.4355 3.96289 19.8887 3.7207C20.3418 3.47461 20.8555 3.35156 21.4297 3.35156C22.3086 3.35156 22.9902 3.5625 23.4746 3.98438C23.9629 4.40625 24.207 5.00195 24.207 5.77148C24.207 6.19336 24.0977 6.62305 23.8789 7.06055C23.6602 7.49805 23.2852 8.00781 22.7539 8.58984L20.8145 10.6348H24.4824V12Z" fill="#FF9393"/>
</svg>
</li>
          <li><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="white" fill-opacity="0.74"/>
</svg>

</li>
        </ul>
      </td>
    </tr>
         </tbody>
       </table>
      </Appbar> */}
  
    </div>
  );
}

export default Home;
