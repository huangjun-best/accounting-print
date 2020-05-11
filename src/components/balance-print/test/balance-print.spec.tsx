import { newSpecPage } from '@stencil/core/testing';
import { BalancePrint } from './balance-print';

describe('balance-print', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BalancePrint],
      html: `<balance-print></balance-print>`,
    });
    expect(page.root).toEqualHtml(`
      <balance-print>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </balance-print>
    `);
  });
});
