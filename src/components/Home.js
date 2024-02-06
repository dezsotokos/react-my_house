
import Weekend from "./Weekend";
import Workdays from "./Workdays";

function HomePage(props) {
    const day = new Date().getDay();
    console.log(day);
    return (
        <div>
            <h1>Welcome to Home site</h1>
            { day >=1 && day <=5
                ? <Workdays />
                : <Weekend />
            }
        </div>
    );
}

export default HomePage;
