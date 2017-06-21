import { MeanNg4Page } from './app.po';

describe('mean-ng4 App', () => {
  let page: MeanNg4Page;

  beforeEach(() => {
    page = new MeanNg4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
