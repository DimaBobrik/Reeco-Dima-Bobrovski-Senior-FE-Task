export interface Order {
    orderId: string;
    customer: string;
    amount: number;
    status: OrderStatus;
    date: Date;
}

export interface OrderProps {
    orders: Order[];
}

export type SortField = 'orderId' | 'customer' | 'amount' | 'status' | 'date';
export type SortDirection = 'asc' | 'desc';
export type OrderStatus = 'pending' | 'completed' | 'cancelled' | 'shipped';