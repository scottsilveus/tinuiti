import React from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Collapse from '@material-ui/core/Collapse'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

function CollapsibleTable({ dailyRankings, open }) {
    return (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                    Daily Rankings
                </Typography>
                <Table size="small" aria-label="purchases">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Ranking</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dailyRankings.map((dailyRankings) => (
                            <TableRow key={dailyRankings.date}>
                                <TableCell component="th" scope="row">
                                    {dailyRankings.date}
                                </TableCell>
                                <TableCell>{dailyRankings.rank}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </Collapse>
    )
}

export default CollapsibleTable
