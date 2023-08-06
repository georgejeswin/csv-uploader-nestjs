import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Uploads {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: true,
  })
  title: string;

  @Column({
    type: 'text',
    name: 'fileUrl',
    nullable: false,
  })
  fileUrl: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.files, { onDelete: 'SET NULL' })
  user: User;
}
