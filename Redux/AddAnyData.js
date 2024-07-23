
import api from "@/utilities/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {    
	AddAnyData:false,    
	loading: false,    
	errorMessage: null,  
};   
///  General function Add Data   //// 
export const handlerAddAnyData = createAsyncThunk(
	"general/AddAnyData",
	async (data, thunkAPI) => {
		try {
			const response = await api.post(`/${data?.url}/`,data?.data)
            response.url = data?.url
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
        ResetAddAnyData(state, action) {
			state.AddAnyData = null;
		},
	},
	extraReducers: (builder) => {
		/// get General Data  //// 
		builder.addCase(handlerAddAnyData.pending, (state, action) => {
			state.loading = true;
			state.SuccessfullyUpdatedData = false;
		});
		builder.addCase(handlerAddAnyData.fulfilled, (state, action) => {
            const { url, data } = action.payload;
			state.AddAnyData = data;  
			state.loading = false;
            toast.success(`Successfully Added ${url}`)
		});
		builder.addCase(handlerAddAnyData.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
			state.SuccessfullyUpdatedData = false;
		});
	},
});

export const { ResetErrorMessage , ResetAddAnyData } = userReducer.actions;
export default userReducer.reducer;