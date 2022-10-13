import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayOrPause = ({ isPlaying, activeSong, handlePlay, handlePause, song}) => {
  const firstCheckIf = isPlaying && activeSong === song;
  
  return (
    firstCheckIf ? 
      (
        <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
      ) 
    : 
      <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );
}
export default PlayOrPause;