import { newSpecPage } from '@stencil/core/testing';
import { ContentAbout } from '../content-about';

describe('content-about', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentAbout],
      html: `<content-about></content-about>`,
    });
    expect(page.root).toEqualHtml(`
      <content-about>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-about>
    `);
  });
});
