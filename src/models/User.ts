import { Field, ID, ObjectType } from 'type-graphql';
import { getModelForClass, prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';

@ObjectType()
export class User {
  @Field(() => ID)
  @prop()
  _id: Types.ObjectId;

  @Field(() => String)
  @prop({ required: true })
  name: string;

  @Field(() => String)
  @prop({ unique: true, required: true })
  email: string;

  @Field(() => String)
  @prop({ required: true, minlength: 6 })
  password: string;
}

export const UserModel = getModelForClass(User);
