
class Product {
  constructor(
    objectId,
    title,
    description,
    myImage,
    price,
    count,
    catId,
    subCatId
  ) {
    this.objectId = objectId;
    this.myImage = [myImage];
    this.title = title;
    this.description = description;
    this.price = price;
    this.count = count;
    this.catId = catId;
    this.subCatId = subCatId;
  }
}

export default Product;
