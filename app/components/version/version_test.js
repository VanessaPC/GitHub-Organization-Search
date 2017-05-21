'use strict';

describe('gitHubApp.version module', function() {
  beforeEach(module('gitHubApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
