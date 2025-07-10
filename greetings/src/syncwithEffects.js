import { useState, useRef, useEffect } from "react";
function VideoPlayer({src, isPlaying}) {
    const ref = useRef(null);

    useEffect(() => {
        if(isPlaying) {
            ref.current.play()
        } else {
            ref.current.pause()
        }
    },[isPlaying])

    return <video ref={ref} src={src} loop playsInline/>
}


export default function App(){
    const [isPlaying, setISPlaying] = useState(false);

    return(
        <>
            <button>
                {isPlaying ? 'pause': 'pause'}
            </button>
            <VideoPlayer
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </>
    )
}