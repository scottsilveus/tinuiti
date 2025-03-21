import React from 'react'
import '../styles/pagination.css'
import PropTypes from 'prop-types'

function Pagination({ page, numPages, pagiHandler }) {
    let pagi = [...Array(numPages)].map((x, index) => {
        return (
            <button
                key={index + 1}
                onClick={() => pagiHandler(index + 1)}
                className={
                    index + 1 === page ? 'active link-button' : 'link-button'
                }
            >
                {index + 1}
            </button>
        )
    })

    return (
        <div className="pagiWrapper">
            <div className="pagination">
                <button
                    className="link-button"
                    onClick={() => (page === 1 ? '' : pagiHandler(page - 1))}
                    disabled={page === 1}
                >
                    ❮
                </button>
                {pagi}
                <button
                    className="link-button"
                    onClick={() =>
                        page === numPages ? '' : pagiHandler(page + 1)
                    }
                    disabled={page === numPages}
                >
                    ❯
                </button>
            </div>
        </div>
    )
}

export default Pagination

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
    pagiHandler: PropTypes.func.isRequired,
}
