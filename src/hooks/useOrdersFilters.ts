import { useState, useMemo } from 'react';
import { Order, SortField, SortDirection } from '../types/OrdersTable.types';

export function useOrdersFilters(orders: Order[]) {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortField, setSortField] = useState<SortField>('date');
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

    const filteredAndSortedOrders = useMemo(() => {
        const directionMultiplier = sortDirection === 'asc' ? 1 : -1;

        const term = searchTerm.trim().toLowerCase();

        const filtered = !term
            ? orders
            : orders.filter((o) =>
                [o.orderId, o.customer, o.status].some((field) =>
                    field.toLowerCase().includes(term)
                )
            );

        return filtered.sort((a, b) => {
            switch (sortField) {
                case 'orderId':
                    return directionMultiplier * a.orderId.localeCompare(b.orderId);
                case 'customer':
                    return a.customer.localeCompare(b.customer) * directionMultiplier;
                case 'amount':
                    return (a.amount - b.amount) * directionMultiplier;
                case 'status':
                    return a.status.localeCompare(b.status) * directionMultiplier;
                case 'date':
                    return (
                        (new Date(a.date).getTime() - new Date(b.date).getTime()) * directionMultiplier
                    );
                default:
                    return 0;
            }
        });
    }, [orders, searchTerm, sortField, sortDirection]);

    return {
        searchTerm,
        setSearchTerm,
        sortField,
        setSortField,
        sortDirection,
        setSortDirection,
        filteredAndSortedOrders,
    };
}
