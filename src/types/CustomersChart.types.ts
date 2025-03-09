export interface CustomerData {
    state: string;
    customers: number;
}

export interface CustomersChartProps {
    customers: CustomerData[];
}