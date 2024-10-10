import { deleteGuestList } from '@src/redux/reducer';
import { store } from '@src/redux/store';
import { TableColumn } from 'react-data-table-component';
import { FaRegTrashAlt, FaWhatsapp } from 'react-icons/fa';

export type GuestListType = {
  id: number;
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
    cell: (row) => {
      return (
        <div className="flex gap-2">
          <a
            target="_blank"
            href={`https://wa.me?text=${encodeURIComponent(row.invitationText)}`}
            className="block p-2 bg-green-600 rounded-md"
          >
            <FaWhatsapp className="w-4 h-4 text-white" />
          </a>
          <button
            className="p-2 bg-red-600 rounded-md"
            onClick={() => store.dispatch(deleteGuestList(row.id))}
          >
            <FaRegTrashAlt className="w-4 h-4 text-white" />
          </button>
        </div>
      );
    },
  },
];
