import { newE2EPage } from '@stencil/core/testing';

describe('content-about', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-about></content-about>');

    const element = await page.find('content-about');
    expect(element).toHaveClass('hydrated');
  });
});
