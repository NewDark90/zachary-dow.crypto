import { newE2EPage } from '@stencil/core/testing';

describe('navigation-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<navigation-menu></navigation-menu>');

    const element = await page.find('navigation-menu');
    expect(element).toHaveClass('hydrated');
  });
});
