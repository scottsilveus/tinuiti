import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Pagination from '../components/Pagination'

describe('Pagination', () => {
    test('component renders', () => {
        render(<Pagination page={1} numPages={1} pagiHandler={jest.fn()} />)

        expect(screen.getByText('1')).toBeInTheDocument()
    })

    test('Active page has active class', () => {
        render(<Pagination page={1} numPages={1} pagiHandler={jest.fn()} />)

        expect(screen.getByText('1')).toHaveClass('active')
    })

    test('Previous page arrow is disabled on page 1', () => {
        render(<Pagination page={1} numPages={1} pagiHandler={jest.fn()} />)

        expect(screen.getByText('❮')).toBeDisabled()
    })

    test('Previous page arrow is not disabled when not on first page', () => {
        render(<Pagination page={3} numPages={4} pagiHandler={jest.fn()} />)

        expect(screen.getByText('❮')).not.toBeDisabled()
    })

    test('Next page arrow is disabled when on the last page', () => {
        render(<Pagination page={1} numPages={1} pagiHandler={jest.fn()} />)

        expect(screen.getByText('❯')).toBeDisabled()
    })

    test('Next page arrow is not disabled when not on last page', () => {
        render(<Pagination page={1} numPages={4} pagiHandler={jest.fn()} />)

        expect(screen.getByText('❯')).not.toBeDisabled()
    })

    test('Correct page numbers show up', () => {
        render(<Pagination page={1} numPages={4} pagiHandler={jest.fn()} />)

        expect(screen.getByText('1')).toBeInTheDocument()
        expect(screen.getByText('2')).toBeInTheDocument()
        expect(screen.getByText('3')).toBeInTheDocument()
        expect(screen.getByText('4')).toBeInTheDocument()
        expect(screen.queryByText('5')).not.toBeInTheDocument()
    })

    describe('pagiHandler called on click', () => {
        const pagiHandlerMock = jest.fn()

        beforeEach(() => {
            render(
                <Pagination
                    page={2}
                    numPages={4}
                    pagiHandler={pagiHandlerMock}
                />
            )
        })

        test('pagiHanlder called on page number click', () => {
            userEvent.click(screen.getByText('3'))
            expect(pagiHandlerMock.mock.calls.length).toBe(1)
        })

        test('pagiHanlder called on prev page click', () => {
            userEvent.click(screen.getByText('❮'))
            expect(pagiHandlerMock.mock.calls.length).toBe(1)
        })

        test('pagiHanlder called on next page click', () => {
            userEvent.click(screen.getByText('❯'))
            expect(pagiHandlerMock.mock.calls.length).toBe(1)
        })
    })
})
