var SpotifyWebApi = require('spotify-web-api-node');
const {
  spotifyClientCredentials
} = require('../config');

/**
 * This middleware will request a new spotify Oauth2 token
 * and store it on the request object as:
 * req.spotifyOauth2Token
 */
function spotifyOauth2TokenGet(req, res, next) {
  spotifyApi = new SpotifyWebApi({
    clientId: spotifyClientCredentials.id,
    clientSecret: spotifyClientCredentials.secret,
  });

  spotifyApi.clientCredentialsGrant()
    .then((data) => {
      req.spotifyOauth2Token = data.body['access_token']
      next();
    }, (err) => {
      console.log('Error while requesting a new Spotify Oauth2 token!', err);
      next(err);
    });
}

module.exports = spotifyOauth2TokenGet;