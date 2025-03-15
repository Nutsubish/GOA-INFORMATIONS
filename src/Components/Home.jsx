import { useState } from "react"
import img1 from "../assets/Me.jpg"
const Home = () => {

    const styles = {
            borderRadius: '100%',
            border: '5px solid black'
    }    


    return(
        <> 
        <div id="HomeF-div">
            <div id="Home-div">
                <h1>Welcome</h1>
                <p>You Are At GOA INFORMATIONS!</p>
                <p>On This Site You Can Get Information About City Temperatures and News!</p>
                <img src={img1} alt="my image" style={styles} width={300}/>
                <p>This Is Me: Nikoloz Nutsubidze</p>
            </div>
        </div>
        </>
    )

}

export default Home;