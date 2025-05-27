import React from "react";
import styles from "../Styles/Banner.module.css";
function Home() {
    
    return (
        <>
            <div className={styles.hello}>
                <h1> hello world </h1>
                <a href="/about"> who </a>
            </div>
            
        </>
      
    )  
} 

export default Home