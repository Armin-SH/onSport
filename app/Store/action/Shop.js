
export const SET_PRODUCTS = "SET_PRODUCTS";

export const fetchProducts = () => {
  return async (dispatch) => {
    // any async code you want!
    try {
      const response = await fetch("https://offsport.b4a.io/classes/AllProduct", {
        headers: {
          'X-Parse-Application-Id': '5xjVxMrAA6weFVdln8LsiiG0zMbE0NKLZZTyJcif',
          'X-Parse-REST-API-Key': 'QzW3FSUwlMQoGzuIBiTymLobQfQ8u4OxEUVw2kUN'
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const resData = await response.json();
      dispatch({ type: SET_PRODUCTS, products: resData.results });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};


export const sendRequest = (productId,productImage, userPhone, userName, productTitle,) => {
  return async (dispatch) => {
    // any async code you want!
    try {
      const response = await fetch("https://offsport.b4a.io/classes/Requests", {
        method: "POST",
        headers: {
          'X-Parse-Application-Id': '5xjVxMrAA6weFVdln8LsiiG0zMbE0NKLZZTyJcif',
          'X-Parse-REST-API-Key': 'QzW3FSUwlMQoGzuIBiTymLobQfQ8u4OxEUVw2kUN',
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          productImage,
          userName,
          userPhone,
          productTitle,
        }),
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const resData = await response.json();
      console.log(resData)
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

export const updateProducts = (id, count) => {
  return async (dispatch) => {
    // any async code you want!
    try {
      const response = await fetch(`https://offsport.b4a.io/classes/AllProduct/${id}`, {
        method: "PUT",
        headers: {
          'X-Parse-Application-Id': '5xjVxMrAA6weFVdln8LsiiG0zMbE0NKLZZTyJcif',
          'X-Parse-REST-API-Key': 'QzW3FSUwlMQoGzuIBiTymLobQfQ8u4OxEUVw2kUN',
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          count,
        }),
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const resData = await response.json();
      console.log(resData)
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

