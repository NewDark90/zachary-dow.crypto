import { newSpecPage } from '@stencil/core/testing';
import { NavigationMenu } from '../navigation-menu';

describe('navigation-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NavigationMenu],
      html: `<navigation-menu></navigation-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <navigation-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </navigation-menu>
    `);
  });
});
