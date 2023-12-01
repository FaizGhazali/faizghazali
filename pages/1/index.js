import { useState, useEffect, useRef } from "react";


export default function AboutPage() {
  const audioRef = useRef(null);

  const handleAudioPlay = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch((error) => {
        // Handle play error
        console.error("Play error:", error);
      });
    }
  };
  return (
    <>
      <div class="flex-1 p-10 text-2xl font-bold h-screen overflow-y-auto">
        This is a content div with specific styling.
        <div>
          <button onClick={handleAudioPlay}>Play Audio</button>
          <audio
            ref={audioRef}
            src="https://files.gospeljingle.com/uploads/music/2023/06/Fifty-Fifty-Cupid-Twin-Version-(Gospeljingle.com).mp3"
            loop
          >
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </>
  );
}
