
import Weekend from "./Weekend";
import Workdays from "./Workdays";
import MadiaPlayer from "./MadiaPlayer";
import Calculator from "./Calculator";
import video from '../assets/videos/front_vid.mp4'
import GoalManagger from "./GoalManagger";
import { useEffect, useState } from "react";

function HomePage(props) {
    const day = new Date().getDay();
    const [toggle, setToggle] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const alignCenter = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    };

    const clickHandler = () => {
        setToggle(!toggle);
    }

    const clickHandler2 = () => {
        setToggle2(!toggle2);
    }
    useEffect(() => {
        console.log('useeffect')
        document.title = toggle ? "Welcome to MyHouse" : "Using useEffect";
    }, [toggle])
    return (
        <div>
            <h1>Welcome to Home site</h1>
            { day >=1 && day <=5
                ? <Workdays />
                : <Weekend />
            }

            <button onClick={clickHandler}>
                Toggle message
            </button>
            <button onClick={clickHandler2}>
                Toggle2 message
            </button>
            {toggle && <h2>Toggle is set on</h2>}
            <MadiaPlayer 
                style={alignCenter}
                url={video}
            />
            <Calculator />
            <GoalManagger />
        </div>
    );
}

export default HomePage;
