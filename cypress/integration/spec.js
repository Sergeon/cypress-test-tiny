describe('this spec should be run ever', () => {
  it('a passing test', () => {
    expect(tortillaDePatatas() ).to.be.equal('great');
  });
});

function tortillaDePatatas(){
  return 'great';
}