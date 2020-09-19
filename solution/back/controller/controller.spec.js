const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const mockery = require('mockery');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const expect = chai.expect;

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('controller', () => {
  // Settings and initializations required before each test execution
  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
  });
  // Clean up to do after each test execution
  afterEach(() => {
    mockery.deregisterAll();
    mockery.disable();
  });

  /**
   * Unit tests
   */
  it('should send spotify response when everything is ok', (done) => {
    // Spies that listen to function calls
    const nextSpy = sinon.spy();
    const sendSpy = sinon.spy();
    const searchTracksSpy = sinon.spy();
    const setAccessTokenSpy = sinon.spy();

    // Test mocks: request objects
    const reqMock = {
      query: {
        offset: 20,
        limit: 10,
      },
      params: {
        albumOrArtist: 'someString',
      },
      spotifyOauth2Token: 'someToken',
    };
    const resMock = {
      status: () => ({send: sendSpy}),
    };
    // Test mocks: dependencies
    const SpotifyWebApiMock = class {
      constructor() {
        this.setAccessToken = setAccessTokenSpy;
        this.searchTracks = (...args) => {
          searchTracksSpy(...args);
          return Promise.resolve({
            body: {
              items: ['a', 'b', 'c'],
              metadata: 'prevNextAndMore'
            }
          });
        }
      }
    }

    // Set dependencies mocks
    mockery.registerMock('spotify-web-api-node', SpotifyWebApiMock);

    // Import and excute tested module with its mocks
    const controller = require('./controller');

    controller(reqMock, resMock, nextSpy)
      .then(() => {
        // Assertions
        expect(searchTracksSpy).calledOnceWith(
          `album:${reqMock.params.albumOrArtist} ` +
          `artist:${reqMock.params.albumOrArtist}`, {
            limit: 10,
            offset: 20,
          }
        );
        expect(sendSpy).calledOnceWith({
          items: ['a', 'b', 'c'],
          metadata: 'prevNextAndMore'
        });
        done();
      });
  });

  it('should use default limit and offset when not received', (done) => {
    // Spies that listen to function calls
    const nextSpy = sinon.spy();
    const sendSpy = sinon.spy();
    const searchTracksSpy = sinon.spy();
    const setAccessTokenSpy = sinon.spy();

    // Test mocks: request objects
    const reqMock = {
      params: {
        albumOrArtist: 'someString',
      },
      spotifyOauth2Token: 'someToken',
    };
    const resMock = {
      status: () => ({send: sendSpy}),
    };
    // Test mocks: dependencies
    const SpotifyWebApiMock = class {
      constructor() {
        this.setAccessToken = setAccessTokenSpy;
        this.searchTracks = (...args) => {
          searchTracksSpy(...args);
          return Promise.resolve({
            body: {
              items: ['a', 'b', 'c'],
              metadata: 'prevNextAndMore'
            }
          });
        }
      }
    }

    // Set dependencies mocks
    mockery.registerMock('spotify-web-api-node', SpotifyWebApiMock);

    // Import and excute tested module with its mocks
    const controller = require('./controller');

    controller(reqMock, resMock, nextSpy)
      .then(() => {
        // Assertions
        expect(searchTracksSpy).calledOnceWith(
          `album:${reqMock.params.albumOrArtist} ` +
          `artist:${reqMock.params.albumOrArtist}`, {
            limit: 20,
            offset: 0,
          }
        );
        expect(sendSpy).calledOnceWith({
          items: ['a', 'b', 'c'],
          metadata: 'prevNextAndMore'
        });
        done();
      });
  });

  it('should send err when spotifyApi searchTracks fails', (done) => {
    // Spies that listen to function calls
    const nextSpy = sinon.spy();
    const sendSpy = sinon.spy();
    const searchTracksSpy = sinon.spy();
    const setAccessTokenSpy = sinon.spy();

    // Test mocks: request objects
    const reqMock = {
      params: {
        albumOrArtist: 'someString',
      },
      spotifyOauth2Token: 'someToken',
    };
    const resMock = {
      status: () => ({send: sendSpy}),
    };
    // Test mocks: dependencies
    const errMock = new Error('someError');
    const SpotifyWebApiMock = class {
      constructor() {
        this.setAccessToken = setAccessTokenSpy;
        this.searchTracks = (...args) => {
          searchTracksSpy(...args);
          return Promise.reject(errMock);
        }
      }
    }

    // Set dependencies mocks
    mockery.registerMock('spotify-web-api-node', SpotifyWebApiMock);

    // Import and excute tested module with its mocks
    const controller = require('./controller');

    controller(reqMock, resMock, nextSpy)
      .then(() => {
        // Assertions
        expect(searchTracksSpy).calledOnceWith(
          `album:${reqMock.params.albumOrArtist} ` +
          `artist:${reqMock.params.albumOrArtist}`, {
            limit: 20,
            offset: 0,
          }
        );
        expect(sendSpy).calledOnceWith(errMock.message);
        done();
      });
  });
});