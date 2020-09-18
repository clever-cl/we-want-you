const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const mockery = require('mockery');
const {
  mock
} = require('sinon');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const expect = chai.expect;

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe.only('spotifyOauth2TokenGet', () => {
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
  it('should create a new SpotifyWebApi instance with credentials from config', (done) => {
    // Spies that listen to function calls
    const nextSpy = sinon.spy();
    const constructorSpy = sinon.spy();

    // Test mocks: request objects
    const reqMock = {};
    const resMock = {};
    // Test mocks: dependencies
    const SpotifyWebApiMock = class {
      constructor(...args) {
        constructorSpy(...args);
        this.clientCredentialsGrant = () => Promise.resolve({
          body: {
            'access_token': 'someToken',
          }
        })
      }
    }
    const configMock = {
      spotifyClientCredentials: {
        id: 'someId',
        secret: 'someSecret',
      }
    }

    // Set dependencies mocks
    mockery.registerMock('spotify-web-api-node', SpotifyWebApiMock);
    mockery.registerMock('../config', configMock);

    // Import and excute tested module with its mocks
    const spotifyOauth2TokenGet = require('./spotify-oauth2-token-get');

    spotifyOauth2TokenGet(reqMock, resMock, nextSpy)
      .then(() => {
        // Assertions
        expect(constructorSpy).calledWith({
          clientId: configMock.spotifyClientCredentials.id,
          clientSecret: configMock.spotifyClientCredentials.secret,
        });
        done();
      });
  });

  it('should call next once when a new token is created', (done) => {
    // Spies that listen to function calls
    const nextSpy = sinon.spy();
    const constructorSpy = sinon.spy();

    // Test mocks: request objects
    const reqMock = {};
    const resMock = {};
    // Test mocks: dependencies
    const SpotifyWebApiMock = class {
      constructor(...args) {
        constructorSpy(...args);
        this.clientCredentialsGrant = () => Promise.resolve({
          body: {
            'access_token': 'someToken',
          }
        })
      }
    }
    const configMock = {
      spotifyClientCredentials: {
        id: 'someId',
        secret: 'someSecret',
      }
    }

    // Set dependencies mocks
    mockery.registerMock('spotify-web-api-node', SpotifyWebApiMock);
    mockery.registerMock('../config', configMock);

    // Import and excute tested module with its mocks
    const spotifyOauth2TokenGet = require('./spotify-oauth2-token-get');

    spotifyOauth2TokenGet(reqMock, resMock, nextSpy)
      .then(() => {
        // Assertions
        expect(nextSpy).to.have.been.calledOnce;
        done();
      });
  });

  it('should call next with an error when spotifyApi request fails', (done) => {
    // Spies that listen to function calls
    const nextSpy = sinon.spy();
    const constructorSpy = sinon.spy();

    // Test mocks: request objects
    const reqMock = {};
    const resMock = {};
    // Test mocks: dependencies
    const errMock = new Error('someError');
    const SpotifyWebApiMock = class {
      constructor(...args) {
        constructorSpy(...args);
        this.clientCredentialsGrant = () => Promise.reject(errMock);
      }
    }
    const configMock = {
      spotifyClientCredentials: {
        id: 'someId',
        secret: 'someSecret',
      }
    }

    // Set dependencies mocks
    mockery.registerMock('spotify-web-api-node', SpotifyWebApiMock);
    mockery.registerMock('../config', configMock);

    // Import and excute tested module with its mocks
    const spotifyOauth2TokenGet = require('./spotify-oauth2-token-get');

    spotifyOauth2TokenGet(reqMock, resMock, nextSpy)
      .then(() => {
        // Assertions
        expect(nextSpy).calledWith(errMock);
        expect(nextSpy).to.have.been.calledOnce;
        done();
      });
  });
});