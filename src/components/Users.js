import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {
  GridRowModes,
  GridActionsCellItem,
  GridRowEditStopReasons,

} from "@mui/x-data-grid";

export default function Users() {
  const handleActiveChange = (id, checked) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, active: checked } : row))
    );
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90, editable: true },
    {
      field: "Name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "Role",
      headerName: "Role",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },

    {
      field: "active",
      type: "active",
      headerName: "Active",
      width: 110,
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={(event) => handleActiveChange(params.id, event.target.checked)}
        />
      ),
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const initialRows = [
    { id: 1, Name: "Snow", Role: "Jon", age: 14 },
    { id: 2, Name: "Lannister", Role: "Cersei", age: 31 },
    { id: 3, Name: "Lannister", Role: "Jaime", age: 31 },
    { id: 4, Name: "Stark", Role: "Arya", age: 11 },

    { id: 6, Name: "Melisandre", Role: "den", age: 150 },
  ];

  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow?.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
  return (
    // <Box
    //   sx={{
    //     height: 500,
    //     width: "100%",
    //     "& .actions": {
    //       color: "text.secondary",
    //     },
    //     "& .textPrimary": {
    //       color: "text.primary",
    //     },
    //   }}
    // >
    //   <DataGrid
    //     experimentalFeatures={{ columnGrouping: true }}
    //     rows={rows}
    //     checkboxSelection
    //     columns={columns}
    //     disableRowSelectionOnClick
    //     editMode="row"
    //     rowModesModel={rowModesModel}
    //     onRowModesModelChange={handleRowModesModelChange}
    //     onRowEditStop={handleRowEditStop}
    //     processRowUpdate={processRowUpdate}
    //     slotProps={{
    //       toolbar: { setRows, setRowModesModel },
    //     }}
    //   />
    // </Box>
    <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              height: 500,
            }}
          >
            <Box
              sx={{
                height: 500,
                width: "100%",
                "& .actions": {
                  color: "text.secondary",
                },
                "& .textPrimary": {
                  color: "text.primary",
                },
              }}
            >
              <DataGrid
                experimentalFeatures={{ columnGrouping: true }}
                rows={rows}
                checkboxSelection
                columns={columns}
                disableRowSelectionOnClick
                editMode="row"
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                slotProps={{
                  toolbar: { setRows, setRowModesModel },
                }}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
