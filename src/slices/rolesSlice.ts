import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Role = 'student' | 'instructor' | 'guest';

interface RoleState {
  currentRole: Role;
}

// Initial state
const initialState: RoleState = {
  currentRole: 'guest',
};

export const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<Role>) => {
      state.currentRole = action.payload;
    },
    resetRole: (state) => {
      state.currentRole = 'guest';
    },
  },
});

export const { setRole, resetRole } = roleSlice.actions;
export default roleSlice.reducer;
