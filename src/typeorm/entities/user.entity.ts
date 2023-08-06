import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Uploads } from './upload.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    nullable: false,
    unique: true,
  })
  username: string;

  @Column({
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    nullable: false,
  })
  password: string;

  @Column({
    type: 'text',
    nullable: true,
    default: '',
  })
  refresh_token: string;

  @OneToMany(() => Uploads, (file) => file.user)
  files: Uploads[];
}
