import { newSpecPage } from '@stencil/core/testing';
import { BlockchainBlock } from '../blockchain-block';

describe('blockchain-block', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlockchainBlock],
      html: `<blockchain-block></blockchain-block>`,
    });
    expect(page.root).toEqualHtml(`
      <blockchain-block>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blockchain-block>
    `);
  });
});
