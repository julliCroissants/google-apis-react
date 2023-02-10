import { useEffect, useState, useRef } from "react";
import GoogleMapsApiLoader from "google-maps-api-loader";

const apiKey = "AIzaSyChTZZ-1RpyiYFAlAHzweX3eTl-0lUrf4w";

const eventsMapping = {
  // onCenterChanged: ["center_changed", (map) => map.getCenter()],
  // onBoundsChangerd: ["bounds_changed", (map) => map.getBounds()]
};

export default function useGoogleStreetView({
  position,
  pov,
  motionTracking,
  motionTrackingControl,
  events
}) {
  const [streetViewState, setStreetViewState] = useState({ loading: true });
  const streetRef = useRef();
  const map = useRef();
  useEffect(() => {
    GoogleMapsApiLoader({ apiKey }).then((google) => {
      map.current = new google.maps.StreetViewPanorama(streetRef.current, {
        position,
        pov,
        motionTracking
      });
      Object.keys(events).forEach((eventName) =>
        map.current.addListener(eventsMapping[eventName][0], () =>
          events[eventName](eventsMapping[eventName][1](map))
        )
      );

      setStreetViewState({ maps: google.maps, map, loading: false });
    });
  }, []);
  function setPosition({ lat, lon }) {
    map.current.setPosition({ lat, lon });
  }
  return { streetRef, ...streetViewState, setPosition };
}
