
import api from "@/utilities/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {    
	getListCustomer: null,    
	loading: false,    
	errorMessage: null,    
};   

///  get list Customer    //// 
export const handlerGetListCustomer = createAsyncThunk(
	"Service/GetListCustomer",
	async (data, thunkAPI) => {
		try {
			const response = await api.get(`/customer/`)
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
		ResetErrorMessage(state, action) {
			state.errorMessage = null;
		},

        ResetAddTicket(state, action) {
			state.AddTicketList = null;
		},

        
	},
	extraReducers: (builder) => {
		/// get Department  //// 
		builder.addCase(handlerGetListCustomer.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerGetListCustomer.fulfilled, (state, action) => {
			state.getListCustomer = action.payload;
			state.loading = false;
		});
		builder.addCase(handlerGetListCustomer.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
		});
	},
});

export const { ResetErrorMessage , ResetAddTicket } = userReducer.actions;
export default userReducer.reducer;