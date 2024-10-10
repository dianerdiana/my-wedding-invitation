import { TableColumn } from 'react-data-table-component';

export type GuestListType = {
  name: string;
  phone?: string;
  invitationText: string;
};

export const columns: TableColumn<GuestListType>[] = [
  {
    name: 'Nama Tamu',
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: 'Action',
    maxWidth: '180px',
    center: true,
    cell: () => <div>Data</div>,
  },
];
