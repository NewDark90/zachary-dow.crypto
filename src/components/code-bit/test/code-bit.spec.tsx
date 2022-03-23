import { newSpecPage } from '@stencil/core/testing';
import { CodeBit } from '../code-bit';

describe('code-bit', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CodeBit],
      html: `<code-bit></code-bit>`,
    });
    expect(page.root).toEqualHtml(`
      <code-bit>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </code-bit>
    `);
  });
});
