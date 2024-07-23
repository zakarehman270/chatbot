
import api from "@/utilities/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {    
	AllData:{},    
	loading: false,    
	errorMessage: null,  
};   
///  Get Any Data   //// 
export const handlerGetAnyData = createAsyncThunk(
	"Service/GetListAnyData",
	async (url, thunkAPI) => {
		try {
			const response = await api.get(`/${url}/`,)
            response.url = url
			return response
		} catch (error) {
			return thunkAPI.rejectWithValue(error?.response?.data);
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
        ResetSuccessfullyUpdatedData(state, action) {
			state.SuccessfullyUpdatedData = null;
		},
	},
	extraReducers: (builder) => {
		/// get General Data  //// 
		builder.addCase(handlerGetAnyData.pending, (state, action) => {
			state.loading = true;
			state.SuccessfullyUpdatedData = false;
		});
		builder.addCase(handlerGetAnyData.fulfilled, (state, action) => {
			const { url, data } = action.payload;
			state.AllData[url] = data;  // Directly mutate state
			state.loading = false;
		});
		builder.addCase(handlerGetAnyData.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
			state.SuccessfullyUpdatedData = false;
		});
	},
});

export const { ResetErrorMessage , ResetAddTicket , ResetSuccessfullyUpdatedData } = userReducer.actions;
export default userReducer.reducer;