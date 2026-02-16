// import { screen } from '@testing-library/react'
import sum from '../sum'


describe('Sum function', () => {
    it('adds two numbers', () => {
        expect(sum(2, 3)).toBe(5)
    })

    it('works with negative numbers', () => {
        expect(sum(-2, 3)).toBe(1)
    })
})