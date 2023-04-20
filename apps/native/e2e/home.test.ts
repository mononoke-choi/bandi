import { by, element, expect } from 'detox';

describe('home screen should be rendered', () => {
  it('WIP should be visible', function () {
    expect(element(by.text('WIP'))).toBeVisible();
  });
});
