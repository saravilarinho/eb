import React from 'react';
import '../Styles.css';
import {Link} from 'react-router-dom'


function Navbar() {
    return (
        <div className={"row"}>
            <nav className={"navbar"}>
                <a >
                </a>
                <div>
                        <p><Link href="#">Movies</Link></p>
                        <p><Link href="#">TV Shows</Link></p>
                        <p><Link href="#">Books</Link></p>
                        <p><Link href="#">Music</Link></p>
                        <p><Link href="#">Log In/Sign In</Link></p>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
