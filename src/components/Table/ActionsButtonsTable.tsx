import React from 'react';

import IconButton from '@mui/material/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip } from '@mui/material';

const ActionButtonsTable: React.FC<TActionButtonsTableProps> = ({
  handleEditRow,
  handleDeleteRow
}) => {
  return (
    <div>
      <Tooltip title="Boton de Modificar">
        <IconButton size="small" aria-label="edit" onClick={handleEditRow}>
          <ModeEditIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      {handleDeleteRow &&
        <Tooltip title="Boton de Eliminar">
          <IconButton
            size="small"
            aria-label="delete"
            onClick={handleDeleteRow}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Tooltip>}
    </div>
  );
};

export type TActionButtonsTableProps = {
  handleEditRow: (params: unknown) => void | typeof params;
  handleDeleteRow: any;
};

export default ActionButtonsTable;
