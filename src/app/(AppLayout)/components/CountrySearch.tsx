"use client";
import React, {ChangeEvent, useEffect, useState} from "react";
import {FiSearch} from "react-icons/fi";
import {Input} from "@heroui/react";
import {motion} from "framer-motion";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

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
        if (input == "") handleClearInput();
    }, [debouncedInputText]);

    return (
        <motion.div
            animate={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1}}
        >
            <Input
                classNames={{inputWrapper: ["bg-white"]}}
                isClearable
                onChange={handleChange}
                onClear={handleClearInput}
                placeholder="Search by country name"
                size="lg"
                startContent={<FiSearch/>}
                value={input}
                variant="bordered"
            />
        </motion.div>
    );
}
