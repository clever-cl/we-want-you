var SpotifyWebApi = require('spotify-web-api-node');
const {
  spotifyClientCredentials
} = require('../config');

/**
 * This middleware will request a new spotify Oauth2 token
 * and store it on the request object as:
 * req.spotifyOauth2Token
 */
async function spotifyOauth2TokenGet(req, res, next) {
  // Create a new SpotifyWebApi instance with the given client credentials
  spotifyApi = new SpotifyWebApi({
    clientId: spotifyClientCredentials.id,
    clientSecret: spotifyClientCredentials.secret,
  });

  // Use SpotifyWebApi Oauth2 client credentials flow to request a new token
  spotifyApi.clientCredentialsGrant()
    .then((data) => {
      // Success: store token to be used later on this request
      req.spotifyOauth2Token = data.body['access_token']
      next();
    }, (err) => {
      // Error: end the request and send the error
      next(err);
    });
}

module.exports = spotifyOauth2TokenGet;