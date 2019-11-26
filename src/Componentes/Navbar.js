import React from 'react';
import '../Styles.css';


function Navbar() {
    return (
        <div className={"row"}>
            <nav>
                <a href="#">
                </a>
                <div>
                    <ul>
                        <li><a href="#">Séries</a></li>
                        <li><a href="#">Filmes</a></li>
                        <li><a href="#">Iniciar Sessão</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
