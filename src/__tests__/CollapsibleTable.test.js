import React from 'react'
import { render, screen } from '@testing-library/react'

import CollapsibleTable from '../components/CollapsibleTable'

import { oneProduct } from '../__mocks__/MockedProjects'

describe('CollapsibleTable', () => {
    beforeEach(() => {
        render(
            <CollapsibleTable
                dailyRankings={oneProduct.dailyRankings}
                open={false}
            />
        )
    })
    test('container class matches prop', () => {
        expect(document.querySelector('.closed')).toBeInTheDocument()
        expect(document.querySelector('.open')).not.toBeInTheDocument()
    })

    test('product date is shown in table', () => {
        expect(screen.getByText('2020-10-01')).toBeInTheDocument()
        expect(screen.getByText('2020-10-02')).toBeInTheDocument()
    })

    test('product rank is shown in table', () => {
        expect(screen.getByText('40')).toBeInTheDocument()
        expect(screen.getByText('48')).toBeInTheDocument()
    })

    describe('Table headers are correct', () => {
        test('Daily Rankings header is on page', () => {
            expect(screen.getByText('Daily Rankings')).toBeInTheDocument()
        })

        test('date header', () => {
            expect(
                screen.getByRole('columnheader', { name: /Date/ })
            ).toBeInTheDocument()
        })

        test('ranking header', () => {
            expect(
                screen.getByRole('columnheader', { name: /Ranking/ })
            ).toBeInTheDocument()
        })
    })
})
