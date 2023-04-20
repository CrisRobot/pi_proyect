import React from "react";
import { useNavigate } from "react-router-dom";
import videolanding from "../../assets/videoparalanding.mp4";
import styles from "../../css/welcome.module.css";
import logo from "../../assets/logo blanco.png";

const Welcome = () => {
    const navigate = useNavigate();
        return (
            
<div className={styles.main}>

    <div className={styles.overlay}></div>

    <video className={styles.video} 
    src={videolanding} autoPlay loop muted/>

    <div className={styles.content}>
        <div>
        <img className={styles.img} src={logo} alt="logo"></img>
        </div>
        <div className={styles.welcome}>
            <h1 className={styles.h}> Welcome </h1>
            <p className={styles.p}>Welcome to our
             comprehensive guide to tourist activities 
             around the world! Our website features an 
             extensive list of every country in the world,
              along with a variety of exciting and unique 
              tourist activities available in each destination</p>
            <button
                className={styles.button} 
                onClick={()=>{navigate("/home")}}> Ingresar
            </button>
        </div>
        
    </div>

</div>

    )
};

export default Welcome;