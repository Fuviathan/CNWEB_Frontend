import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductByBrand } from "@/state/Products/Action";

const columns = [
  { field: "no", headerName: "No", minWidth: 250 },
  { field: "id", headerName: "Id", minWidth: 250 },
  {
    field: "name",
    headerName: "Name",
    minWidth: 250,
  },
  {
    field: "action",
    headerName: "Action",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    minWidth: 250,
    renderCell: (params) => (
      <button
        onClick={() => {
          console.log(params);
        }}
        className="fs-3 text-danger ms-3 bg-transparent border-0 mx-4 bg-black"
      >
        Edit
      </button>
    ),

    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function ListBrand() {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state?.admin?.brands || []);

  const dataTable = [];
  for (let i = 0; i < brands?.length; i++) {
    dataTable.push({
      no: i + 1,
      id: brands[i]._id,
      name: brands[i].title,
    });
  }

  console.log(dataTable);
  useEffect(() => {
    dispatch(getProductByBrand());
  }, []);
  return (
    <div className="px-5 ">
      <div>Brand List</div>
      <div className="bg-white" style={{ height: "100%", width: "100%" }}>
        <DataGrid
          className=""
          rows={dataTable}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
