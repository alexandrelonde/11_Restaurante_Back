import { User } from '@prisma/client';

export class UserEntity implements User {
  id: number;
  email: string;
  name: string;
  lastName: string;
  admin: boolean;
  createdAt: Date;
}
