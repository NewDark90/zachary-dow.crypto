import { newE2EPage } from '@stencil/core/testing';

describe('content-skills', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-skills></content-skills>');

    const element = await page.find('content-skills');
    expect(element).toHaveClass('hydrated');
  });
});
