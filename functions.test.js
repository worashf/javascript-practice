const functions =require("./functions")

test('Adds 3 + 3 to equal 6', () => {
    expect(functions.add(3, 3)).toBe(6);
  });


  //test with not to be
  test("Adds 2 +5 not to be 8",()=>{
      expect(functions.add(2,5)).not.toBe(8)
  })

  //test with to be null matcher
  test("Should be null",()=>{
      expect(functions.notNull()).toBeNull()
  })
// falsy
test("Shoulld be falsy",()=>{
    expect(functions.checkValue(null)).toBeFalsy()
})
// falsy
test("Shoulld be falsy",()=>{
    expect(functions.checkValue(0)).toBeFalsy()
})
// falsy
test("Shoulld be falsy",()=>{
    expect(functions.checkValue(undefined)).toBeFalsy()
})
// truthy
test("Shoulld be truthy",()=>{
    expect(functions.checkValue(1)).toBeTruthy()
})


// toEqual
test('User should be Worash object', () => {
    expect(functions.createUser()).toEqual({
      firstName: 'worash',
      lastName: 'abocherugn'
    });
  });