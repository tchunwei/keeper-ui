import { KeeperUiPage } from './app.po';

describe('keeper-ui App', () => {
  let page: KeeperUiPage;

  beforeEach(() => {
    page = new KeeperUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
