import React, { useMemo, useState } from "react";
import styles from "styles/Layout.module.scss";

import {
  ActionsButtonsTable,
  CardNormal,
  CustomButton,
  CustomModal,
  DialogConfirm,
  Table,
} from "components/index";
import { useAlert } from "hooks/useAlert";
import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { differenceInCalendarYears, parse } from "date-fns";
import { TOpenModals, TPageState } from "types";
import { Typography } from "@mui/material";
import FormDashboard from "./components/FormDashboard/FormDashboard";

const Dashboard = () => {
  const { openAlert } = useAlert();
  const initialDatarow = {
    id: "",
    firstName: "",
    lastName: "",
    identity: "",
    birthDate: "",
    gender: "",
    email: "",
    phone: "",
  };
  const [openModal, setOpenModal] = useState<TOpenModals>({
    modalCreate: false,
    dialogDelete: false,
  });
  const [loadingService, setLoadingService] = useState<boolean>(false);

  const [rowData, setRowData] = useState({
    data: initialDatarow,
    isNewRecord: true,
  });

  const [pageState, setPageState] = React.useState<TPageState>({
    isLoading: false,
    data: [],
    total: 0,
    page: 0,
    pageSize: 5,
  });

  const handleCreate = () => {
    setOpenModal({ modalCreate: true });
    setRowData({ data: initialDatarow, isNewRecord: true });
  };
  const handleEditRow = (dataRow: GridCellParams) => () => {
    setOpenModal({ modalCreate: true });
    setRowData({ data: dataRow.row, isNewRecord: false });
  };

  const handleDeleteRow = (dataRow: GridCellParams) => () => {
    setOpenModal({ dialogDelete: true });
    setRowData({ data: dataRow.row, isNewRecord: false });
  };

  const onSubmit = async (data: any) => {
    try {
      // setLoadingService(true);
      // const id = payload.id;
      // delete payload.id;
      // if (rowData.isNewRecord) {
      //   await createFundacitesServices({ payload: payload, authRequire: true, });
      //   openAlert('Creacion realizada exitosamente')
      // } else {
      //   await updateFundacitesServices({ payload: payload, params: id ,   authRequire: true,});
      //   openAlert('Modificacion realizada exitosamente')
      // }
    } catch (err) {
      openAlert("error en en la operación", { variant: "error" });
    } finally {
      setLoadingService(false);
      setOpenModal({ modalCreate: false });
    }
  };

  const onDeleteRow = async (id: unknown) => {
    try {
      setLoadingService(true);
    } catch (err) {
      openAlert("error en en la operación", { variant: "error" });
    } finally {
      setLoadingService(false);
      setOpenModal({ dialogDelete: false });
    }
  };

  const columns: GridColDef[] = useMemo(
    () => [
      { field: "id", headerName: "ID", width: 20 },
      { field: "firstName", headerName: "Nombre", width: 180 },
      { field: "lastName", headerName: "Apellido", width: 180 },
      { field: "identity", headerName: "Cedula", width: 180 },
      {
        field: "birthDate",
        headerName: "Edad",
        width: 50,
        renderCell: (params) => {
          return differenceInCalendarYears(
            new Date(),
            parse(params.value, "yyyy-dd-mm", new Date())
          );
        },
      },
      {
        field: "gender",
        headerName: "Genero",
        width: 80,
        renderCell: (params) => {
          return params.row.gender ? "Masculino" : "Femenino";
        },
      },
      { field: "email", headerName: "Correo", width: 180 },
      { field: "phone", headerName: "Telefono", width: 140 },
      {
        field: "actions",
        headerName: "Acciones",
        renderCell: (params) => (
          <ActionsButtonsTable
            handleEditRow={handleEditRow(params)}
            handleDeleteRow={handleDeleteRow(params)}
          />
        ),
        sortable: false,
        width: 100,
        headerAlign: "center",
        filterable: false,
        align: "center",
        disableColumnMenu: true,
        disableReorder: true,
      },
    ],
    []
  );

  return (
    <section>
      <div className={styles["modules__header"]}>
        <Typography className={styles["page-title"]} component="h1">
          Coordinación de deporte - Estudiantes
        </Typography>
        <CustomButton
          typeVariant="contained"
          label="Agregar estudiante +"
          onClick={handleCreate}
          className={styles["button-header"]}
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
          rowData.isNewRecord
            ? "Crear estudiante"
            : "Actualizar datos del estudiante"
        }
        openModal={openModal.modalCreate as boolean}
        setOpenModal={setOpenModal}
      >
        <FormDashboard />
      </CustomModal>
      <DialogConfirm
        onDelete={onDeleteRow}
        title="Eliminar"
        openModal={openModal.dialogDelete}
        setOpenModal={setOpenModal}
        idRow={rowData.data.id}
      >
        ¿Estas seguro de eliminar?
      </DialogConfirm>
    </section>
  );
};

export default Dashboard;
