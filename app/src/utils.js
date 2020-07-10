import formatCurrency from "../../../../practice2/react-shopping-cart-products-component/src/util";


export default function formatCurrency(num) {
    return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
}