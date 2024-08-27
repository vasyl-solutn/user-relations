import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AddressInput {
  @Field()
  city: string;

  @Field()
  street: string;

  @Field()
  house: number;
}
