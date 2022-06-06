const functions =require("./functions")

test('Adds 3 + 3 to equal 6', () => {
    expect(functions.add(3, 3)).toBe(6);
  });