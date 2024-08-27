import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class Address {
  @Prop({ required: true })
  @Field()
  city: string;

  @Prop({ required: true })
  @Field()
  street: string;

  @Prop({ required: true })
  @Field()
  house: number;
}
