export interface SalesData {
    date: string;
    revenue: number;
    orders: number;
}

export interface SalesChartProps {
    salesData: SalesData[];
}

export type TimeframeOption = 'day' | 'week' | 'month';