const products = [{name: 'samsung s23 phone', price: 120000 },
{name: 'iphone 15 phone', price: 110000 },
{name: 'apple watch', price: 12000 },
{name: 'samsung watch', price: 1200890 },
{name: 'samsung g678 laptop', price: 1209900 },
{name: 'macbook pro laptop', price: 1200000 }
];

function searchProduct(product, searchText){
    const matched=[];
    for(const product of products){
        const name = product.name;
        if(name.indexOf(searchText) != -1){
            matched.push(name);
        }
    }
    return matched;
}

const matched = searchProduct(products, "watch");
console.log(matched);
