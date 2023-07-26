import React, { memo } from 'react';
import { DataGrid, esES } from '@mui/x-data-grid';
import style from './Table.module.scss';
import { TPageState, TTable } from 'types';
import { withStyles } from '@mui/styles';
/* hooks */

const StyledDataGrid = withStyles({
  root: {
    '& .MuiDataGrid-renderingZone': {
      maxHeight: 'none !important'
    },
    '& .MuiData Grid-cell': {
      lineHeight: 'unset !important',
      maxHeight: 'none !important',
      whiteSpace: 'normal !important'
    },
    '& .MuiDataGrid-row': {
      maxHeight: 'none !important'
    }
  }
})(DataGrid);

const Table: React.FC<TTable> = ({
  columns,
  pageState,
  setPageState,
  onFilterChange
}) => {
  const { total, isLoading, page, pageSize, data } = pageState;

  const [rowCountState, setRowCountState] = React.useState<number>(total || 0);
  React.useEffect(
    () => {
      setRowCountState(
        prevRowCountState => (total !== undefined ? total : prevRowCountState)
      );
    },
    [total, setRowCountState]
  );
  return (
    <div
      style={{
        minHeight: '550px',
        width: '100%',
        height: '1px'
      }}>
      <StyledDataGrid
        className={style['main_table']}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        columns={columns}
        pagination
        rows={data}
        rowCount={rowCountState}
        loading={isLoading}
        rowsPerPageOptions={[5, 10, 50]}
        page={page}
        pageSize={pageSize}
        disableSelectionOnClick={true}
        onPageChange={(newPage: number) => {
          setPageState((old: TPageState) => ({ ...old, page: newPage }));
        }}
        onPageSizeChange={(newPageSize: number) =>
          setPageState((old: TPageState) => ({
            ...old,
            pageSize: newPageSize
          }))}
        paginationMode="server"
        filterMode="server"
        disableVirtualization
        onFilterModelChange={onFilterChange}
        /* onCellClick={handleCellClick} */
      />
    </div>
  );
};

export default memo(Table);
