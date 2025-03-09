import {
    HoverableRow,
    Input,
    Label,
    Section,
    SectionTitle,
    TableCell,
    TableHeaderCell
} from "../styles/global.styles.ts";
import {ProductsTableProps} from "../types/ProductsTable.types.ts";
import {useProductsFilters} from "../hooks/useProductsFilters.ts";


function ProductsTable({products}: ProductsTableProps) {

    const {
        category,
        setCategory,
    } = useProductsFilters();

    const filteredProducts = category
        ? products.filter((p) =>
            p.category.toLowerCase().includes(category.toLowerCase())
        )
        : products;

    return (
        <Section>
            <SectionTitle>Top-Selling Products</SectionTitle>
            <div style={{marginBottom: '1rem', marginTop: '1rem'}}>
                <Label>Category: </Label>
                <Input
                    type="text"
                    placeholder="e.g. Bakery"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>
            <table width="100%" style={{borderCollapse: 'collapse'}}>
                <thead>
                <tr style={{textAlign: 'left'}}>
                    <TableHeaderCell align="left">Name</TableHeaderCell>
                    <TableHeaderCell align="left">Category</TableHeaderCell>
                    <TableHeaderCell align="left">Sales</TableHeaderCell>
                </tr>
                </thead>
                <tbody>
                {filteredProducts.map((prod) => (
                    <HoverableRow key={prod.id}>
                        <TableCell align="left">{prod.name}</TableCell>
                        <TableCell align="left">{prod.category}</TableCell>
                        <TableCell align="left">{prod.sales}</TableCell>
                    </HoverableRow>
                ))}
                </tbody>
            </table>
        </Section>
    );
}

export default ProductsTable;
