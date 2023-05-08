export interface Auth {
  email: string;
  password: string;
}
export interface User extends Auth {
  names: string;
  description: string;
  last_names: string;
}
