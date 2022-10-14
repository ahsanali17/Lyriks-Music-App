export const returnFirst5ValidArtists = (() => {
  const artistsArr = [];
  let currentArtist;
  let currentBackgroundImage;
  let currentArtistName;

  return function (worldChartsData) {
    artistsArr.length > 1 ? (artistsArr = []) : artistsArr;

    let artistNames = [];

    for (let i = 0; i < worldChartsData.length; i += 1) {
      currentArtist = worldChartsData[i];
      currentArtistName = worldChartsData[i].subtitle;
      currentBackgroundImage = currentArtist?.images?.background;

      if (artistsArr.length === 5) return artistsArr;

      if (
        currentBackgroundImage &&
        !artistNames.includes(currentArtistName)
      ) {
        artistsArr.push(currentArtist);
      }

      artistNames.push(currentArtistName);
    }

    return artistsArr;
  };
})();