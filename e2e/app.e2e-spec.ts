import { UsholidayappviewerPage } from './app.po';

describe('usholidayappviewer App', () => {
  let page: UsholidayappviewerPage;

  beforeEach(() => {
    page = new UsholidayappviewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
