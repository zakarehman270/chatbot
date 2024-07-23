
import api from "@/utilities/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
	loading: false,
	errorMessage: null,
    getListCategories:null,
    AddCategory:null,
    UpdatedCategory:null
};
///  get Category   ////
export const handlerGetCategories = createAsyncThunk(
	"Categories/GetCategory",
	async (user, thunkAPI) => {
		try {
			const response = await api.get(`/category`)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error?.response?.data);
		}
	}
);


///  add Category   ////
export const handlerAddCategories = createAsyncThunk(
	"Categories/AddCategory",
	async (user, thunkAPI) => {
		try {
			const response = await api.post(`/category/`,user)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error?.response?.data);
		}
	}
);
///  Update Category   ////
export const handlerUpdateCategories = createAsyncThunk(
	"Categories/UpdateCategory",
	async (data, thunkAPI) => {
		try {
			const response = await api.put(`/category/${data.id}/`,data?.data)
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
        ResetAddCategory(state, action) {
			state.AddCategory = null;
		},
        ResetUpdatedCategory(state, action) {
			state.UpdatedCategory = null;
		},
	},
	extraReducers: (builder) => {
		/// get Category  //// 
		builder.addCase(handlerGetCategories.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerGetCategories.fulfilled, (state, action) => {
			state.getListCategories = action.payload;
			state.loading = false;
		});
		builder.addCase(handlerGetCategories.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
		});

        /// Add Categories  //// 
		builder.addCase(handlerAddCategories.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerAddCategories.fulfilled, (state, action) => {
			state.AddCategory = action.payload;
			state.loading = false;
		});
		builder.addCase(handlerAddCategories.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
		});

          /// Update Categories  //// 
		builder.addCase(handlerUpdateCategories.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerUpdateCategories.fulfilled, (state, action) => {
			state.UpdatedCategory = action.payload;
			state.loading = false;
		});
		builder.addCase(handlerUpdateCategories.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
		});

        


        
	},
});

export const { ResetErrorMessage , ResetAddCategory , ResetUpdatedCategory } = userReducer.actions;
export default userReducer.reducer;