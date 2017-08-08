import { WebGuiPage } from './app.po';

describe('web-gui App', () => {
  let page: WebGuiPage;

  beforeEach(() => {
    page = new WebGuiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
