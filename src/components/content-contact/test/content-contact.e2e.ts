import { newE2EPage } from '@stencil/core/testing';

describe('content-contact', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-contact></content-contact>');

    const element = await page.find('content-contact');
    expect(element).toHaveClass('hydrated');
  });
});
