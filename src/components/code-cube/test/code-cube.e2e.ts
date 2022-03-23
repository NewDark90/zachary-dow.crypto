import { newE2EPage } from '@stencil/core/testing';

describe('code-cube', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<code-cube></code-cube>');

    const element = await page.find('code-cube');
    expect(element).toHaveClass('hydrated');
  });
});
