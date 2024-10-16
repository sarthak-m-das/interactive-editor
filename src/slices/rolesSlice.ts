import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Role, Mode } from '../types/role';
interface RoleState {
  currentRole: Role;
  mode: Mode;
}

// Initial state
const initialState: RoleState = {
  currentRole: localStorage.getItem('role') as Role || Role.student,
  mode: localStorage.getItem('mode') as Mode || Mode.view,
};

export const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<Role>) => {
      state.currentRole = action.payload;
      localStorage.setItem('role', action.payload);
    },
    setMode: (state, action: PayloadAction<Mode>) => {
      state.mode = action.payload;
      localStorage.setItem('mode', action.payload);
    }
    
  },
});

export const { setRole, setMode } = roleSlice.actions;
export const selectRole = (state: { role: RoleState }) => state.role.currentRole;
export const selectMode = (state: { role: RoleState }) => state.role.mode;
export default roleSlice.reducer;
