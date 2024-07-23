
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
let userData = localStorage.getItem("tokenChatBoat")
const initialState = {
	Auth: userData ? userData : null,
	loading: false,
	errorMessage: null,
	resetPassword: null,
	loadingResetPass: null,
	Register:null,
	SuccessLogin:false
};
export const handlerLoginUser = createAsyncThunk(
	"auth/login",
	async (user, thunkAPI) => {
		try {
			const response = await axios({
				method: "POST",
				url: import.meta.env.VITE_APP_BASE_URL + `/login/`,
				data: user,
			})
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);
export const handlerRegister = createAsyncThunk(
	"auth/Register",
	async (user, thunkAPI) => {
		try {
			const response = await axios({
				method: "post",
				url: import.meta.env.VITE_APP_BASE_URL + `/register/`,
				data: user,
				headers: {
					"Content-Type": "application/json",
				},
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
		logout(state, action) {
			state.Auth = null
		},
		updatedResetPassword(state, action) {
			state.resetPassword = null
		},
		updatedRegister(state, action) {
			state.Register = null
		},
		updatedSuccessLogin(state, action) {
			state.SuccessLogin = false;
		},
	},
	extraReducers: (builder) => {
		/// LOGIN USER  //// 
		builder.addCase(handlerLoginUser.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerLoginUser.fulfilled, (state, action) => {
			state.Auth = action.payload;
			state.loading = false;
			state.SuccessLogin = true;
		});
		builder.addCase(handlerLoginUser.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
			state.SuccessLogin = false;
		});

		/// Register  //// 
		builder.addCase(handlerRegister.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerRegister.fulfilled, (state, action) => {
			state.Register = action.payload;
			state.loading = false;
		});
		builder.addCase(handlerRegister.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
		});
	},
});

export const { ResetErrorMessage, logout, updatedResetPassword , updatedRegister , updatedSuccessLogin } = userReducer.actions;
export default userReducer.reducer;