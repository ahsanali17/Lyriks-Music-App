import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayOrPause = ({ isPlaying, activeSong, handlePlay, handlePause, song}) => {
  return (
   isPlaying && activeSong === song 
  ? 
    (
      <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
    ) 
  : 
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );
}
export default PlayOrPause;