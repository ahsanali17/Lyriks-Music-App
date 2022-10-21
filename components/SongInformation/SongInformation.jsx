import Image from "next/image";
import { useSelector } from "react-redux";

import { Search, Loader, Error, ArtistSongPlayer } from '../../components';
import { ArtistInformationWrapper, ArtistGradientWrapper, ArtistWrapper, ArtistTextInformation, RelatedSongsHeading,
  RelatedSongsList,RelatedSong, RelatedSongsTextContainer, Number, SongLyrics } from "./styles";
import { useGetArtistDetailsQuery } from '../../redux/services/shazamCoreApi';

const SongInformation = ({ songData }) => {
  const { isPlaying, activeSong } = useSelector((state) => state.musicPlayer);
  
  const artistCode = songData?.artists[0]?.adamid;
  const { data, isFetching, error } = useGetArtistDetailsQuery({ artistCode });
  
  if (isFetching) return <Loader />;
  
  if (error) return <Error />;
  
  const songs = Object.values(data?.songs);
  const artistData = data?.artists[artistCode];
  
  return (
    <>
      <ArtistInformationWrapper>
          <Search searchGridArea={'artist-content-search'}/>
        <ArtistWrapper>
          <ArtistGradientWrapper>
              <Image src={artistData?.attributes?.artwork?.url.replace('{w}', '500').replace('{h}', '500')} width={450} height={450} priority />
          </ArtistGradientWrapper>
          <ArtistTextInformation>
              <h2>{artistData.attributes.name}</h2>
              <h3>{artistData.attributes.genreNames[0]}</h3>
          </ArtistTextInformation>
        </ArtistWrapper>
        <SongLyrics>
          <h2>Lyrics:</h2>
          {songData?.sections[1].type === 'LYRICS'
            ? songData?.sections[1].text.map((line, i) => (
              <p key={`lyrics-${line}-${i}`}>{line}</p>
            ))
            : (
              <p>Sorry, No lyrics found!</p>
            )}
        </SongLyrics>
          <RelatedSongsHeading>
            <h2>Related Songs:</h2>
          </RelatedSongsHeading>
          <RelatedSongsList>
            {songs.map(({id, attributes}, idx)=> (
              <RelatedSong key={id}>
                <Number>{idx + 1}</Number>
                <Image src={attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125')} width={125} height={125} objectFit="cover" />
                <RelatedSongsTextContainer>
                <h3>{attributes?.name}</h3>
                <h4>{attributes?.albumName}</h4>
                <ArtistSongPlayer song={songs[idx].attributes?.previews[0].url} data={songs[idx]} i={idx} isPlaying={isPlaying} activeSong={activeSong} songList={songs}/>
                </RelatedSongsTextContainer>
              </RelatedSong>
            ))}
          </RelatedSongsList>
      </ArtistInformationWrapper>
    </>
  );
};

export default SongInformation;
