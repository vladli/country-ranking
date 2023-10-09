"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Input } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import useDebounce from "@/hooks/useDebounce";

export default function CountrySearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [input, setInput] = useState(
    searchParams.get("country")?.toString() || ""
  );
  const debouncedInputText = useDebounce(input, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const handleClearInput = () => {
    setInput("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("country");
    router.push(pathname);
  };
  useEffect(() => {
    if (input !== "") {
      const params = new URLSearchParams(searchParams.toString());
      params.set("country", debouncedInputText);
      router.push(pathname + "?" + params.toString());
    }
  }, [debouncedInputText]);

  return (
    <Input
      classNames={{ inputWrapper: ["bg-white"] }}
      isClearable
      onChange={handleChange}
      onClear={handleClearInput}
      placeholder="Search by country name"
      size="lg"
      startContent={<FiSearch />}
      value={input}
      variant="bordered"
    />
  );
}
