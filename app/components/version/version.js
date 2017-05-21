'use strict';

angular.module('gitHubApp.version', [
  'gitHubApp.version.interpolate-filter',
  'gitHubApp.version.version-directive'
])

.value('version', '0.1');
