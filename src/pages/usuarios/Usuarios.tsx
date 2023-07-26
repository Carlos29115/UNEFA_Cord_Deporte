import React, { useMemo, useState, useEffect } from 'react';
import styles from 'styles/Layout.module.scss';
import { Typography } from '@mui/material';
import {
  ActionsButtonsTable,
  CustomButton,
  CardNormal,
  Table,
  CustomModal,
  FormUsuarios,
  DialogConfirm
} from 'components/index';
import {
  GridCellParams,
  GridColDef,
  GridValidRowModel
} from '@mui/x-data-grid';
import {
  TGenericResponse,
  TGenericResponseError,
  TOpenModals,
  TPageState
} from 'types/index';
import {
  getAllUsersServices,
  createUsersServices,
  updateUsersServices,
  deleteUsersServices
} from 'services/users';
//authrequire: true
import { useAlert } from 'hooks/useAlert';
import { searchItemLocal } from 'utils/helpers';
import { useNavigate } from 'react-router-dom';
import NAVIGATION from 'routes/navigation';

/* inicializar los datos para el formulario */
// const initialDatarow = { //??
//   id: '',
//   firstName: '',
//   lastName: '',
//   password:'',
//   email: '',
//   identity: '',
//   ente: '',
//   role: ''
// };


const Usuarios = () => {
  // const { openAlert } = useAlert();
  // const navigate = useNavigate();
  // const dataUser = searchItemLocal('dataUser')
  // const [openModal, setOpenModal] = useState<TOpenModals>({
  //   modalCreate: false,
  //   dialogDelete: false
  // });
 
  // const [loadingService, setLoadingService] = useState<boolean>(false);

  // const [rowData, setRowData] = useState({
  //   data: initialDatarow,
  //   isNewRecord: true
  // });

  // const [pageState, setPageState] = React.useState<TPageState>({
  //   isLoading: false,
  //   data: [],
  //   total: 0,
  //   page: 0,
  //   pageSize: 5
  // });

  // if(dataUser.userRole.roleId === 4){
  //   navigate(NAVIGATION.HOME)
  // }

  // const getUsers = async () => {
  //   try {
  //     setPageState((prev: TPageState) => ({ ...prev, isLoading: true }));
  //     const { data } = await getAllUsersServices({
  //       params: {
  //         skip: pageState?.page * pageState?.pageSize,
  //         take: pageState?.pageSize,
  //         deleted: false,
  //         enteId:dataUser.userRole.roleId === 1 ? null: dataUser.userRole.enteId
  //       },
  //       authRequire: true,
  //     });

  //     setPageState((prev: TPageState) => ({
  //       ...prev,
  //       isLoading: false,
  //       data: data.data  ? data?.data: [] ,
  //       total: data?.total,
  //     }));

  
  //   } catch (err: any) {
  //     openAlert(err.response.data.message, { variant: 'error' })
  //   }
  // };

  // const handleCreate = () => {
  //   setOpenModal({ modalCreate: true });
  //   setRowData({ data: initialDatarow, isNewRecord: true });
  // };
  // const handleEditRow = (dataRow: GridCellParams) => () => {
  //   setOpenModal({ modalCreate: true });
  //   const dataForm = {
  //     id: dataRow.row.id,
  //     firstName: dataRow?.row?.profile?.firstName,
  //     lastName: dataRow?.row?.profile?.lastName,
  //     email: dataRow?.row?.email,
  //     identity: dataRow?.row?.profile?.identity,
  //     ente: dataRow.row.userRole.enteId,
  //     role: dataRow.row.userRole.roleId,
  //     password:'' 
  //   } 

  //   setRowData({ data: dataForm , isNewRecord: false });
  // };

  // const handleDeleteRow = (dataRow: GridCellParams) => () => {
  //   setOpenModal({ dialogDelete: true });
  //   setRowData({ data: dataRow.row, isNewRecord: false });
  // };

  // const onSubmit = async (data: unknown) => {
  //   const payload = data as any;
  //   try {
  //     setLoadingService(true);
  //     const id = payload.id;
  //     delete payload.id;
  //     if (rowData.isNewRecord) {
  //       await createUsersServices({ payload: payload, authRequire: true });
  //       openAlert('Creacion de usuario realizada exitosamente')
  //     } else {
  //       await updateUsersServices({ payload: payload, params: id, authRequire: true });
  //       openAlert('Modificacion de usuario realizada exitosamente')
  //     }
  //   } catch (err) {
  //     // const message = (err as TGenericResponseError).error as string;
  //     openAlert('error en en la operación', { variant: 'error' })
  //   } finally {
  //     setLoadingService(false);
  //     getUsers();
  //     setOpenModal({ modalCreate: false });
  //   }
  // };

  // const onDeleteRow = async (id: unknown) => {
  //   try {
  //     setLoadingService(true);
  //     (await deleteUsersServices({
  //       params: id as number,
  //       authRequire: true
  //     })) as TGenericResponse;
  //     openAlert('se ha eliminado el usuario exitosamente')
  //   } catch (err) {
  //     openAlert('error en en la operación', { variant: 'error' })
  //   } finally {
  //     setLoadingService(false);
  //     getUsers();
  //     setOpenModal({ dialogDelete: false });
  //   }
  // };

  // //id correp nombre lastname ente cedula rol

  // const columns: GridColDef[] = useMemo(
  //   () => [
  //     { field: 'id', headerName: 'ID', width: 20 },
  //     {
  //       field: 'firstName', headerName: 'Nombre', width: 180, renderCell: params => {
  //         return params?.row?.profile?.firstName
  //       }
  //     },
  //     {
  //       field: 'lastName', headerName: 'Apellido', width: 180, renderCell: params => {
  //         return params?.row?.profile?.lastName
  //       }
  //     },
  //     { field: 'identity', headerName: 'Cédula', width: 90, renderCell: params => {
  //       return params?.row?.profile?.identity
  //     } },
  //     { field: 'email', headerName: 'Correo', width: 220 },
  //     {
  //       field: 'ente', headerName: 'Ente', width: 200, renderCell: params => {
  //         return params?.row?.userRole?.ente?.name
  //       }
  //     },
  //     {
  //       field: 'rol', headerName: 'Rol', width: 180, renderCell: params => {
  //         return params?.row?.userRole?.role?.name
  //       }
  //     },
  //     /* {
  //       field: 'description',
  //       headerName: 'Descripción',
  //       width: 330,
  //       flex: 1
  //     }, */
  //     {
  //       field: 'actions',
  //       headerName: 'Acciones',
  //       renderCell: params =>
  //         <ActionsButtonsTable
  //           handleEditRow={handleEditRow(params)}
  //           handleDeleteRow={handleDeleteRow(params)}
  //         />,
  //       sortable: false,
  //       width: 100,
  //       headerAlign: 'center',
  //       filterable: false,
  //       align: 'center',
  //       disableColumnMenu: true,
  //       disableReorder: true
  //     }
  //   ],
  //   []
  // );

  // useEffect(() => {
  //   getUsers()
  // }, [pageState.pageSize, pageState.page])

  return (
    <section>
      USUARIOS


      {/* <div className={styles['modules__header']}>
        <Typography className={styles['page-title']} component="h1">
          USUARIOS
        </Typography>
        <CustomButton
          typeVariant="contained"
          label="Agregar Nuevo"
          onClick={handleCreate}
          className={styles['button-header']}
        />
      </div>
      <CardNormal>
        <Table
          pageState={pageState}
          setPageState={setPageState}
          columns={columns}
        />
      </CardNormal>

      <CustomModal
        modalTitle={
          rowData.isNewRecord ? 'Crear Usuario' : 'Actualizar Usuario'
        }
        openModal={openModal.modalCreate as boolean}
        setOpenModal={setOpenModal}>
        <FormUsuarios
          onSubmit={onSubmit}
          rowData={rowData}
          loadingService={loadingService}
        />
      </CustomModal>

      <DialogConfirm
        onDelete={onDeleteRow}
        title="Eliminar Usuario"
        openModal={openModal.dialogDelete}
        setOpenModal={setOpenModal}
        idRow={rowData.data.id}>
        ¿Estas seguro de eliminar este Responsable?
      </DialogConfirm> */}
    </section>
  );
};

export default Usuarios;
