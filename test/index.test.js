const calc = require('../src/Dcal.js')

test('add 2.1 + 2.2 to equal 4.3', () => {
    expect(2.1.$add(2.2)).toBe(4.3)
})


test('sub 1.1-0.11 to equal 0.99', () => {
    expect(1.1.$sub(0.11)).toBe(0.99)
})

test('sub 0.1 * 0.2 to equal 0.02', () => {
    expect(0.1.$mul(0.2)).toBe(0.02)
})

test('div 10.1 / 0.1 to equal 101', () => {
    expect( 10.1.$div(0.1) ).toBe(101)
})

test('mixture 0.1 * (0.2/(2.1 + 2.2 - 1.1)) to equal 0.00625', () => {
    expect( 0.1.$mul(0.2.$div(2.1.$add(2.2).$sub(1.1))) ).toBe(0.00625)
})
