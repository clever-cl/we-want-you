function controller(req, res) {
  console.log('req.spotifyOauth2Token', req.spotifyOauth2Token);

  // spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
  //   function (data) {
  //     console.log('Artist albums', data.body);
  //   },
  //   function (err) {
  //     console.error(err);
  //   }
  // );
  res.send('up and running controller\n' + req.spotifyOauth2Token);
}

module.exports = controller;