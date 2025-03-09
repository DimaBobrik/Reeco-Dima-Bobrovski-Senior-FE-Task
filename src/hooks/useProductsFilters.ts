import {useState} from "react";

export function useProductsFilters() {
    const [category, setCategory] = useState<string>('');

    return {
        category,
        setCategory,
    };
}