import { SongArtistCard } from '../';

const SongArtistList = ({ data }) => {
  return (
    <>
      {data.map(({ key, title, subtitle }) => (
        <SongArtistCard key={key} title={title} subtitle={subtitle} />
      ))}
    </>
  );
};

export default SongArtistList;
