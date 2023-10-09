"use client";
import React, { forwardRef } from "react";
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import Image from "next/image";

import { DataType } from "../page";

type Props = {
  selectedCountry?: DataType | null;
  isOpen: boolean;
  onOpenChange: () => void;
};

export default function CountryModal({
  selectedCountry,
  isOpen,
  onOpenChange,
}: Props) {
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
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="2xl"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="">
              {selectedCountry.name.common}
            </ModalHeader>
            <ModalBody>
              <Image
                alt=""
                className="m-auto select-none rounded-lg border"
                height={1100}
                priority
                src={selectedCountry.flags.svg}
                width={750}
              />

              {selectedCountry.flags.alt ? (
                <blockquote className="mx-auto rounded-lg border bg-zinc-100 p-2">
                  {selectedCountry.flags.alt}
                </blockquote>
              ) : null}
              <Divider />
              <div className="flex flex-col">
                {Object.entries(country).map(([key, value]) => (
                  <p key={key}>
                    <strong>{key}:</strong> {value}
                  </p>
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
            </ModalBody>
            <ModalFooter>
              <Button
                className="w-full"
                color="danger"
                onPress={onClose}
                variant="light"
              >
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
