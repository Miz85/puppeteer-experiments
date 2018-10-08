describe('Basic test', () => {
  it('displays our app page', async () => {
    await page.waitForSelector('.App-logo');
    const logo = await page.$('.App-logo');

    expect(logo).not.toBeNull();
  });
});
