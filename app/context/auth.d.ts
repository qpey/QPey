export interface IAuth {}

export type AuthContextType = {
  user: any | null;
  setUser: (user: any) => void;
};
