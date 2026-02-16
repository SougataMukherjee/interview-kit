import type { Product } from './Product';

export interface CartState {
  data: Product[];
  loading: boolean;
  error: string | null;
}
