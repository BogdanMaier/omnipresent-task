import React, { createContext, ReactNode, useState } from "react";
import { CountryContextState } from "./types";
import { SUPPORTED_COUNTRIES } from "../../Constants";


const contextDefaultValues: CountryContextState = {
    countries: SUPPORTED_COUNTRIES,
    selected: null,
    select: (country: string) => {},
};

export const CountryContext = createContext<CountryContextState>(contextDefaultValues);

const CountryProvider: React.FC = ({ children }) => {
    const [selected, setSelected] = useState<string | null>(contextDefaultValues.selected);

    const select = (country: string) => {
        setSelected(country)
    }
    return (
        <CountryContext.Provider
            value={{
                countries: SUPPORTED_COUNTRIES,
                selected,
                select
            }}
        >
            {children}
        </CountryContext.Provider>
    );
};

export default CountryProvider;
