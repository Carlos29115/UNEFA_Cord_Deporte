import React from 'react'

import IconButton from '@mui/material/IconButton'

import WorkspacesIcon from '@mui/icons-material/Workspaces'
import { Tooltip } from '@mui/material'
const AssingnButtonTable: React.FC<TAssingnButtonTableProps> = ({
  handleClick,
  titleTooltip = 'Boton de accion',
}) => {
  return (
    <div>
      <Tooltip title={titleTooltip}>
        <IconButton size='small' aria-label='action' onClick={handleClick}>
          <WorkspacesIcon fontSize='small' />
        </IconButton>
      </Tooltip>
    </div>
  )
}

export type TAssingnButtonTableProps = {
  titleTooltip?: string
  handleClick: (params: unknown) => void | typeof params
}

export default AssingnButtonTable
