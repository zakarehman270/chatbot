
import api from "@/utilities/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {    
	SuccessfullyUpdatedData: null,    
	loading: false,    
	errorMessage: null,  
};   
///  Update Any Data   //// 
export const handlerUpdateAnyData = createAsyncThunk(
	"Service/UpdateAnyData",
	async (data, thunkAPI) => {
		try {
			const response = await api.patch(`/${data.url}/${data?.id}/`,data?.data)
			response.url = data.url
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
		builder.addCase(handlerUpdateAnyData.pending, (state, action) => {
			state.loading = true;
            state.SuccessfullyUpdatedData=false
		});
		builder.addCase(handlerUpdateAnyData.fulfilled, (state, action) => {
			const { url, data } = action.payload;
			state.SuccessfullyUpdatedData = data;
			state.loading = false
			toast.success(`Successfully Updated ${url}`)
		});
		builder.addCase(handlerUpdateAnyData.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
            state.SuccessfullyUpdatedData=false
		});
	},
});

export const { ResetErrorMessage , ResetAddTicket , ResetSuccessfullyUpdatedData } = userReducer.actions;
export default userReducer.reducer;