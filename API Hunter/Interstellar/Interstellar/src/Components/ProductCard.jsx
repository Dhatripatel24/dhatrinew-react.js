import { Link } from "react-router-dom";

export default function ProductCard({
    brand,
    category,
    price,
    id
}) {
    return (
        <tr data-testid="item">
            <td>{id}</td>
            <td>
                <Link to={`/product/${id}`} data-testid="brand" style={{textDecoration:"none",color:"#4cae51"}}>{brand}</Link>
            </td>
            <td data-testid="category">
                {category}
            </td>
            <td data-testid="price">
                {price}
            </td>
        </tr>
    )
}
