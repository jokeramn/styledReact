import { useState, useEffect } from "react";
import styled from "styled-components";
import { CustomSelect } from "./CustomSelect";
import { Search } from "./Search";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media(min-width: 767px) {
    
  }
`;

export const Controls = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </div>
  );
};
