import { newSpecPage } from '@stencil/core/testing';
import { ContentHome } from '../content-home';

describe('content-home', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentHome],
      html: `<content-home></content-home>`,
    });
    expect(page.root).toEqualHtml(`
      <content-home>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-home>
    `);
  });
});
