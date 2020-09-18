function controller(req, res) {
  console.log('req.params', req.params);

  res.send('up and running controller\n' + req.params.albumOrArtist);
}

module.exports = controller;