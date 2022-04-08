import { newE2EPage } from '@stencil/core/testing';

describe('blockchain-links', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blockchain-links></blockchain-links>');

    const element = await page.find('blockchain-links');
    expect(element).toHaveClass('hydrated');
  });
});
