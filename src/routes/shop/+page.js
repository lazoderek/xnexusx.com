export const load = async (LoadEvent) => {

    const query = `{
        products(sortKey: TITLE, first: 10) {
            edges {
                node {
                    id
                    handle
                    description
                    title
                    totalInventory
                    productType
                    variants(first: 5) {
                        edges {
                            node {
                                id
                                title
                                price
                                inventoryQuantity
                        }
                    }
                }
                priceRangeV2 {
                    maxVariantPrice {
                        amount
                        currencyCode
                    }
                    minVariantPrice {
                        amount
                        currencyCode
                    }
                }
                images(first: 1) {
                    edges {
                        node {
                            url
                            altText
                            }
                        }
                    }
                }
            }
        }
    }`

    try {
        const result = await fetch(import.meta.env.VITE_SHOPIFY_API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Access-Token': import.meta.env.VITE_SHOPIFY_STOREFRONT_API_TOKEN
            },
            body: JSON.stringify({ query })
        }).then((res) => res.json());
        if (result.errors) {
            console.log({ errors: result.errors });
        } else if (!result || !result.data) {
            console.log({ result });
            return 'No results found.';
        }
        return result.data;
    } catch (error) {
        console.log(error);
    }
}