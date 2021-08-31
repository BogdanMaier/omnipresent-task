export type CountryContextState = {
    countries: string[];
    selected: string | null;
    select: (country: string) => void;
};

