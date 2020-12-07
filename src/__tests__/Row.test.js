import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Row from '../components/Row'
import { oneProduct } from '../__mocks__/MockedProjects'

let component = (
    <table>
        <tbody>
            <Row product={oneProduct} />
        </tbody>
    </table>
)

describe('Row', () => {
    beforeEach(() => {
        render(component)
    })

    test('CollapsibleTable starts closed', () => {
        expect(document.querySelector('.closed')).toBeInTheDocument()
    })

    test('open changes on click', () => {
        expect(document.querySelector('.arrow.down')).toBeInTheDocument()
        expect(document.querySelector('.arrow.up')).not.toBeInTheDocument()

        userEvent.click(screen.getByRole('button', { name: /expand row/ }))

        expect(document.querySelector('.arrow.down')).not.toBeInTheDocument()
        expect(document.querySelector('.arrow.up')).toBeInTheDocument()
    })

    describe('product information is displayed', () => {
        test('product name is displayed', () => {
            expect(screen.getByText(/Brainclip/)).toBeInTheDocument()
        })

        test('product image is displayed', () => {
            // expect(screen.getByText(/Brainclip/)).toBeInTheDocument()
            screen.getByRole('img', { name: /product-img/ })
        })

        test('product price is displayed', () => {
            expect(screen.getByText(/\$91\.22/)).toBeInTheDocument()
        })

        test('product keyword is displayed', () => {
            expect(screen.getByText(/tempor aliquip enim/)).toBeInTheDocument()
        })

        test('product category is displayed', () => {
            expect(screen.getByText(/pariatur/)).toBeInTheDocument()
        })

        test('product inBuybox is displayed', () => {
            expect(screen.getByText(/false/)).toBeInTheDocument()
        })
    })
})
