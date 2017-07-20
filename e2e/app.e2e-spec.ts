import { RegistrationAngularPage } from './app.po';

describe('registration-angular App', () => {
  let page: RegistrationAngularPage;

  beforeEach(() => {
    page = new RegistrationAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
