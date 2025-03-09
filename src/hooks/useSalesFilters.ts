import {useState} from 'react';
import {TimeframeOption} from "../types/SalesChart.types.ts";

export function useSalesFilters() {
    const [dateRange, setDateRange] = useState<TimeframeOption>('day');

    return {
        dateRange,
        setDateRange,
    };
}
