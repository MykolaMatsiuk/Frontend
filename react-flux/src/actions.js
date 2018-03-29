export const AppActions = {
  addBlock() {
    return {
      type: "BLOCK_WAS_ADDED",
      payload: 'block'
    };
  },
  removeBlock() {
    return {
      type: "BLOCK_WAS_REMOVED"
    };
  },
  uploadBlocks(later) {
    return dispatch => {
      dispatch(this.addBlock());
      setTimeout(() => {
        dispatch({
          type: "BLOCKS_WERE_UPLOADED",
          payload: later
        });
      }, 3000);
    }
  }
};
