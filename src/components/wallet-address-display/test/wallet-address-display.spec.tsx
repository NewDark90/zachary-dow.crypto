import { newSpecPage } from '@stencil/core/testing';
import { WalletAddressDisplay } from '../wallet-address-display';

describe('wallet-address-display', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WalletAddressDisplay],
      html: `<wallet-address-display></wallet-address-display>`,
    });
    expect(page.root).toEqualHtml(`
      <wallet-address-display>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wallet-address-display>
    `);
  });
});
