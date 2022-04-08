import { newSpecPage } from '@stencil/core/testing';
import { BlockchainLinks } from '../blockchain-links';

describe('blockchain-links', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlockchainLinks],
      html: `<blockchain-links></blockchain-links>`,
    });
    expect(page.root).toEqualHtml(`
      <blockchain-links>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blockchain-links>
    `);
  });
});
