import { newSpecPage } from '@stencil/core/testing';
import { BlockchainDisplay } from '../blockchain-display';

describe('blockchain-display', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlockchainDisplay],
      html: `<blockchain-display></blockchain-display>`,
    });
    expect(page.root).toEqualHtml(`
      <blockchain-display>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blockchain-display>
    `);
  });
});
