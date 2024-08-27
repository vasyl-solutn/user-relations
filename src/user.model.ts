import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Address } from './address.model';

@Schema()
@ObjectType()
export class User extends Document {
  @Field(() => ID)
  id: string;

  @Prop({ required: true })
  @Field()
  name: string;

  @Prop()
  @Field()
  age: number;

  @Prop({ type: Address, required: true })
  @Field(() => Address)
  address: Address;
}

export const UserSchema = SchemaFactory.createForClass(User);
