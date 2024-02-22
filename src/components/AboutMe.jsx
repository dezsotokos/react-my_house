import house from '../assets/images/haz_front.jpg'; 
import hot_tab from '../assets/images/dezsa.jpg'; 

/* eslint-disable jsx-a11y/alt-text */
function AboutMe(props) {
    return (
        <>
            <img width="100%" src={house}></img>
            <img width="100%" src={hot_tab}></img>
            <h1>About</h1>
        </>
    );
}

export default AboutMe;
