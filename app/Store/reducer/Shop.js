import {CATEGORIES,SubCat} from '../../Data/CategoryData'
import {
    CREATE_PRODUCT,
    SET_PRODUCTS
  } from '../action/Shop';
  import Product from '../../Models/ProductItems'
const initialState = {
    Categories: CATEGORIES,
    SubCategories: SubCat,
    availableProducts: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
      case SET_PRODUCTS:
        return {
            ...state,
          availableProducts: action.products,
        };
      case CREATE_PRODUCT:
        const newProduct = new Product(
          action.productData.objectId,
          action.productData.title,
          action.productData.description,
          action.productData.myImage,
          action.productData.price,
          action.productData.count,
          action.productData.catId,
          action.productData.subCatId,
  
        );
        return {
          ...state,
          availableProducts: state.availableProducts.concat(newProduct),
        };
    }
    return state;
  };
  