import ReactPlayer from 'react-player'

function MadiaPlayer(props) {
    return (
        <div className="MadiaPlayer">
            <p>MadiaPlayer</p>
            <ReactPlayer
                url={props.url}
                playing={false}
                controls={true}
            />
        </div>
    );
}

export default MadiaPlayer;
