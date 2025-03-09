export interface Product {
    id: number;
    name: string;
    category: string;
    sales: number;
}

export interface ProductsTableProps {
    products: Product[];
}

export interface TableCellProps {
    align?: 'left' | 'center' | 'right';
}