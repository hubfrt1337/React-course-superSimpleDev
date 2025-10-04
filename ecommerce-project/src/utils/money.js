export function formatMoney(cartItem){
    return (cartItem.product.priceCents / 100).toFixed(2)
}