import { List } from '../lists';

export interface User {
  id: number;
  username: string;
  password: string;
  salt: string;
  Lists: List[];
}

export interface UserDTO {
  id: User['id'];
  username: User['username'];
}
