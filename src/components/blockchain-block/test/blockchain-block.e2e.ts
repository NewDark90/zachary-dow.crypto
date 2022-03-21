import { newE2EPage } from '@stencil/core/testing';

describe('blockchain-block', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blockchain-block></blockchain-block>');

    const element = await page.find('blockchain-block');
    expect(element).toHaveClass('hydrated');
  });
});
