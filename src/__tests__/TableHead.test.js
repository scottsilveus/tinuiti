import React from 'react'
import { render, screen } from '@testing-library/react'

import TableHead from '../components/TableHead'

const headers = ['header1', 'Header2']

describe('TableHead', () => {
    beforeEach(() => {
        render(
            <table>
                <TableHead
                    headers={headers}
                    setProducts={jest.fn()}
                    allProducts={[]}
                />
            </table>
        )
    })
    test('headers are displayed', () => {
        screen.getByRole('columnheader', { name: /header1/ })
        screen.getByRole('columnheader', { name: /Header2/ })
    })
})
