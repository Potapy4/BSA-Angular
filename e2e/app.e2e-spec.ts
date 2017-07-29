import { BSAAngularPage } from './app.po';

describe('bsa-angular App', () => {
  let page: BSAAngularPage;

  beforeEach(() => {
    page = new BSAAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
