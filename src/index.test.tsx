describe('What are tests?', () => {
  it('Can be pretty much anything you need it to be.', () => {
    expect(2 + 2).toBe(4);
  })

  it('If it is valid javascript, you can use it in your test.', () => {
    let str = '';

    for (let index = 0; index < 10; index++) {
      str += 'a';
      expect(str.length).toBe(index + 1);
    }
  })
})