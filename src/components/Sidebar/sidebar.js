import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () =>{
  const items =  [
    {
      text: 'About',
      link: '/about'
    },
    {
      text: 'Experience',
      link: '/experience'
    },
    {
      text: 'Education',
      link: '/education'
    },
    {
      text: 'Skills',
      link: '/skills'
    },
    {
      text: 'Interests',
      link: '/interests'
    },
    {
      text: 'Awards',
      link: '/awards'
    }
  ]


const showItems = () =>{
  return items.map((item,i)=>{
    return(

        <li key={i} className="nav-item">
          <Link className="nav-link js-scroll-trigger" to={item.link}>{item.text}</Link>
        </li>

    )
  })
}
return(
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a className="navbar-brand js-scroll-trigger" href="#page-top">
      <span className="d-block d-lg-none">Clsarence Taylor</span>
      <span className="d-none d-lg-block">
        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/mbuso.png" alt="" />
      </span>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      {showItems()}
      </ul>
    </div>
  </nav>
)
}
export default Sidebar;
