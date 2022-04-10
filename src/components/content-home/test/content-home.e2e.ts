import { newE2EPage } from '@stencil/core/testing';

describe('content-home', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-home></content-home>');

    const element = await page.find('content-home');
    expect(element).toHaveClass('hydrated');
  });
});
