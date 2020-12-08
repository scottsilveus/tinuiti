import React from 'react'
import '../styles/collapsibleTable.css'
import PropTypes from 'prop-types'

function CollapsibleTable({ dailyRankings, open }) {
    let containerClass = open ? 'container open' : 'container closed'
    return (
        <div className={containerClass}>
            <div className="collapsible-wrapper">
                <div className="collapsible-wrapper-inner">
                    <div className="box">
                        <div className="collapsible-title">Daily Rankings</div>
                        <table size="small" aria-label="">
                            <thead>
                                <tr>
                                    <th className="collapsible-header cell">
                                        Date
                                    </th>
                                    <th className="collapsible-header cell">
                                        Ranking
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {dailyRankings.map((dailyRankings) => (
                                    <tr
                                        className="collapsible-row"
                                        key={dailyRankings.date}
                                    >
                                        <th
                                            className="collapsible-cell"
                                            scope="row"
                                        >
                                            {dailyRankings.date}
                                        </th>
                                        <td className="collapsible-cell">
                                            {dailyRankings.rank}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollapsibleTable

CollapsibleTable.propTypes = {
    dailyRankings: PropTypes.array.isRequired,
    open: PropTypes.bool.isRequired,
}
