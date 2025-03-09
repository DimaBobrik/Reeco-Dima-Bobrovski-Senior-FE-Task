import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title
} from 'chart.js';
import { Label, Section, SectionTitle, Select } from "../styles/global.styles.ts";
import { SalesChartProps, SalesData, TimeframeOption } from "../types/SalesChart.types.ts";
import { useSalesFilters } from "../hooks/useSalesFilters.ts";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

function filterSalesData(allData: SalesData[], dateRange: TimeframeOption): SalesData[] {
    switch (dateRange) {
        case 'day':
            return allData.slice(-1);
        case 'week':
            return allData.slice(-2);
        case 'month':
        default:
            return allData;
    }
}

function SalesChart({ salesData }: SalesChartProps) {
    const {
        dateRange,
        setDateRange,
    } = useSalesFilters();

    const filteredData = filterSalesData(salesData, dateRange);
    const labels = filteredData.map((item) => item.date);
    const revenues = filteredData.map((item) => item.revenue);
    const data = {
        labels,
        datasets: [
            {
                label: 'Revenue',
                data: revenues,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: `Sales by ${dateRange.toUpperCase()}`
            }
        }
    };

    return (
        <Section>
            <SectionTitle>Sales Trend</SectionTitle>
            <div style={{ marginBottom: '1rem' }}>
                <Label>Date Range: </Label>
                <Select
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value as TimeframeOption)}>
                    <option value="day">Day</option>
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                </Select>
            </div>
            <Line data={data} options={options} />
        </Section>
    );
}

export default SalesChart;
