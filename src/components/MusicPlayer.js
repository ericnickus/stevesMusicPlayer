import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Music } from 'lucide-react';
import './MusicPlayer.css';

const getData = () => [
  {
    id: 1,
    name: "Love Loss",
    artist: "locjaw",
    cover: "/artwork/locjaw_logo.png",
    audio: "/music/Love_Loss.mp3",
    color: ["#F4A460", "#8B4513"],
    active: true
  },
  {
    id: 2,
    name: "Someone",
    artist: "locjaw",
    cover: "/artwork/locjaw_logo.png",
    audio: "/music/Someone.mp3",
    color: ["#20B2AA", "#008B8B"],
    active: false
  },
  {
    id: 3,
    name: "Come From",
    artist: "locjaw",
    cover: "/artwork/locjaw_logo.png",
    audio: "/music/Come_From.mp3",
    color: ["#F4A460", "#8B4513"],
    active: true
  },
  {
    id: 4,
    name: "Real Life",
    artist: "locjaw",
    cover: "/artwork/locjaw_logo.png",
    audio: "/music/Real_Life.mp3",
    color: ["#20B2AA", "#008B8B"],
    active: false
  },
  {
    id: 5,
    name: "Compromise",
    artist: "locjaw",
    cover: "/artwork/locjaw_logo.png",
    audio: "/music/Compromise.mp3",
    color: ["#F4A460", "#8B4513"],
    active: true
  },
  {
    id: 6,
    name: "Bitch Slap",
    artist: "locjaw",
    cover: "/artwork/locjaw_logo.png",
    audio: "/music/Bitch_Slap.mp3",
    color: ["#20B2AA", "#008B8B"],
    active: false
  },
  {
    id: 7,
    name: "God Complex",
    artist: "locjaw",
    cover: "/artwork/locjaw_logo.png",
    audio: "/music/God_Complex.mp3",
    color: ["#20B2AA", "#008B8B"],
    active: false
  }

];

const MusicPlayer = () => {
  // Use a regular variable, not useState
  const songs = getData();
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const audioRef = useRef(new Audio());
  const [audio, setAudio] = useState(audioRef.current); // This is fine, you *do* use setAudio
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  useEffect(() => {
    setAudio(audioRef.current);
  }, []); // Empty dependency array is better here

  useEffect(() => {
    audio.src = currentSong.audio;
    if (isPlaying) {
      audio.play().catch(handlePlayError);
    }
  }, [currentSong, isPlaying, audio]);

  const handlePlayError = (error) => {
    console.error("Play Error:", error);
    //  The DOMException check is unnecessary in modern browsers.  .play()
    //  returns a promise; any error will be caught by the .catch().
    // if (error.code === DOMException.ABORT_ERR) {
    //   console.log("Play Interrupted (Expected)");
    // } else {
    //   console.error("Unhandled Play Error", error);
    // }
    console.error("Unhandled Play Error", error); // Keep only this line
  };

  const timeUpdateHandler = () => {
    if (audio.duration) {
      const current = audio.currentTime;
      const duration = audio.duration;
      const animation = Math.round((current / duration) * 100);
      setSongInfo({
        currentTime: current,
        duration,
        animationPercentage: animation,
      });
    }
  };

  const songEndHandler = () => {
    if (isPlayingAll) {
      let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
      if (currentIndex === songs.length - 1) {
        setIsPlayingAll(false);
        setIsPlaying(false);
        return;
      }
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
  };

  const handlePlayAll = () => {
    if (isPlayingAll) {
      setIsPlayingAll(false);
      setIsPlaying(false);
      audio.pause();
    } else {
      setIsPlayingAll(true);
      setIsPlaying(true);
      setCurrentSong(songs[0]);
    }
  };

  const playSongHandler = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(handlePlayError);
      setIsPlaying(true);
    }
  };

  const getTime = (time) =>
    Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);

  const dragHandler = (e) => {
    audio.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
        return;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
  };

  return (
    <div className="music-player">
      <nav className="nav-bar">
        <h1>Music Player</h1>
        <div className="nav-buttons">
          <button onClick={handlePlayAll} className="button play-all-button">
            {isPlayingAll ? 'Stop All' : 'Play All'}
            <Play size={16} />
          </button>
          <button
            onClick={() => setLibraryStatus(!libraryStatus)}
            className="button library-button"
          >
            View Library
            <Music size={16} />
          </button>
        </div>
      </nav>

      <div className="song-container">
        <img src={currentSong.cover} alt={currentSong.name} />
        <h2>{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
      </div>

      <div className="controls">
        <div className="time-control">
          <p>{getTime(songInfo.currentTime)}</p>
          <div className="track">
            <input
              type="range"
              min={0}
              max={songInfo.duration || 0}
              value={songInfo.currentTime}
              onChange={dragHandler}
            />
            <div
              className="animate-track"
              style={{
                transform: `translateX(${songInfo.animationPercentage}%)`,
              }}
            ></div>
          </div>
          <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
        </div>

        <div className="play-control">
          <button onClick={() => skipTrackHandler("skip-back")}>
            <ChevronLeft size={32} />
          </button>
          <button onClick={playSongHandler}>
            {isPlaying ? <Pause size={48} /> : <Play size={48} />}
          </button>
          <button onClick={() => skipTrackHandler("skip-forward")}>
            <ChevronRight size={32} />
          </button>
        </div>
      </div>

      <div className={`library ${libraryStatus ? 'active' : ''}`}>
        <div className="song-list">
          <h2>Library</h2>
          <div>
            {songs.map((song) => (
              <div
                key={song.id}
                onClick={() => {
                  setCurrentSong(song);
                  // This if statement isn't necessary. The useEffect handles playing.
                  //if (isPlaying) audio.play().catch(handlePlayError);
                }}
                className={`song-item ${song.id === currentSong.id ? 'active' : ''}`}
              >
                <img src={song.cover} alt={song.name} />
                <div>
                  <h3>{song.name}</h3>
                  <p>{song.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        onEnded={songEndHandler}
      />
    </div>
  );
};

export default MusicPlayer;