import { useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

const WaveSurferDemo = () => {
    let [isPlaying, setIsPlaying] = useState(false)
    let [waveSurfer, setWaveSurfer] = useState(null)

    useEffect(() => {
        setWaveSurfer(WaveSurfer.create({
            container: '#waveform'
        }))
    }, [])

    useEffect(() => {
        if(waveSurfer) {
        //  waveSurfer.load(audioFile)
        }
      }, [waveSurfer])

    return (
        <>
            <h1>Wave Surfer</h1>
            <div id="waveform"></div>

            {/* <WaveSurfer
                src="https://freesound.org/data/previews/462/462807_8386274-lq.mp3"
                position={position}
                onPositionChange={handlePositionChange}
                onReady={onReadyHandler}
                playing
                muted={muted}
            /> */}
        </>
    )
}

export default WaveSurferDemo