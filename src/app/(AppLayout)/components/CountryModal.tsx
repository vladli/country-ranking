"use client";
import React, { useState } from "react";
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { motion } from "framer-motion";
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
  const [loaded, setLoaded] = useState(false);

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
      backdrop="blur"
      isOpen={isOpen}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
      onClose={() => setLoaded(false)}
      onOpenChange={onOpenChange}
      scrollBehavior="inside"
      size="2xl"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>{selectedCountry.name.common}</ModalHeader>
            <ModalBody>
              <Tabs
                aria-label="Options"
                className="justify-center"
                size="lg"
              >
                <Tab
                  key="flag"
                  title="Flag"
                >
                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative flex h-[20rem] w-[100%]">
                      <Image
                        alt=""
                        className="m-auto select-none object-contain"
                        fill
                        priority
                        src={selectedCountry.flags.svg}
                      />
                    </div>
                    {selectedCountry.flags.alt ? (
                      <blockquote className="mx-auto rounded-lg border bg-zinc-100 p-2">
                        {selectedCountry.flags.alt}
                      </blockquote>
                    ) : null}
                  </motion.div>
                </Tab>
                {selectedCountry.coatOfArms.svg ? (
                  <Tab
                    key="coatOfArms"
                    title="Coat Of Arms"
                  >
                    <motion.div
                      animate={{ opacity: 1, y: 0 }}
                      className="relative flex h-[20rem] w-[100%]"
                      initial={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                    >
                      {!loaded ? (
                        <Spinner
                          className="flex w-full justify-center"
                          label="Loading..."
                          size="lg"
                        />
                      ) : null}
                      <Image
                        alt=""
                        className="m-auto select-none object-contain"
                        fill
                        onLoad={() => setLoaded(true)}
                        priority
                        src={selectedCountry.coatOfArms.svg}
                      />
                    </motion.div>
                  </Tab>
                ) : null}
              </Tabs>

              <Divider />
              <div>
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
