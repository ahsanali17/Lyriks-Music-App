import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { playPause, setActiveSong, setSongList, setCurrentSongData } from '../../redux/features/musicPlayer';


const ArtistSongPlayer = ({ song, data, i, isPlaying, activeSong, songList}) => {
 const dispatch = useDispatch(); 
 // console.log("artist song", song)
 // console.log("artist songList", songList)
 
 console.log("data from songInformation", data);
 const handlePlayClick = () => {
  dispatch(setActiveSong({song, i}));
  dispatch(setCurrentSongData({data}));
  dispatch(setSongList({songList}));
  dispatch(playPause(true));
};

 const handlePauseClick = () => {
  dispatch(setActiveSong({song, i}));
  dispatch(playPause(false));
 };

  
 return (
   isPlaying && activeSong === song ? (
   <FaPauseCircle size={35} className="text-gray-300" onClick={handlePauseClick} />
 ) : (
   <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlayClick} />
 )
)
 }
export default ArtistSongPlayer;