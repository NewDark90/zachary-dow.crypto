import { newE2EPage } from '@stencil/core/testing';

describe('blockchain-display', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blockchain-display></blockchain-display>');

    const element = await page.find('blockchain-display');
    expect(element).toHaveClass('hydrated');
  });
});
