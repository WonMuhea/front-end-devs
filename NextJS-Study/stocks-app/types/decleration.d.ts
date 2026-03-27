declare module 'react-select-country-list' {
    interface CountryList {
        getData: () => { label: string; value: string }[];
        getValue: (label: string) => string | undefined;
        getLabel: (value: string) => string | undefined;
        getLabels: () => string[];
        getValues: () => string[];
    }

    const countryList: () => CountryList;
    export default countryList;
}