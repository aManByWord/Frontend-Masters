const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

// noth ways are valid
export const priceConverter = function priceConverter(price) {
    return intl.format(price);
};
export default function useCurrency(price) {
    return priceConverter(price);
}

