"use client"

import * as React from "react"

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { RefreshCw } from "lucide-react"
import { useRouter } from "next/navigation"

type TradeType = "buy" | "sell"


interface IActivityTable{
    id: number;
    accountAddress: string;
    type: TradeType;
    ticker: string;
    liquidity: string;
    amount: string
    date: string;
    transactionHash: string;
}

interface ITradesDataListResponse {
  result: IActivityTable[];
  totalCount: number;
}

export const columns: ColumnDef<IActivityTable>[] = [
  {
    accessorKey: "accountAddress",
    header: () => (
      <div className="flex justify-start items-center gap-[6px] text-slate-400 text-sm font-bold">
        Account
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-slate-500 text-sm font-bold">{(row.getValue("accountAddress") as string).slice(0, 6)}</div>
    ),
  },
  {
    accessorKey: "type",
    header: () => (
      <div className="flex justify-start items-center gap-[6px] text-slate-400 text-sm font-bold">
        Type
      </div>
    ),
    cell: ({ row }) => {
      const buyAndCellColor = row.getValue("type") === "buy" ? "text-green-400" : "text-red-400"
      return <div className={`${buyAndCellColor} text-sm font-bold`}>{row.getValue("type")}</div>

    },
  },
  {
    accessorKey: "suiAmount",
    header: () => (
      <div className="flex justify-start items-center gap-[6px] text-slate-400 text-sm font-bold">
        Ticker
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-slate-500 text-sm font-bold">ticker</div>
    ),
  },
  {
    accessorKey: "Liquidity",
    header: () => (
      <div className="flex justify-start items-center gap-[6px] text-slate-400 text-sm font-bold">
        Liquidity
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-slate-500 text-sm font-bold">20.53k</div>
    ),
  },
  {
    accessorKey: "updatedAt",
    header: () => (
      <div className="flex justify-start items-center gap-[6px] text-slate-400 text-sm font-bold">
        Date <RefreshCw />
      </div>
    ),
    cell: ({ row }) => (

      <div className="text-slate-500 text-sm font-bold">{"20m ago"}</div>
    ),
  },
  {
    accessorKey: "transactionHash",
    header: () => <div className="text-right text-slate-400 text-sm font-bold">Transaction</div>,
    cell: ({ row }) => (
      <div className="flex justify-end text-slate-500 text-sm font-bold">{(row.getValue("transactionHash") as string).slice(0, 6)}</div>
    ),
  },
];

export const ActivityTable = ({ data }: { data: IActivityTable[] }) => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: 11, // 페이지당 최대 row 개수
      },
    },
  });
const router = useRouter()
  return (
    <>
      <div>
        <Table>
          <TableHeader className="text-white bg-slate-900 border-b-0" >
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-b-0">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                
                  className="border-b-[1px] border-indigo-950 hover:bg-indigo-950 text-slate"
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                    onClick={()=>{
                      router.push("/profile")
                    }}
                    className="cursor-pointer"
                      key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="w-full h-[29px]" />
      </div>

    </>
  )
}
