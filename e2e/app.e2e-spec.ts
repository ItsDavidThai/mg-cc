import { MgCcPage } from './app.po';

describe('mg-cc App', function() {
  let page: MgCcPage;

  beforeEach(() => {
    page = new MgCcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
