import React from "react";
import Image from "next/image";

import { DataType } from "../page";

export default function CountryTable({ data }: { data: DataType | undefined }) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
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
            >
              <td>
                {
                  <Image
                    alt=""
                    height={32}
                    src={country.flags.svg}
                    width={32}
                  />
                }
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
    </div>
  );
}
