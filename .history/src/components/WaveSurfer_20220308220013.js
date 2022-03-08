import WaveSurfer from 'wavesurfer.js';

const WaveSurferDemo = () => {
    return (
        <>
            <h1>Wave Surfer</h1>
            <WaveSurfer
                src="https://freesound.org/data/previews/462/462807_8386274-lq.mp3"
                position={position}
                onPositionChange={handlePositionChange}
                onReady={onReadyHandler}
                playing
                muted={muted}
            />
        </>
    )
}

export default WaveSurferDemo