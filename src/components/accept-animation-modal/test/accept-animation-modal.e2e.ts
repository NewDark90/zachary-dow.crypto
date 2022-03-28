import { newE2EPage } from '@stencil/core/testing';

describe('accept-animation-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<accept-animation-modal></accept-animation-modal>');

    const element = await page.find('accept-animation-modal');
    expect(element).toHaveClass('hydrated');
  });
});
