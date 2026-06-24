import "/src/styles/Player.css"
import {useRef, useState} from "react";

function Player(props) {

    const audioRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const currentTrack = props.tracks[currentIndex];

    function togglePlay() {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
        else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    }

    function nextTrack() {
        if(currentIndex < props.tracks.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setIsPlaying(false);
        }
    }

    function prevTrack() {
        if(currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setIsPlaying(false);
        }
    }

    return (
        <>
            <div className="player">
                <h1>Just listen</h1>
                <h2>{currentTrack.title}</h2>

                <audio
                    ref={audioRef}
                    src={currentTrack.file}
                />

                <div className="controls">
                    <button onClick={prevTrack}>⏮</button>
                    <button onClick={togglePlay}>
                        {isPlaying ? "⏸" : "▶"}
                    </button>
                    <button onClick={nextTrack}>⏭</button>
                </div>

            </div>
        </>
    )
}

export default Player