import React, { Suspense } from 'react';
import { Chart as ChartJS, ArcElement, Legend } from 'chart.js';
import { CustomersChartProps } from "../types/CustomersChart.types.ts";
import { CustomerContainer } from "../styles/CustomersChart.styles.ts";
import { SectionTitle } from "../styles/global.styles.ts";

const Pie = React.lazy(() => import('react-chartjs-2').then(module => ({ default: module.Pie })));

ChartJS.register(ArcElement, Legend);

function CustomersChart({ customers }: CustomersChartProps) {
    const labels = customers.map((customer) => customer.state);
    const dataCounts = customers.map((customer) => customer.customers);

    const data = {
        labels,
        datasets: [
            {
                label: 'Customers',
                data: dataCounts,
                backgroundColor: [
                    '#FF6384', // Red
                    '#36A2EB', // Blue
                    '#FFCE56', // Yellow
                    '#4BC0C0', // Green
                    '#9966FF', // Purple
                    '#FF9F40', // Orange
                    '#FF6384', // Red
                    '#36A2EB', // Blue
                    '#FFCE56', // Yellow
                    '#4BC0C0'  // Green
                ]
            }
        ]
    };

    return (
        <CustomerContainer>
            <SectionTitle>Customers by State</SectionTitle>
            <Suspense fallback={<div>Loading...</div>}>
                <Pie data={data} />
            </Suspense>
        </CustomerContainer>
    );
}

export default CustomersChart;
