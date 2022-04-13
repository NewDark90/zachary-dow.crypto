import { newE2EPage } from '@stencil/core/testing';

describe('wallet-address-display', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wallet-address-display></wallet-address-display>');

    const element = await page.find('wallet-address-display');
    expect(element).toHaveClass('hydrated');
  });
});
