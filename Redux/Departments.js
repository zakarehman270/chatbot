
import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
	getListDepartment: null,
	loading: false,
	errorMessage: null,
};
///  get Department   ////
export const handlerGetDepartment = createAsyncThunk(
	"department/GetDepartment",
	async (user, thunkAPI) => {
		try {
			const response = await axios({
				method: "GET",
				url: import.meta.env.VITE_APP_BASE_URL + '/departments/',
			})
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);

const userReducer = createSlice({
	name: "person",
	initialState,
	reducers: {
		ResetErrorMessage(state, action) {
			state.errorMessage = null;
		},
	},
	extraReducers: (builder) => {
		/// get Department  //// 
		builder.addCase(handlerGetDepartment.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerGetDepartment.fulfilled, (state, action) => {
			state.getListDepartment = action.payload;
			state.loading = false;
		});
		builder.addCase(handlerGetDepartment.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
		});
	},
});

export const { ResetErrorMessage } = userReducer.actions;
export default userReducer.reducer;