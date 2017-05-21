'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#!/view1');
    });

    it('should search for repositories', function() {
      element(by.model('search')).sendKeys('Mozilla');

      expect(element.all(by.css('.repo-container')).count()).toBeGreaterThan(0);
    });

    it('should have filtered languages', function() {
      element(by.model('search')).sendKeys('Mozilla');

      var languages = element.all(by.repeater('language in languages'));

      expect(languages.count()).toBeGreaterThan(0);
      expect(languages.get(0).getText()).toBe('Python');
    });

    it('should have repository information', function() {
      element(by.model('search')).sendKeys('Mozilla');

      var repo = element.all(by.css('.repo-container')).get(0);

      expect(repo.element(by.css('.repo-name')).getText()).toBe('zamboni');
      expect(repo.element(by.css('.repo-link')).getText()).toBe('https://api.github.com/repos/mozilla/zamboni');
    });

    it('should have branches information', function() {
      element(by.model('search')).sendKeys('Mozilla');

      var repo = element.all(by.css('.repo-container')).get(0);

      repo.element(by.css('.repo-name')).click();

      expect(repo.all(by.repeater('branch in entry.branches')).count()).toBeGreaterThan(0);
      expect(repo.all(by.css('.branch-name')).get(0).getText()).toBe('Branch name: 2015.06.02-02');
    });

  });
});
