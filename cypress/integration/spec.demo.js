describe('this spec should never be ran from `npm run e2e-ignore`', () => {
  it('a failing test', () => {
    expect(7).to.be.equal(8);
  });
});
