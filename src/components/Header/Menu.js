import React, { Component } from 'react';
import './Header.css';

class Menu extends Component {
    render() {
        return (

            <ul className="nav flex-column p-0 " id="menu">
                <li className='nav-item'>
                    <a className="navbar-brand mt-2 mt-lg-0" href="#">
                        <img
                            src="https://play-lh.googleusercontent.com/0oH3J4rY4gf5pILGT_zNMRkdj78UK5lwrP9AxC3_wJ_goNEHmZlAwxAX3JS-7wEUuo8=w240-h480-rw"
                            // height="100" width="200"
                            className='img-fluid mx-auto d-block '
                            alt="MDB Logo"
                            loading="lazy"
                        />
                    </a>
                </li>
                <li className="nav-item mw-100 ">
                    <a className="nav-link w-100  active border-bottom hvr-bounce-to-right text-white text-center" href="#">Phim</a>
                </li>
                <li className="nav-item mw-100">
                    <a className="nav-link w-100 border-bottom  hvr-bounce-to-right text-white  text-center" href="#">Lịch chiếu phim</a>
                </li>
                <li className="nav-item mw-100">
                    <a className="nav-link w-100 border-bottom  hvr-bounce-to-right text-white  text-center" href="#">Vé đã đặt</a>
                </li>
            </ul>
        );
    }
}

export default Menu;