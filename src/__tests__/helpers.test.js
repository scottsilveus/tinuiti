import { isEmpty, sortProducts } from '../utils/helpers'
import { multiProds } from '../__mocks__/MockedProjects'

describe('Helper functions', () => {
    describe('isEmpty', () => {
        test('should return true if obj is empty', () => {
            let obj = {}
            expect(isEmpty(obj)).toBe(true)
        })

        test('should return false if obj not empty', () => {
            let obj = { not: 'empty' }
            expect(isEmpty(obj)).toBe(false)
        })
    })

    describe('sortProducts', () => {
        test('should sort products by product name asc', () => {
            let asc = sortProducts(multiProds, 'productName', 'asc')
            expect(asc[0].productName).toBe('Amtap')
            expect(asc[1].productName).toBe('Brainclip')
            expect(asc[2].productName).toBe('Comtours')
            expect(asc[3].productName).toBe('Emtrak')
            expect(asc[4].productName).toBe('Eplode')
            expect(asc[5].productName).toBe('Kage')
        })

        test('should sort products by product name dsc', () => {
            let dsc = sortProducts(multiProds, 'productName', 'dsc')

            expect(dsc[0].productName).toBe('Kage')
            expect(dsc[1].productName).toBe('Eplode')
            expect(dsc[2].productName).toBe('Emtrak')
            expect(dsc[3].productName).toBe('Comtours')
            expect(dsc[4].productName).toBe('Brainclip')
            expect(dsc[5].productName).toBe('Amtap')
        })

        test('should sort products by price asc', () => {
            let asc = sortProducts(multiProds, 'price', 'asc')

            expect(asc[0].price).toBe('$12.80')
            expect(asc[1].price).toBe('$39.22')
            expect(asc[2].price).toBe('$58.30')
            expect(asc[3].price).toBe('$68.35')
            expect(asc[4].price).toBe('$91.22')
            expect(asc[5].price).toBe('$97.82')
        })

        test('should sort products by price dsc', () => {
            let dsc = sortProducts(multiProds, 'price', 'dsc')

            expect(dsc[0].price).toBe('$97.82')
            expect(dsc[1].price).toBe('$91.22')
            expect(dsc[2].price).toBe('$68.35')
            expect(dsc[3].price).toBe('$58.30')
            expect(dsc[4].price).toBe('$39.22')
            expect(dsc[5].price).toBe('$12.80')
        })

        test('should sort products by keyword asc', () => {
            let asc = sortProducts(multiProds, 'keyword', 'asc')

            expect(asc[0].keyword).toBe('eu do officia')
            expect(asc[1].keyword).toBe('nisi ea fugiat')
            expect(asc[2].keyword).toBe('occaecat consectetur exercitation')
            expect(asc[3].keyword).toBe('sunt qui sint')
            expect(asc[4].keyword).toBe('tempor aliquip enim')
            expect(asc[5].keyword).toBe('tempor ut excepteur')
        })

        test('should sort products by keyword dsc', () => {
            let dsc = sortProducts(multiProds, 'keyword', 'dsc')

            expect(dsc[0].keyword).toBe('tempor ut excepteur')
            expect(dsc[1].keyword).toBe('tempor aliquip enim')
            expect(dsc[2].keyword).toBe('sunt qui sint')
            expect(dsc[3].keyword).toBe('occaecat consectetur exercitation')
            expect(dsc[4].keyword).toBe('nisi ea fugiat')
            expect(dsc[5].keyword).toBe('eu do officia')
        })

        test('should sort products by rating asc', () => {
            let asc = sortProducts(multiProds, 'rating', 'asc')

            expect(asc[0].reviews[0].rating).toBe(1)
            expect(asc[1].reviews[0].rating).toBe(2)
            expect(asc[2].reviews[0].rating).toBe(3)
            expect(asc[3].reviews[0].rating).toBe(4)
            expect(asc[4].reviews[0].rating).toBe(5)
            expect(asc[5].reviews[0].rating).toBe(5)
        })

        test('should sort products by rating dsc', () => {
            let dsc = sortProducts(multiProds, 'rating', 'dsc')

            expect(dsc[0].reviews[0].rating).toBe(5)
            expect(dsc[1].reviews[0].rating).toBe(5)
            expect(dsc[2].reviews[0].rating).toBe(4)
            expect(dsc[3].reviews[0].rating).toBe(3)
            expect(dsc[4].reviews[0].rating).toBe(2)
            expect(dsc[5].reviews[0].rating).toBe(1)
        })
    })
})
