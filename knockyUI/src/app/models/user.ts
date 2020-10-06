import { RoleModel } from './role';

export interface UserModel {
  id: number;
  name: string;
  surname: string;
  username: string;
  password: string;
  roleId: number;
  role: RoleModel;
}
