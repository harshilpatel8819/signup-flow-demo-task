// Importing necessary modules and functions from react-table and React
import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import { defaultData } from "./data";
import { Link } from "react-router-dom";

// Custom hook for managing state and behavior on the Dashboard page
const useDashboardPage = () => {
  // State for sorting configuration and data
  const [sorting, setSorting] = useState<SortingState>([]);
  const [data] = useState(() => [...defaultData]);

  // Creating a column helper instance
  const columnHelper = createColumnHelper<any>();

  // Definition of columns for the table
  const columns = [
    columnHelper.accessor("check", {
      enableSorting: false,
      cell: () => (
        <div className="form-check form-check-sm form-check-custom form-check-solid me-3 ">
          <input className="form-check-input" type="checkbox" value="1" />
        </div>
      ),
      header: () => (
        <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
          <input className="form-check-input" type="checkbox" value="1" />
        </div>
      ),
    }),
    // Column for 'id'
    columnHelper.accessor("id", {
      cell: (info) => <strong>{info.getValue()}</strong>,
    }),

    // Column for 'dateRemoved'
    columnHelper.accessor((row) => row.dateRemoved, {
      id: "dateRemoved",
      cell: (info) => <span className="text-muted">{info.getValue()}</span>,
      header: () => <span>Date Removed</span>,
    }),

    // Column for 'link'
    columnHelper.accessor("link", {
      header: () => "Link",
      cell: (info) => (
        <Link to={info.renderValue()} target="_blank">
          {info.renderValue()}
        </Link>
      ),
    }),

    // Column for 'source'
    columnHelper.accessor("source", {
      header: () => <span>Source</span>,
      footer: (info) => info.column.id,
    }),

    // Column for 'action'
    columnHelper.accessor("action", {
      header: "Action",
      cell: (info) => (
        <div className="badge badge-light-success text-right">
          {info.renderValue()}
        </div>
      ),
    }),
  ];

  // Using the useReactTable hook to get table instance
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  // Returning the table instance
  return { table };
};

// Exporting the custom hook
export default useDashboardPage;
