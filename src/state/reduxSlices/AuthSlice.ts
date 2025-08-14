// src/features/auth/authSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "@/services/api/axios";
import type { LoginSchemaType, SignupSchemaType } from "@/schemas/authschema";

interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

interface AuthState {
  user: AuthResponse["user"] | null;
  token: string | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;
  hydrated: boolean; 
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  errorMessage: null,
  hydrated: false,
};

export const loginUser = createAsyncThunk<AuthResponse, LoginSchemaType, { rejectValue: string }>(
  "auth/loginUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axiosInstance.post<AuthResponse>("/auth/login", payload);
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);

export const signupUser = createAsyncThunk<AuthResponse, SignupSchemaType, { rejectValue: string }>(
  "auth/signupUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axiosInstance.post<AuthResponse>("/auth/register", payload);
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || "Signup failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      state.hydrated = true;
      localStorage.removeItem("auth");
    },
    rehydrateAuth: (state) => {
      const storedAuth = localStorage.getItem("auth");
      if (storedAuth) {
        try {
          const parsed = JSON.parse(storedAuth);
          state.user = parsed.user;
          state.token = parsed.token;
          state.isLoggedIn = true;
        } catch (error) {
          console.error("Invalid auth object");
        }
      }
      state.hydrated = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isError = false;
        state.hydrated = true;
        localStorage.setItem("auth", JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "Login failed";
        state.isLoggedIn = false;
      })

      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(signupUser.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isError = false;
        state.hydrated = true;
        localStorage.setItem("auth", JSON.stringify(action.payload));
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "Signup failed";
        state.isLoggedIn = false;
      });
  },
});

export const { logout, rehydrateAuth } = authSlice.actions;
export default authSlice.reducer;
