import { newSpecPage } from '@stencil/core/testing';
import { CodeCube } from '../code-cube';

describe('code-cube', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CodeCube],
      html: `<code-cube></code-cube>`,
    });
    expect(page.root).toEqualHtml(`
      <code-cube>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </code-cube>
    `);
  });
});
