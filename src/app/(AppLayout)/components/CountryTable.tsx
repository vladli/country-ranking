"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { DataType } from "../page";

import CountryModal from "./CountryModal";

export default function CountryTable({
  data,
}: {
  data: DataType[] | undefined;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selectedCountry, setSelectedCountry] = useState<DataType | null>(null);
  useEffect(() => {
    if (selectedCountry) dialog.current?.showModal();
  }, [selectedCountry]);

  return (
    <div className="overflow-x-auto">
      <table className="table max-md:table-xs">
        {/* head */}
        <thead className="text-white">
          <tr>
            <th></th>
            <th>Country Code</th>
            <th>Name</th>
            <th>Capital</th>
            <th>Area (km²)</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {/* row */}
          {data?.map((country) => (
            <tr
              className="hover cursor-pointer"
              key={country.name.common}
              onClick={() => setSelectedCountry(country)}
            >
              <td>
                <div className="h-4 w-8">
                  {
                    <Image
                      alt=""
                      height={1100}
                      priority
                      src={country.flags.svg}
                      width={750}
                    />
                  }
                </div>
              </td>
              <td>{country.cca3}</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <span className="font-bold">{country.name.common}</span>
                    {country.name.official ? (
                      <span className="text-sm opacity-50">
                        {country.name.official}
                      </span>
                    ) : null}
                  </div>
                </div>
              </td>
              <td>{country.capital}</td>
              <td>{country.area.toLocaleString("en-US")}</td>
              <td>{country.population.toLocaleString("en-US")}</td>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot className="text-white">
          <tr>
            <th></th>
            <th>Country Code</th>
            <th>Name</th>
            <th>Capital</th>
            <th>Area (km²)</th>
            <th>Population</th>
          </tr>
        </tfoot>
      </table>
      <CountryModal
        ref={dialog}
        {...{ selectedCountry, setSelectedCountry }}
      />
    </div>
  );
}
