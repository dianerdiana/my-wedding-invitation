import { TableColumn } from "react-data-table-component";
import { GuestType } from "./fakeData";

export const columns: TableColumn<GuestType>[] = [
  {
    name: "Nama Lengkap",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Action",
    sortable: true,
    cell: () => <div>Data</div>,
  },
];
