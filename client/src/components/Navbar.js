import styles from '../styles/navbar.module.css';
import {useState} from 'react';

export function Navbar(props){

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
        
        <nav className={`${styles.frNavbar}`}>

            <div className={`${styles.navbarLeftSection}`}>
            <a className="" href="#"><img src="../graphics/logos/dev_logo.png" className={`${styles.frNavbarLogo}`} alt="FREI:raum"/></a>
                <form className="" >
                    <input className={`${styles.navbarSEARCHBAR}`} type="search" placeholder="FREI:raum durchsuchen" />
                    <button className={`${styles.navbarSEARCHBUTTON}`} type="submit">Go</button>
                </form>
            </div>        

            <ul className={`${styles.navbarUL}`}>

                <li className={`${styles.navbarMiddleLI}`}>
                    <a className="nav-link active" href="#" title="Home"><i className={homeActive ? `bi bi-house-door-fill ${styles.navbarICON} homeIcon ${styles.iconActive}` : `bi bi-house-door ${styles.navbarICON} homeIcon`} onClick={()=> {handleClick('homeIcon')}}></i></a>
                </li>

                <li className={`${styles.navbarMiddleLI}`}>
                    <a className="nav-link active" href="#" title="Play"><i className={playActive ? `bi bi-collection-play-fill ${styles.navbarICON} playIcon ${styles.iconActive}` : `bi bi-collection-play ${styles.navbarICON} playIcon`} onClick={()=> {handleClick('playIcon')}}></i></a>
                </li>

                <li className={`${styles.navbarMiddleLI}`}>
                    <a className="nav-link active" href="#" title="Shop"><i className={marketActive ? `bi bi-shop ${styles.navbarICON} marketIcon ${styles.iconActive}` : `bi bi-shop ${styles.navbarICON} marketIcon`} onClick={()=> {handleClick('marketIcon')}}></i></a>
                </li>

                <li className={`${styles.navbarMiddleLI}`}>
                    <a className="nav-link active" href="#" title="Gruppen"><i className={groupsActive ? `bi bi-people-fill ${styles.navbarICON} groupsIcon ${styles.iconActive}` : `bi bi-people ${styles.navbarICON} groupsIcon`} onClick={()=> {handleClick('groupsIcon')}}></i></a>
                </li>

                <li className={`${styles.navbarMiddleLI} ${styles.navbarGamesLI}`}>
                    <a className="nav-link active" href="#" title="Games"><i className={gamesActive ? `bi bi-dice-5-fill ${styles.navbarICON} gamesIcon ${styles.iconActive}` : `bi bi-dice-5 ${styles.navbarICON} gamesIcon`} onClick={()=> {handleClick('gamesIcon')}}></i></a>
                </li>

                <li className={`${styles.navbarMenuLI}`}>
                    <div className={`${styles.frNavCircle}`}>
                        <a className="nav-link active" href="#" title="Menü"><i className={`bi bi-grid-3x3-gap-fill ${styles.navbarICON} ${styles.menuIcon}`}></i></a>
                    </div>
                </li>
    
                <li className={``}>
                    <div className={`${styles.frNavCircle}`}>
                        <a className="nav-link active" href="#" title="Nachrichten"><i className={`bi bi-messenger ${styles.navbarICON} ${styles.messengerIcon}`}></i></a>
                    </div>
                </li>

                <li className={``}>
                    <div className={`${styles.frNavCircle}`}>
                        <a className="nav-link active" href="#" title="Benachrichtigungen"><i className={`bi bi-bell-fill ${styles.navbarICON} ${styles.bellIcon}`}></i></a>
                    </div>
                </li>

                <li className={``}>
                    <div>
                        <a className="nav-link active" href="#" title="Konto"><img src={props.profileImage} className={`${styles.frNavbarProfileImage}`}/></a>
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