import React from 'react';

import { GridSelectionModel, GridValidRowModel } from '@mui/x-data-grid';

export const useTable = (rows: GridValidRowModel) => {
  const [, setSelectionModel] = React.useState<GridSelectionModel>([]);

  const [selectedRows, setSelectedRows] = React.useState<object[]>([]);

  const datosSelected = (e: GridSelectionModel) => {
    setSelectionModel(e);
    const selectedIDs = new Set(e);
    const selectedRows: object[] = rows.filter((r: GridValidRowModel) =>
      selectedIDs.has(r.id)
    );
    setSelectedRows(selectedRows);
  };

  return {
    datosSelected,
    selectedRows
  };
};
