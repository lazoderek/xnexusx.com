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
                images(first: 5) {
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

/*
{
"data": {
    "products": {
    "edges": [
        {
        "node": {
            "id": "gid://shopify/Product/8283757216057",
            "handle": "collegiate-tee",
            "description": "100% HEAVY COTTON TEE PRINTED IN U.S.A.",
            "title": "COLLEGIATE TEE",
            "totalInventory": 0,
            "productType": "",
            "variants": {
            "edges": [
                {
                "node": {
                    "id": "gid://shopify/ProductVariant/45121905918265",
                    "title": "NAVY / SMALL",
                    "price": "32.00",
                    "inventoryQuantity": 0
                }
                },
                {
                "node": {
                    "id": "gid://shopify/ProductVariant/45121905951033",
                    "title": "NAVY / MEDIUM",
                    "price": "32.00",
                    "inventoryQuantity": 0
                }
                },
                {
                "node": {
                    "id": "gid://shopify/ProductVariant/45121905983801",
                    "title": "NAVY / LARGE",
                    "price": "32.00",
                    "inventoryQuantity": 0
                }
                },
                {
                "node": {
                    "id": "gid://shopify/ProductVariant/45121906016569",
                    "title": "NAVY / XLARGE",
                    "price": "32.00",
                    "inventoryQuantity": 0
                }
                },
                {
                "node": {
                    "id": "gid://shopify/ProductVariant/45121906049337",
                    "title": "NAVY / 2XLARGE",
                    "price": "32.00",
                    "inventoryQuantity": 0
                }
                }
            ]
            },
            "priceRangeV2": {
            "maxVariantPrice": {
                "amount": "32.0",
                "currencyCode": "USD"
            },
            "minVariantPrice": {
                "amount": "32.0",
                "currencyCode": "USD"
            }
            },
            "images": {
            "edges": [
                {
                "node": {
                    "url": "https://cdn.shopify.com/s/files/1/0762/2318/5209/files/xxx-thumb.png?v=1683498747",
                    "altText": null
                }
                },
                {
                "node": {
                    "url": "https://cdn.shopify.com/s/files/1/0762/2318/5209/files/xxx-navy-front.png?v=1683507784",
                    "altText": null
                }
                },
                {
                "node": {
                    "url": "https://cdn.shopify.com/s/files/1/0762/2318/5209/files/xxx-navy-back.png?v=1683507784",
                    "altText": null
                }
                }
            ]
            }
        }
        },
        {
        "node": {
            "id": "gid://shopify/Product/8283754955065",
            "handle": "gameover-tee",
            "description": "100% HEAVY COTTON TEE PRINTED IN U.S.A.",
            "title": "GAMEOVER TEE",
            "totalInventory": 0,
            "productType": "",
            "variants": {
            "edges": [
                {
                "node": {
                    "id": "gid://shopify/ProductVariant/45121890713913",
                    "title": "BLACK / SMALL",
                    "price": "32.00",
                    "inventoryQuantity": 0
                }
                },
                {
                "node": {
                    "id": "gid://shopify/ProductVariant/45121890746681",
                    "title": "BLACK / MEDIUM",
                    "price": "32.00",
                    "inventoryQuantity": 0
                }
                },
                {
                "node": {
                    "id": "gid://shopify/ProductVariant/45121890779449",
                    "title": "BLACK / LARGE",
                    "price": "32.00",
                    "inventoryQuantity": 0
                }
                },
                {
                "node": {
                    "id": "gid://shopify/ProductVariant/45121890812217",
                    "title": "BLACK / XLARGE",
                    "price": "32.00",
                    "inventoryQuantity": 0
                }
                },
                {
                "node": {
                    "id": "gid://shopify/ProductVariant/45121890844985",
                    "title": "BLACK / 2XLARGE",
                    "price": "32.00",
                    "inventoryQuantity": 0
                }
                }
            ]
            },
            "priceRangeV2": {
            "maxVariantPrice": {
                "amount": "32.0",
                "currencyCode": "USD"
            },
            "minVariantPrice": {
                "amount": "32.0",
                "currencyCode": "USD"
            }
            },
            "images": {
            "edges": [
                {
                "node": {
                    "url": "https://cdn.shopify.com/s/files/1/0762/2318/5209/files/mushroom-thumb.png?v=1683498473",
                    "altText": null
                }
                },
                {
                "node": {
                    "url": "https://cdn.shopify.com/s/files/1/0762/2318/5209/files/gameover-black-front.png?v=1683507752",
                    "altText": null
                }
                },
                {
                "node": {
                    "url": "https://cdn.shopify.com/s/files/1/0762/2318/5209/files/gameover-black-back.png?v=1683507752",
                    "altText": null
                }
                }
            ]
            }
        }
        },
        {
        "node": {
            "id": "gid://shopify/Product/8283643478329",
            "handle": "nexus-logo-hoodie",
            "description": "CHAMPION 50/50 PULLOVER HOOD PRINTED IN THE U.S.A",
            "title": "NEXUS LOGO HOODIE",
            "totalInventory": 0,
            "productType": "",
            "variants": {
            "edges": [
                {
                "node": {
                    "id": "gid://shopify/ProductVariant/45121508016441",
                    "title": "ASH / SMALL",
                    "price": "58.00",
                    "inventoryQuantity": 0
                }
                },
                {
                "node": {
                    "id": "gid://shopify/ProductVariant/45121508049209",
                    "title": "ASH / MEDIUM",
                    "price": "58.00",
                    "inventoryQuantity": 0
                }
                },
                {
                "node": {
                    "id": "gid://shopify/ProductVariant/45121508081977",
                    "title": "ASH / LARGE",
                    "price": "58.00",
                    "inventoryQuantity": 0
                }
                },
                {
                "node": {
                    "id": "gid://shopify/ProductVariant/45121508114745",
                    "title": "ASH / XLARGE",
                    "price": "58.00",
                    "inventoryQuantity": 0
                }
                },
                {
                "node": {
                    "id": "gid://shopify/ProductVariant/45121508147513",
                    "title": "ASH / 2XLARGE",
                    "price": "58.00",
                    "inventoryQuantity": 0
                }
                }
            ]
            },
            "priceRangeV2": {
            "maxVariantPrice": {
                "amount": "58.0",
                "currencyCode": "USD"
            },
            "minVariantPrice": {
                "amount": "58.0",
                "currencyCode": "USD"
            }
            },
            "images": {
            "edges": [
                {
                "node": {
                    "url": "https://cdn.shopify.com/s/files/1/0762/2318/5209/files/logo-white-thumb.png?v=1683496134",
                    "altText": null
                }
                },
                {
                "node": {
                    "url": "https://cdn.shopify.com/s/files/1/0762/2318/5209/files/logo-white-front_6c037191-7d5a-4571-934f-142eeb9f3532.png?v=1683507816",
                    "altText": null
                }
                },
                {
                "node": {
                    "url": "https://cdn.shopify.com/s/files/1/0762/2318/5209/files/logo-white-back_e478bd26-81e2-46d4-800f-6dbb7e53b575.png?v=1683507816",
                    "altText": null
                }
                },
                {
                "node": {
                    "url": "https://cdn.shopify.com/s/files/1/0762/2318/5209/files/logo-maroon-front.png?v=1683507816",
                    "altText": null
                }
                },
                {
                "node": {
                    "url": "https://cdn.shopify.com/s/files/1/0762/2318/5209/files/logo-maroon-back.png?v=1683507815",
                    "altText": null
                }
                }
            ]
            }
        }
        },
        {
        "node": {
            "id": "gid://shopify/Product/8279775871289",
            "handle": "nexus-logo-tee",
            "description": "100% HEAVY COTTON SIGNATURE LOGO TEE MADE IN U.S.A.",
            "title": "NEXUS LOGO TEE",
            "totalInventory": 0,
            "productType": "",
            "variants": {
            "edges": [
                {
                "node": {
                    "id": "gid://shopify/ProductVariant/45110530441529",
                    "title": "SMALL / WHITE",
                    "price": "32.00",
                    "inventoryQuantity": 0
                }
                },
                {
                "node": {
                    "id": "gid://shopify/ProductVariant/45110530474297",
                    "title": "SMALL / FOREST",
                    "price": "32.00",
                    "inventoryQuantity": 0
                }
                },
                {
                "node": {
                    "id": "gid://shopify/ProductVariant/45110530507065",
                    "title": "MEDIUM / WHITE",
                    "price": "32.00",
                    "inventoryQuantity": 0
                }
                },
                {
                "node": {
                    "id": "gid://shopify/ProductVariant/45110530539833",
                    "title": "MEDIUM / FOREST",
                    "price": "32.00",
                    "inventoryQuantity": 0
                }
                },
                {
                "node": {
                    "id": "gid://shopify/ProductVariant/45110530572601",
                    "title": "LARGE / WHITE",
                    "price": "32.00",
                    "inventoryQuantity": 0
                }
                }
            ]
            },
            "priceRangeV2": {
            "maxVariantPrice": {
                "amount": "32.0",
                "currencyCode": "USD"
            },
            "minVariantPrice": {
                "amount": "32.0",
                "currencyCode": "USD"
            }
            },
            "images": {
            "edges": [
                {
                "node": {
                    "url": "https://cdn.shopify.com/s/files/1/0762/2318/5209/files/logo-forest-thumb.png?v=1683496179",
                    "altText": null
                }
                },
                {
                "node": {
                    "url": "https://cdn.shopify.com/s/files/1/0762/2318/5209/files/logo-white-front.png?v=1683496179",
                    "altText": null
                }
                },
                {
                "node": {
                    "url": "https://cdn.shopify.com/s/files/1/0762/2318/5209/files/logo-white-back.png?v=1683496179",
                    "altText": null
                }
                },
                {
                "node": {
                    "url": "https://cdn.shopify.com/s/files/1/0762/2318/5209/files/logo-forest-front.png?v=1683496179",
                    "altText": null
                }
                },
                {
                "node": {
                    "url": "https://cdn.shopify.com/s/files/1/0762/2318/5209/files/logo-forest-back.png?v=1683496179",
                    "altText": null
                }
                }
            ]
            }
        }
        }
    ]
    }
},
"extensions": {
    "cost": {
    "requestedQueryCost": 162,
    "actualQueryCost": 62,
    "throttleStatus": {
        "maximumAvailable": 1000,
        "currentlyAvailable": 938,
        "restoreRate": 50
    }
    }
}
}
*/