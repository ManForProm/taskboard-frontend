export const networkCases = (builder, asyncThunk,succeeded) => {
    builder
      .addCase(asyncThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(asyncThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state[succeeded] = action.payload;
      })
      .addCase(asyncThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  };