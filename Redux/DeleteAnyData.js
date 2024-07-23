
import api from "@/utilities/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
	DeleteSuccess: null,
	loading: false,
	errorMessage: null,
};

/// Delete Category   ////
export const handlerDeleteAnyData = createAsyncThunk(
	"Categories/DeleteCategory",
	async (data, thunkAPI) => {
		try {
			const response = await api.delete(`/${data?.DeleteURL}/${data.id}/`)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error?.response?.data);
		}
	}
);

const userReducer = createSlice({
	name: "person",
	initialState,
	reducers: {
		ResetDeleteSuccess(state, action) {
			state.DeleteSuccess = null;
		},
	},
	extraReducers: (builder) => {
		/// get Department  //// 
		builder.addCase(handlerDeleteAnyData.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerDeleteAnyData.fulfilled, (state, action) => {
			state.DeleteSuccess = action.payload;
			state.loading = false;
		});
		builder.addCase(handlerDeleteAnyData.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
		});
	},
});

export const { ResetErrorMessage , ResetDeleteSuccess } = userReducer.actions;
export default userReducer.reducer;