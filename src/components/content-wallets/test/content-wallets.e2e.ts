import { newE2EPage } from '@stencil/core/testing';

describe('content-wallets', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-wallets></content-wallets>');

    const element = await page.find('content-wallets');
    expect(element).toHaveClass('hydrated');
  });
});
