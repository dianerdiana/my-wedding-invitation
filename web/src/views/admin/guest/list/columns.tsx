import { deleteGuestList, updateGuestList } from '@src/redux/reducer';
import { store } from '@src/redux/store';
import { useState } from 'react';
import { TableColumn } from 'react-data-table-component';
import { FaCheck, FaCopy, FaRegTrashAlt, FaWhatsapp } from 'react-icons/fa';

export type GuestListType = {
  id: number;
  name: string;
  phone?: string;
  invitationText: string;
  status: string;
};

export const columns: TableColumn<GuestListType>[] = [
  {
    name: 'Nama Tamu',
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: 'Status',
    sortable: true,
    cell: (row) => {
      const status = row.status;

      return (
        <span
          onClick={() => store.dispatch(updateGuestList({ id: row.id, status }))}
          className={`px-2 py-1 rounded-full text-xs font-semibold cursor-pointer ${
            status === 'BELUM' ? 'bg-red-200 text-red-600' : 'bg-green-200 text-green-600'
          }`}
        >
          {status}
        </span>
      );
    },
  },
  {
    name: 'Action',
    maxWidth: '180px',
    center: true,
    cell: (row) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [isCopied, setIsCopied] = useState(false);

      const copyTextToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(
          () => {
            setIsCopied(true);

            setTimeout(() => {
              setIsCopied(false);
            }, 2000);
          },
          (err) => {
            console.error('Failed to copy text: ', err);
          }
        );
      };

      return (
        <div className="flex gap-2">
          <a
            target="_blank"
            href={`https://wa.me?text=${encodeURIComponent(row.invitationText)}`}
            className="block p-[6px] bg-green-600 rounded-md"
          >
            <FaWhatsapp className="w-3 h-3 text-white" />
          </a>
          <button
            className="p-[6px] rounded-md bg-amber-500"
            onClick={() => copyTextToClipboard(row.invitationText)}
          >
            {isCopied ? (
              <FaCheck className="w-3 h-3 text-white" />
            ) : (
              <FaCopy className="w-3 h-3 text-white" />
            )}
          </button>
          <button
            className="p-[6px] bg-red-600 rounded-md"
            onClick={() => store.dispatch(deleteGuestList(row.id))}
          >
            <FaRegTrashAlt className="w-3 h-3 text-white" />
          </button>
        </div>
      );
    },
  },
];
