"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Chip,
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  useDisclosure,
  User,
} from "@nextui-org/react";
import Image from "next/image";

import { DataType } from "../page";

import CountryModal from "./CountryModal";

const columns = [
  { name: "", uid: "flags.svg" },
  { name: "Country Code", uid: "cca3" },
  { name: "Name", uid: "name.common" },
  { name: "Capital", uid: "capital" },
  { name: "Area (km²)", uid: "area" },
  { name: "Population", uid: "population" },
];

export default function CountryTable({
  data,
}: {
  data: DataType[] | undefined;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [selectedCountry, setSelectedCountry] = useState<DataType | null>(null);
  const [sortDescriptor, setSortDescriptor] = useState<
    SortDescriptor | undefined
  >({ column: "name.common", direction: "ascending" });
  const handleClick = (item: DataType) => {
    setSelectedCountry(item);
    onOpen();
  };

  const renderCell = React.useCallback((data: any, columnKey: React.Key) => {
    const cellValue = columnKey
      .toString()
      .split(".")
      .reduce((obj, key) => obj?.[key], data);
    switch (columnKey) {
      case "flags.svg":
        return (
          <div className="h-4 w-8">
            {
              <Image
                alt=""
                className="rounded-sm"
                height={1100}
                priority
                src={cellValue}
                width={750}
              />
            }
          </div>
        );
      case "name.common":
        return (
          <div className="flex flex-col">
            <p className="text-sm font-semibold capitalize">{cellValue}</p>
            <p className="text-sm font-semibold capitalize text-default-400">
              {data.name.official}
            </p>
          </div>
        );
      case "area":
      case "population":
        return cellValue.toLocaleString("en-US");
      default:
        return cellValue;
    }
  }, []);
  const sortFunction = (
    items: DataType[] | undefined,
    sortDescriptor: SortDescriptor
  ) => {
    const { column, direction } = sortDescriptor;
    const getColumnValue = (item: DataType) => {
      if (column === "capital") return item.capital[0];
      return column
        ?.toString()
        .split(".")
        .reduce((obj: any, key: string) => obj?.[key], item);
    };
    return [...(items as DataType[])]?.sort((a, b) => {
      const valueA = getColumnValue(a);
      const valueB = getColumnValue(b);
      if (typeof valueA === "number" && typeof valueB === "number") {
        return (direction === "ascending" ? 1 : -1) * (valueA - valueB);
      } else if (typeof valueA === "string" && typeof valueB === "string") {
        return direction === "ascending"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }
      return 0;
    });
  };

  const sortedData = sortDescriptor
    ? sortFunction(data, sortDescriptor)
    : data || [];
  return (
    <>
      <Table
        aria-label="Country App"
        className="mt-2 select-none"
        onSortChange={setSortDescriptor}
        sortDescriptor={sortDescriptor}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              allowsSorting={
                column.uid === "name.common" ||
                column.uid === "capital" ||
                column.uid === "area" ||
                column.uid === "population"
              }
              key={column.uid}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={sortedData}>
          {(item) => (
            <TableRow
              className="cursor-pointer hover:bg-zinc-100"
              key={item.cca3}
              onClick={() => handleClick(item)}
            >
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <CountryModal
        {...{
          selectedCountry,
          isOpen,
          onOpenChange,
        }}
      />
    </>
  );
}
