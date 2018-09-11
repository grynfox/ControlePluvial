import { EstoquePage } from './app.po';

describe('estoque App', function() {
  let page: EstoquePage;

  beforeEach(() => {
    page = new EstoquePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
