export type User = {
  id: number;
  name: string;
  email: string;
  phone_number: string | null;
  is_admin: boolean;
  picture: string | null;
  token: string;
};

export interface AuthSliceState {
  isLoading: boolean;
  user: User | null;
}
