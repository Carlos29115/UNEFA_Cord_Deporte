import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

/**
 * @method type TUseFormHookProps
 */
export type TUseFormHookProps = {
  [index: string]: (
    payload?: number | string | string[]
  ) => Record<string, unknown>;
};

export type TFormProps = {
  onSubmit: any;
  loadingService: boolean;
  rowData: any;
  captcha?:any;
  setCaptcha?:any
};

/**
 * @method type TPageInfo
 */
export type TPageInfo = {
  currentPage: number;
  totalPages: number;
  totalRecords: number;
};

export type Tparam = {
  page: number;
  size: number;
};

/**
 * @method type TGenericResponse
 */
export type TGenericResponse = {
  data: unknown;
  message: string;
  error?: string | null;
  pageInfo: TPageInfo;
};
/**
 * @method type TRequestError
 */
export type TGenericResponseError = Partial<TGenericResponse>;

/**
 * @method type TCheckedState
 */
export type TCheckedState = {
  [index: string]: boolean;
};

/**
 * @method type TMuiIcon
 */
export type TMuiIcon = OverridableComponent<SvgIconTypeMap<unknown, 'svg'>> & {
  muiName: string;
};

export type TSaimeData = {
  origen: string;
  cedula: string;
  pais_origen: string;
  nacionalidad: string;
  primer_nombre: string;
  segundo_nombre: string;
  primer_apellido: string;
  segundo_apellido: string;
  fecha_nacimiento: number;
  naturalizado: 0;
  sexo: string;
  fecha_registro: null | number;
  fecha_ult_actualizacion: null | number;
  id: number;
};
