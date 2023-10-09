import React from "react";

import CountrySearch from "./components/CountrySearch";
import CountryTable from "./components/CountryTable";

export type DataType = {
  cca3: string;
  name: {
    common: string;
    official: string;
  };
  capital: string;
  flags: {
    svg: string;
    png: string;
    alt?: string;
  };

  area: number;
  population: number;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  region: string;
  subregion: string;
  tld: string[];
};

async function getCountryList(): Promise<DataType[] | undefined> {
  const options = {
    url: "https://restcountries.com/v3.1/all?fields=tld,name,flags,cca3,capital,area,population,currencies,region,subregion,languages",
  };
  try {
    const response = await fetch(options.url);
    if (response.status === 200) {
      const data = await response.json();
      data.sort((a: any, b: any) => {
        const nameA = a.name.common.toUpperCase();
        const nameB = b.name.common.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      return data;
    }
    throw new Error(`Failed to fetch data. Status: ${response.status}`);
  } catch (error) {
    console.error(error);
  }
}

type Props = {
  searchParams: {
    country?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const { country } = searchParams;
  let data = await getCountryList();
  if (country !== undefined && country !== "") {
    const countryLowerCase = country.toLowerCase();
    data = data?.filter((item) =>
      item.name.common.toLowerCase().includes(countryLowerCase)
    );
  }
  return (
    <main className="w-full p-4">
      <CountrySearch />
      <CountryTable {...{ data }} />
    </main>
  );
}
