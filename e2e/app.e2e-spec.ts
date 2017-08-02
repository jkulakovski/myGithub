import { MyGithubPage } from './app.po';

describe('my-github App', () => {
  let page: MyGithubPage;

  beforeEach(() => {
    page = new MyGithubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
