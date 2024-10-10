import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';

import { columns, GuestListType } from './columns';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '@src/utils/hooks/useAppDispatch';
import { getAllGuestList } from '@src/redux/reducer';
import { useSelector } from 'react-redux';
import { RootState } from '@src/redux/store';

const SubHeaderComponent = ({
  filterText,
  setFilterText,
}: {
  filterText: string;
  setFilterText: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center w-2/5 border rounded-md border-gold">
        <input
          id="search"
          type="text"
          placeholder="Cari Nama..."
          aria-label="Search Input"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="w-full px-2 bg-transparent outline-none appearance-none"
        />
      </div>

      <Link to="/admin/guests/create" className="px-8 py-2 text-white rounded-md bg-gold">
        Tambah Tamu
      </Link>
    </div>
  );
};

const GuestList = () => {
  // State
  const [filterText, setFilterText] = React.useState('');

  // Hooks
  const allGuestList: GuestListType[] = useSelector((state: RootState) => state.guestList.data);
  const dispatch = useAppDispatch();

  const filteredItems = allGuestList.filter(
    (item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  useEffect(() => {
    dispatch(getAllGuestList());
  }, [dispatch]);

  return (
    <div className="bg-white rounded-md">
      <DataTable
        title="Daftar Tamu Undangan"
        columns={columns}
        data={filteredItems}
        pagination
        subHeader
        subHeaderComponent={
          <SubHeaderComponent filterText={filterText} setFilterText={setFilterText} />
        }
        selectableRows
        persistTableHead
        className="bg-black"
      />
    </div>
  );
};

export default GuestList;
