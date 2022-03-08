import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
    useMemo
  } from "react";
  import ReactDOM from "react-dom";
  import styled from "styled-components";
  import { WaveSurfer, WaveForm, Region } from "wavesurfer-react";
  import "./styles.css";
  import RegionsPlugin from "wavesurfer.js/dist/plugin/wavesurfer.regions.min";
  import TimelinePlugin from "wavesurfer.js/dist/plugin/wavesurfer.timeline.min";
  
  const Buttons = styled.div`
    display: inline-block;
  `;
  
  const Button = styled.button``;
  
  /**
   * @param min
   * @param max
   * @returns {*}
   */
  function generateNum(min, max) {
    return Math.random() * (max - min + 1) + min;
  }
  
  /**
   * @param distance
   * @param min
   * @param max
   * @returns {([*, *]|[*, *])|*[]}
   */
  function generateTwoNumsWithDistance(distance, min, max) {
    const num1 = generateNum(min, max);
    const num2 = generateNum(min, max);
    // if num2 - num1 < 10
    if (num2 - num1 >= 10) {
      return [num1, num2];
    }
    return generateTwoNumsWithDistance(distance, min, max);
  }
  
const WaveSurferDemo = () => {
    const [timelineVis, setTimelineVis] = useState(true);
  
    const plugins = useMemo(() => {
      return [
        {
          plugin: RegionsPlugin,
          options: { dragSelection: true }
        },
        timelineVis && {
          plugin: TimelinePlugin,
          options: {
            container: "#timeline"
          }
        }
      ].filter(Boolean);
    }, [timelineVis]);
  
    const toggleTimeline = useCallback(() => {
      setTimelineVis(!timelineVis);
    }, [timelineVis]);
  
  
    const wavesurferRef = useRef();
    const wavesurferRef2 = useRef();
    const handleWSMount = useCallback(
      waveSurfer => {
        wavesurferRef.current = waveSurfer;
        wavesurferRef2.current = waveSurfer;
        if (wavesurferRef.current) {
          wavesurferRef.current.load("/test.mp3");
          wavesurferRef2.current.load("/test.mp3");
  
         // wavesurferRef.current.on("region-created", regionCreatedHandler);
  
          wavesurferRef.current.on("ready", () => {
            console.log("WaveSurfer is ready");
          });
  
          wavesurferRef.current.on("region-removed", region => {
            console.log("region-removed --> ", region);
          });
  
          wavesurferRef.current.on("loading", data => {
            console.log("loading --> ", data);
          });
  
          if (window) {
            window.surferidze = wavesurferRef.current;
            window.surferidze = wavesurferRef2.current;
          }
        }
      },
      []
    );
    
  
   
  
    const play = useCallback(() => {
      wavesurferRef.current.playPause();
    }, []);
  
    const handleRegionUpdate = useCallback((region, smth) => {
      console.log("region-update-end --> region:", region);
      console.log(smth);
    }, []);
  
    return (
      <div className="App">
        <WaveSurfer plugins={plugins} onMount={handleWSMount}>
          <WaveForm id="waveform">
          </WaveForm>
          <div id="timeline" />
        </WaveSurfer>
        <Buttons>
          <Button onClick={play}>Play / Pause</Button>
          <Button onClick={toggleTimeline}>Toggle timeline</Button>
        </Buttons>
      </div>
    );
  }
  
  export default WaveSurferDemo
  