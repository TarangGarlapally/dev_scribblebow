import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Menu(props){
    const [active, setActive] = useState("home");

    const handleClick = (event)=>{
        document.getElementById(active).style.backgroundColor = "rgb(24, 23, 23)";
        document.getElementById(event.target.id).style.backgroundColor = "grey";
        setActive(event.target.id);
    }

    useEffect(()=>{
        switch(window.location.pathname){
            case "/": 
                document.getElementById("home").style.backgroundColor = "grey";
                setActive("home");
                break;
            case "/reports":
                document.getElementById("reports").style.backgroundColor = "grey";
                setActive("reports");
                break;
            case "/tools":
                document.getElementById("tools").style.backgroundColor = "grey";
                setActive("tools");
                break;
        }
    },[])

    return <div className={styles.menu}>
    <Link href="/">
      <p id="home" className={styles.navButton} onClick={handleClick}>Home</p>
    </Link>
    <Link href="/reports">
      <p id="reports" className={styles.navButton} onClick={handleClick}>Reports</p>
    </Link>
    <Link href="/tools">
      <p id="tools" className={styles.navButton} onClick={handleClick}>Tools</p>
    </Link>
    </div>
}