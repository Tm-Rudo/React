import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { List, Nav, NavItem } from 'reactstrap';
import { CloseButton } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const MainPage = () => {
    return (

        <div className="main">

            <div className="header">
                    <div className="header">
                        <div className=" p-5">
                        <CloseButton variant="white" className='btn-x'/>
                        </div>
                    </div>
                </div>

            <div className="menu">
                <div className="menu-1">
                <List>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/country'>Country</Link>
                    </li>
                </List>
                </div>
            </div>
        </div>
    );
};

export default MainPage;