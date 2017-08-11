import { PrimengAppPage } from './app.po';

describe('primeng-app App', () => {
  let page: PrimengAppPage;

  beforeEach(() => {
    page = new PrimengAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
