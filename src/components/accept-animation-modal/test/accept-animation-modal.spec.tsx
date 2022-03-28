import { newSpecPage } from '@stencil/core/testing';
import { AcceptAnimationModal } from '../accept-animation-modal';

describe('accept-animation-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AcceptAnimationModal],
      html: `<accept-animation-modal></accept-animation-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <accept-animation-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </accept-animation-modal>
    `);
  });
});
