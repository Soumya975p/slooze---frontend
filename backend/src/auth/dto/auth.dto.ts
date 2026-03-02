import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';
import { User } from '../models/user.model';

@InputType()
export class LoginInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @MinLength(6)
  password: string;
}

@ObjectType()
export class AuthPayload {
  @Field()
  access_token: string;

  @Field(() => User)
  user: User;
}
