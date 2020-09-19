var SpotifyWebApi = require('spotify-web-api-node');

async function controller(req, res) {
  // albumOrArtist param should be encoded as URI component
  const param = decodeURIComponent(req.params.albumOrArtist);

  // Get query offset and limit to fetch
  // TODO: check if these are numbers
  const offset = (req.query && req.query.offset) ? req.query.offset : 0;
  const limit = (req.query && req.query.limit) ? req.query.limit : 20;

  // Create a new SpotifyWebApi instance and set the Oauth2 token received
  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(req.spotifyOauth2Token);

  // Execute the query using spotifyApi searchTracks method
  spotifyApi.searchTracks(`album:${param} artist:${param}`, {
    limit,
    offset
  }).then(
    function (data) {
      // Send the response with the received result and its metadata
      res.status(200).send(data.body);
    },
    function (err) {
      // End the request sending the message of the error
      res.status(500).send(err.message);
    }
  );
}

module.exports = controller;