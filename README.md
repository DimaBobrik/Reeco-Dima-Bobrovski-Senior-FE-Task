# Sales Dashboard Application

## 📌 Project Overview

This project is a Sales Dashboard built with React, TypeScript, and styled-components. It provides visual insights into sales performance, orders, products, and customer data, utilizing various interactive charts and tables.

## 🚀 Features

- **Interactive Charts:** Visualize sales data over different timeframes (daily, weekly, monthly).
- **Filtering & Sorting:** Filter products by category and search and sort orders by various fields.
- **Pagination:** Navigate through paginated order lists.
- **Reusable Styled Components:** Consistent styling and easy maintenance.
- **State Management:** Utilizes custom hooks for cleaner code.
- **API Integration:** Fetches data asynchronously using TanStack Query (`@tanstack/react-query`).

## ⚙️ Technologies Used

- React
- TypeScript
- styled-components
- TanStack React Query
- Chart.js / React Chart.js 2
- JSON Server (for mock API data)

## 📁 Project Structure

```
src/
├── api/
│   └── index.ts
├── components/
│   ├── CustomersChart.tsx
│   ├── OrdersTable.tsx
│   ├── ProductsTable.tsx
│   ├── SalesChart.tsx
│   └── Dashboard.tsx
├── hooks/
│   ├── useOrdersFilters.ts
│   ├── useProductsFilters.ts
│   └── useSalesFilters.ts
├── types/
│   ├── CustomersChart.types.ts
│   ├── OrdersTable.types.ts
│   ├── SalesChart.types.ts
│   ├── ProductsTable.types.ts
│   └── Dashboard.types.ts
└── styles/
    ├── global.styles.ts
    ├── CustomersChart.styles.ts
    ├── globalStyles.ts
    └── Dashboard.styles.ts
```

## 🛠️ Getting Started

### Installation

Clone this repository and install dependencies:

```bash
npm install
```

### Running JSON Server

Start the mock backend API using JSON server:

```bash
json-server --watch data/db.json --port 3001
```

### Running the Development Server

Start the React development server:

```bash
npm run dev
```

## 📃 JSON Server Data

The JSON Server provides mock data in `db.json`, structured as follows:

```json
{
  "sales": { /* sales data */ },
  "products": [ /* products array */ ],
  "customers": [ /* customers array */ ],
  "orders": [ /* orders array */ ]
}
```

## 🖥️ Usage

Access the dashboard in your browser at:

```
http://localhost:5173
```

- Use filters at the top of each section to refine displayed data.
- Navigate pages of orders using provided pagination controls.
- Interact with charts and tables to gain insights into the data.