
import api from "@/utilities/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
	getListProducts: null,
	loading: false,
	errorMessage: null,
	AddProducts:null
};
///  get Products   ////
export const handlerGetProducts = createAsyncThunk(
	"Products/getProducts",
	async (user, thunkAPI) => {
		try {
			const response = await api.get("/product/")
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error?.response?.data);
		}
	}
);

///  get Add Products   ////
export const handlerAddProducts = createAsyncThunk(
	"Products/AddProducts",
	async (data, thunkAPI) => {
		try {
			const response = await api.post("/product/",data)
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
		ResetAddProducts(state, action) {
			state.AddProducts = null;
		},
	},
	extraReducers: (builder) => {
		/// get Products  //// 
		builder.addCase(handlerGetProducts.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerGetProducts.fulfilled, (state, action) => {
			state.getListProducts = action.payload;
			state.loading = false;
		});
		builder.addCase(handlerGetProducts.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
		});

		/// post Products  //// 
		builder.addCase(handlerAddProducts.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerAddProducts.fulfilled, (state, action) => {
			state.AddProducts = action.payload;
			state.loading = false;
		});
		builder.addCase(handlerAddProducts.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
		});

		
	},
});

export const { ResetErrorMessage , ResetAddProducts} = userReducer.actions;
export default userReducer.reducer;