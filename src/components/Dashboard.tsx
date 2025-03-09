import { useQuery } from '@tanstack/react-query';
import { fetchSales, fetchProducts, fetchCustomers, fetchAllOrders } from '../api';
import SalesChart from './SalesChart';
import ProductsTable from './ProductsTable';
import CustomersChart from './CustomersChart';
import OrdersTable from './OrdersTable';
import { DashboardContainer, Heading, KPIBlock, KPIContainer, Paragraph } from "../styles/Dashboard.styles.ts";
import { SectionTitle } from "../styles/global.styles.ts";
import { SalesData } from "../types/SalesChart.types.ts";
import { Product } from "../types/ProductsTable.types.ts";
import { CustomerData } from '../types/CustomersChart.types.ts';
import { Order } from '../types/OrdersTable.types.ts';

function Dashboard() {
    const {
        data,
        isLoading,
        isError
    } = useQuery<{
        salesData: {
            totalRevenue: number;
            totalOrders: number;
            averageOrderValue: number;
            salesByDay: SalesData[];
        },
        productsData: Product[],
        customersData: CustomerData[],
        orders: Order[]
    }>({
        queryKey: ['dashboardData'],
        queryFn: async () => {
            const [salesData, productsData, customersData, orders] = await Promise.all([
                fetchSales(),
                fetchProducts(),
                fetchCustomers(),
                fetchAllOrders()
            ]);
            return { salesData, productsData, customersData, orders };
        }
    });

    if (isLoading || !data) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading data!</div>;
    }

    const { salesData, productsData, customersData, orders } = data;
    const { totalRevenue, totalOrders, averageOrderValue } = salesData;

    return (
        <DashboardContainer>
            <Heading>Sales Dashboard</Heading>
            <KPIContainer>
                <KPIBlock bgcolor="#ffcccc">
                    <SectionTitle>Total Revenue</SectionTitle>
                    <Paragraph>${totalRevenue.toLocaleString()}</Paragraph>
                </KPIBlock>
                <KPIBlock bgcolor="#ccffcc">
                    <SectionTitle>Total Orders</SectionTitle>
                    <Paragraph>{totalOrders.toLocaleString()}</Paragraph>
                </KPIBlock>
                <KPIBlock bgcolor="#ccccff">
                    <SectionTitle>Average Order Value</SectionTitle>
                    <Paragraph>${averageOrderValue.toFixed(2)}</Paragraph>
                </KPIBlock>
            </KPIContainer>
            <SalesChart salesData={salesData.salesByDay} />
            <ProductsTable products={productsData} />
            <CustomersChart customers={customersData} />
            {!orders || orders.length === 0
                ? <div>No orders found</div>
                : <OrdersTable orders={orders} />}
        </DashboardContainer>
    );
}

export default Dashboard;
