
import Weekend from "./Weekend";
import Workdays from "./Workdays";
import MadiaPlayer from "./MadiaPlayer";
import Calculator from "./Calculator";
import video from '../assets/videos/front_vid.mp4'
import GoalManagger from "./GoalManagger";

function HomePage(props) {
    const day = new Date().getDay();
    const alignCenter = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    };

    return (
        <div>
            <h1>Welcome to Home site</h1>
            { day >=1 && day <=5
                ? <Workdays />
                : <Weekend />
            }
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
