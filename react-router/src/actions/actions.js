export const AppActions = {
  getItems() {
    return dispatch => {
      //dispatch({ type: "ITEMS_GET_PENDING" });

      dispatch({
        type: "ITEMS_GET_FULFILLED",
        payload: [
                   {'name': 'Sony', 'description': 'Lorem ipsum dolor sit amet.', 'price': 25, 'pic': 'images/sony.jpg'},
                   {'name': 'Huawei', 'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing.', 'price': 35, 'pic': 'images/huawei.jpg'},
                   {'name': 'Samsung', 'description': 'Lorem ipsum dolor.', 'price': 12, 'pic': 'images/samsung.png'}
                 ]
      });
    }
  }
}
