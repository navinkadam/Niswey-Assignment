export function handlePending(state) {
  state.loaded = false;
  state.loading = true;
  state.ui_error = false;
  state.ui_error_msg = "";
}

export function createAndUpdateContactFulfilled(state, action) {
  state.loaded = true;
  state.loading = false;
  state.ui_error = true;
  state.ui_error_msg = "";
}

export function createAndUpdateContactRejected(state, action) {
  state.loaded = true;
  state.loading = false;
  state.ui_error = false;
  state.ui_error_msg = action.payload.message;
}

export function getAllContactFulfilled(state, action) {
  state.loaded = true;
  state.loading = false;
  state.lists = action?.payload?.data?.list || [];
  state.hasNext = action?.payload?.data?.hasNext || false;
}

export function getAllContactRejected(state, action) {
  state.loaded = true;
  state.loading = false;
  state.lists = [];
}
