import {
    HoverableRow,
    Input,
    Section,
    SectionTitle,
    Select,
    TableCell,
    TableHeaderCell
} from "../styles/global.styles.ts";
import { useOrdersFilters } from "../hooks/useOrdersFilters.ts";
import { OrderProps, SortDirection, SortField } from "../types/OrdersTable.types.ts";


function OrdersTable({ orders }: OrderProps) {

    const {
        searchTerm,
        setSearchTerm,
        sortField,
        setSortField,
        sortDirection,
        setSortDirection,
        filteredAndSortedOrders
    } = useOrdersFilters(orders || []);

    return (
        <Section>
            <SectionTitle>Orders</SectionTitle>
            <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                <Input
                    type="text"
                    placeholder="Search by ID, customer, or status..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Select
                    value={sortField}
                    onChange={(e) => setSortField(e.target.value as SortField)}
                >
                    <option value="orderId">Sort by Order ID</option>
                    <option value="customer">Sort by Customer</option>
                    <option value="amount">Sort by Amount</option>
                    <option value="status">Sort by Status</option>
                    <option value="date">Sort by Date</option>
                </Select>
                <Select
                    value={sortDirection}
                    onChange={(e) => setSortDirection(e.target.value as SortDirection)}
                >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </Select>
            </div>

            {/* Render the table */}
            <table width="100%" style={{ borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <TableHeaderCell>Order ID</TableHeaderCell>
                        <TableHeaderCell>Customer</TableHeaderCell>
                        <TableHeaderCell>Amount</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                        <TableHeaderCell>Date</TableHeaderCell>
                    </tr>
                </thead>
                <tbody>
                    {filteredAndSortedOrders.map((order) => (
                        <HoverableRow key={order.orderId}>
                            <TableCell>
                                {order.orderId}
                            </TableCell>
                            <TableCell>{order.customer}</TableCell>
                            <TableCell>${order.amount.toFixed(2)}</TableCell>
                            <TableCell>{order.status}</TableCell>
                            <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                        </HoverableRow>
                    ))}
                </tbody>
            </table>
        </Section>
    );
}

export default OrdersTable;
