import { newSpecPage } from '@stencil/core/testing';
import { ContentWallets } from '../content-wallets';

describe('content-wallets', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentWallets],
      html: `<content-wallets></content-wallets>`,
    });
    expect(page.root).toEqualHtml(`
      <content-wallets>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-wallets>
    `);
  });
});
