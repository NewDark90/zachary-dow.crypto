import { newSpecPage } from '@stencil/core/testing';
import { ContentSkills } from '../content-skills';

describe('content-skills', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentSkills],
      html: `<content-skills></content-skills>`,
    });
    expect(page.root).toEqualHtml(`
      <content-skills>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-skills>
    `);
  });
});
