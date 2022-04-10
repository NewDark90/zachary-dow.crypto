import { newSpecPage } from '@stencil/core/testing';
import { ContentContact } from '../content-contact';

describe('content-contact', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentContact],
      html: `<content-contact></content-contact>`,
    });
    expect(page.root).toEqualHtml(`
      <content-contact>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-contact>
    `);
  });
});
