import {
  TypedUseSelectorHook,
  useDispatch as useDis,
  useSelector as useSel,
} from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useDispatch: () => AppDispatch = useDis;
export const useSelector: TypedUseSelectorHook<RootState> = useSel;
