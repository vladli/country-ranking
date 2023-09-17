"use client";
import React, { forwardRef } from "react";
import Image from "next/image";

import { DataType } from "../page";

type Props = {
  selectedCountry: DataType | null;
  setSelectedCountry: any;
};

function CountryModal(
  { selectedCountry, setSelectedCountry }: Props,
  ref: React.ForwardedRef<HTMLDialogElement>
) {
  if (!selectedCountry) return null;
  const country = {
    "Official Name": selectedCountry.name.official,
    Capital: selectedCountry.capital,
    Area: selectedCountry.area.toLocaleString("en-US") + " km²",
    Population: selectedCountry.population.toLocaleString("en-US"),
    Region: selectedCountry.region + ` (${selectedCountry.subregion})`,
    "Internet Domain": selectedCountry.tld.join(", "),
  };
  return (
    <dialog
      className="modal"
      ref={ref}
    >
      <div className="modal-box w-[95vw] max-w-[95vw] lg:w-[70vw] 2xl:w-[50vw]">
        <form method="dialog">
          <button
            className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
            onClick={() => setSelectedCountry(null)}
          >
            ✕
          </button>
        </form>
        <h3 className="text-lg font-bold">{selectedCountry.name.common}</h3>
        <div className="m-auto flex gap-4 py-4">
          <div className="flex w-[50%] flex-col items-center gap-2 border p-1 pb-2">
            <Image
              alt=""
              className="m-auto"
              height={1100}
              priority
              src={selectedCountry.flags.svg}
              width={750}
            />
            {selectedCountry.flags.alt ? (
              <blockquote className="relative mx-auto max-w-lg text-center">
                {selectedCountry.flags.alt}
              </blockquote>
            ) : null}
          </div>
          <div className="flex flex-col">
            {Object.entries(country).map(([key, value]) => (
              <div key={key}>
                <strong>{key}:</strong> {value}
              </div>
            ))}
            <div className="flex">
              <strong>Official Language:&nbsp;</strong>
              <div className="flex flex-col">
                {Object.entries(selectedCountry.languages).map(
                  ([key, value]: any) => (
                    <div key={key}>{value}</div>
                  )
                )}
              </div>
            </div>
            <div className="flex">
              <strong>Currency:&nbsp;</strong>
              <div className="flex flex-col">
                {Object.entries(selectedCountry.currencies).map(
                  ([key, value]: any) => (
                    <div key={key}>
                      <strong>({key})&nbsp;</strong>
                      {value.name}&nbsp;
                      <strong>({value.symbol})</strong>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <form
        className="modal-backdrop"
        method="dialog"
        onClick={() => setSelectedCountry(null)}
      >
        <button>close</button>
      </form>
    </dialog>
  );
}
export default forwardRef(CountryModal);
