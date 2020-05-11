import { newE2EPage } from '@stencil/core/testing';

describe('balance-print', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<balance-print></balance-print>');

    const element = await page.find('balance-print');
    expect(element).toHaveClass('hydrated');
  });
});
