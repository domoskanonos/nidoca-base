import {fixture, html} from '@open-wc/testing';

test('html element check.', async () => {
  const divElement: HTMLDivElement = await fixture(html`<div></div>`);
  expect(divElement).toBeTruthy();
});
