import { newE2EPage } from '@stencil/core/testing';

describe('code-bit', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<code-bit></code-bit>');

    const element = await page.find('code-bit');
    expect(element).toHaveClass('hydrated');
  });
});
