import { Exclude } from 'class-transformer';

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  refresh_token?: string;
}

export class SerializedUser {
  id: string;

  email: string;

  username: string;

  @Exclude()
  password: string;

  @Exclude()
  refresh_token: string;

  constructor(partial: Partial<SerializedUser>) {
    Object.assign(this, partial);
  }
}
