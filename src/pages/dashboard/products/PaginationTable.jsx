import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

const PaginationTable = () => {
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 5));
        setPage(0);
    };

    return (
        <TablePagination
            component="div"
            count={100}
            page={page}
            rowsPerPageOptions={[5, 10, 25, { label: 'Todos', value: -1 }]}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            slotProps={{
                select: {
                    inputProps: {
                        'label': 'Produtos por tabela',
                    },
                    native: true,
                },
            }}
        />
    );
}
 
export default PaginationTable;