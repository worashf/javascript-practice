const functions =require("./functions")

test('Adds 3 + 3 to equal 6', () => {
    expect(functions.add(3, 3)).toBe(6);
  });


  //test with not to be
  test("Adds 2 +5 not to be 8",()=>{
      expect(functions.add(2,5)).not.toBe(8)
  })