import React from "react";
import useGoogleStreetView from "./useGoogleStreetView";

export default function StreetView() {
  const fenway = { lat: 42.345573, lng: -71.098326 };
  const { streetRef, setPosition } = useGoogleStreetView({
    position: fenway,
    pov: { heading: 165, pitch: 0 }
    // motionTracking: false,
    // motionTrackingControl: false
  });

  return (
    <>
      <div className="streetView">
        <div ref={streetRef} className="map-ref" />
        <div className="map"></div>
        <div className="pano"></div>
      </div>
      <button onClick={() => setPosition({ lat: 40.729884, lng: -73.990988 })}>
        change Position
      </button>
    </>
  );
}
