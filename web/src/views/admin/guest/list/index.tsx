import React from "react";
import DataTable from "react-data-table-component";

import { columns } from "./columns";
import { guests } from "./fakeData";
import { Link } from "react-router-dom";

const GuestList = () => {
  const [filterText, setFilterText] = React.useState("");

  const filteredItems = guests.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
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

        <Link
          to="/admin/guests/create"
          className="px-8 py-2 text-white rounded-md bg-gold"
        >
          Tambah Tamu
        </Link>
      </div>
    );
  }, [filterText]);

  return (
    <div className="bg-white rounded-md">
      <DataTable
        title="Daftar Tamu Undangan"
        columns={columns}
        data={filteredItems}
        pagination
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        selectableRows
        persistTableHead
        className="bg-black"
      />
    </div>
  );
};

export default GuestList;
