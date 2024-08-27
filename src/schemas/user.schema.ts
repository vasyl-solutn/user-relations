import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
@ObjectType()
export class User extends Document {
  @Prop({ required: true })
  @Field()
  name: string;

  @Prop()
  @Field()
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
