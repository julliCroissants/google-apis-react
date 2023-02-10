
import "./home.css";
import React, { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.play();
  }, [videoRef]);
  return (
      <div className="home">Hello</div>
  );

  }