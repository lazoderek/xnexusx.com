import { postToShopify } from '/Users/dereklazo/Desktop/xnexusx.com/src/routes/api/postToShopify.js';

export const getProducts = async () => {
    try {
        const shopifyResponse = await postToShopify({
            query: `{
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
        });
        console.log(shopifyResponse);
        return shopifyResponse;
    } catch (error) {
        console.log(error);
    }
};