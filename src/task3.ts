// 3.

type TypeProduct = {
    products: [{
        name:string
    }]
}
function getAllProductNames(a: TypeProduct) {
  return a?.products?.map(prod => prod?.name) || [];
}
