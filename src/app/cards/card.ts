import { User, UserDTO } from '../user';

export interface Card {
  id: number;
  type: string;
  front: string;
  back: string;
  known: boolean;
  favourite: boolean;
  userId: User['id'];
  user: UserDTO;
}
