import '../sass/navbar.scss';
import {useState} from 'react';
import DevLogo from '../logos/dev_logo.png';

export default function Navbar(props){

    const [homeActive, setHomeActive] = useState(false);
    const [playActive, setPlayActive] = useState(false);
    const [marketActive, setMarketActive] = useState(false);
    const [groupsActive, setGroupsActive] = useState(false);
    const [gamesActive, setGamesActive] = useState(false);

    function handleClick(val) {
        if(val === 'homeIcon'){
            setHomeActive(current => !current);
        };
        if(val === 'playIcon'){
            setPlayActive(current => !current);
        };
        if(val === 'marketIcon'){
            setMarketActive(current => !current);
        };
        if(val === 'groupsIcon'){
            setGroupsActive(current => !current);
        };
        if(val === 'gamesIcon'){
            setGamesActive(current => !current);
        };
    };

    return (
        
        <nav className={`frNavbar`}>

            <div className={`navbarLeftSection`}>
            <a className="" href="#"><img src={DevLogo} className={`frNavbarLogo`} alt="FREI:raum"/></a>
                <form className="" >
                    <input className={`navbarSEARCHBAR`} type="search" placeholder="FREI:raum durchsuchen" />
                    <button className={`navbarSEARCHBUTTON`} type="submit">Go</button>
                </form>
            </div>        

            <ul className={`navbarUL`}>

                <li className={`navbarMiddleLI`}>
                    <a className="nav-link active" href="#" title="Home"><i className={homeActive ? `bi bi-house-door-fill navbarICON homeIcon iconActive` : `bi bi-house-door navbarICON homeIcon`} onClick={()=> {handleClick('homeIcon')}}></i></a>
                </li>

                <li className={`navbarMiddleLI`}>
                    <a className="nav-link active" href="#" title="Play"><i className={playActive ? `bi bi-collection-play-fill navbarICON playIcon iconActive` : `bi bi-collection-play navbarICON playIcon`} onClick={()=> {handleClick('playIcon')}}></i></a>
                </li>

                <li className={`navbarMiddleLI`}>
                    <a className="nav-link active" href="#" title="Shop"><i className={marketActive ? `bi bi-shop navbarICON marketIcon iconActive` : `bi bi-shop navbarICON marketIcon`} onClick={()=> {handleClick('marketIcon')}}></i></a>
                </li>

                <li className={`navbarMiddleLI`}>
                    <a className="nav-link active" href="#" title="Gruppen"><i className={groupsActive ? `bi bi-people-fill navbarICON groupsIcon iconActive` : `bi bi-people navbarICON groupsIcon`} onClick={()=> {handleClick('groupsIcon')}}></i></a>
                </li>

                <li className={`navbarMiddleLI} navbarGamesLI`}>
                    <a className="nav-link active" href="#" title="Games"><i className={gamesActive ? `bi bi-dice-5-fill navbarICON gamesIcon iconActive` : `bi bi-dice-5 navbarICON gamesIcon`} onClick={()=> {handleClick('gamesIcon')}}></i></a>
                </li>

                <li className={`navbarMenuLI`}>
                    <div className={`frNavCircle`}>
                        <a className="nav-link active" href="#" title="Menü"><i className={`bi bi-grid-3x3-gap-fill navbarICON menuIcon`}></i></a>
                    </div>
                </li>
    
                <li className={``}>
                    <div className={`frNavCircle`}>
                        <a className="nav-link active" href="#" title="Nachrichten"><i className={`bi bi-messenger navbarICON messengerIcon`}></i></a>
                    </div>
                </li>

                <li className={``}>
                    <div className={`frNavCircle`}>
                        <a className="nav-link active" href="#" title="Benachrichtigungen"><i className={`bi bi-bell-fill navbarICON bellIcon`}></i></a>
                    </div>
                </li>

                <li className={``}>
                    <div>
                        <a className="nav-link active" href="#" title="Konto"><img src={props.profileImage} className={`frNavbarProfileImage`} alt='Profilbild'/></a>
                    </div>
                </li>
        

                    {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li> */}

                </ul>            
        </nav>
    )
}