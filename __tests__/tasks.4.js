describe('Q4: perimeter of a square', () => {
    test('Correct result is printed in the terminal', () => {
        console.log = jest.fn();
        const solution = require('../solution');
        const answer = console.log.mock.calls.find(call => call.join(' ').substring(0,3) === 'Q4:');
        if (answer) {
            expect(answer.join(' ')).toContain('19');
        } else {
            fail();
        }
    })
})
