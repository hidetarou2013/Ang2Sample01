import { Ang2Sample01Page } from './app.po';

describe('ang2-sample01 App', function() {
  let page: Ang2Sample01Page;

  beforeEach(() => {
    page = new Ang2Sample01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
