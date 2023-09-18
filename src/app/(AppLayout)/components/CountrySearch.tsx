"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
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
    <div className="relative max-w-xs">
      <input
        className="input input-bordered w-full"
        onChange={(e) => handleChange(e)}
        placeholder="Type here"
        type="text"
        value={input}
      />
      <button
        className="btn btn-circle btn-ghost btn-sm absolute right-1 top-1/2"
        onClick={handleClearInput}
        style={{ transform: "translateY(-50%)" }}
      >
        X
      </button>
    </div>
  );
}
