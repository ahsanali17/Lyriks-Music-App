export const urlSuccess = async (url) => {
  const res = await fetch(url);

  if (res.status === 200) {
    return true;
  }

  return false;
};

export const returnFirst5ValidArtists = (() => {
  const artistsArr = [];
  let currentArtist;
  let currentBackgroundImage;

  return function (worldChartsData) {
    for (let i = 0; i < worldChartsData.length; i += 1) {
      currentArtist = worldChartsData[i];
      currentBackgroundImage = currentArtist.images.background;

      if (artistsArr.length === 5) {
        return artistsArr;
      }

      if (currentBackgroundImage && urlSuccess(currentBackgroundImage)) {
        artistsArr.push(currentArtist);
      }
    }

    return artistsArr;
  };
})();
