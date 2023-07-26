import { GridColDef, GridValidRowModel } from '@mui/x-data-grid'

export type TPageState = {
  isLoading: boolean
  data: readonly GridValidRowModel[]
  total: number
  page: number
  pageSize: number
}

export type TTable = {
  columns: GridColDef[]
  pageState: TPageState
  setPageState: React.Dispatch<React.SetStateAction<TPageState>>
  onFilterChange?:(data:any)=>void
}
