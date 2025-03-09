const BASE_URL = 'http://localhost:3001';

export async function fetchSales() {
    const response = await fetch(`${BASE_URL}/sales`);
    if (!response.ok) throw new Error('Failed to fetch sales');
    return response.json();
}

export async function fetchProducts() {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
}

export async function fetchCustomers() {
    const response = await fetch(`${BASE_URL}/customers`);
    if (!response.ok) throw new Error('Failed to fetch customers');
    return response.json();
}

export async function fetchAllOrders() {
    const response = await fetch('http://localhost:3001/orders');
    if (!response.ok) {
        throw new Error('Failed to fetch orders');
    }

    return await response.json();
}


