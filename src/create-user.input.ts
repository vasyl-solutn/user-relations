import { InputType, Field, ID } from '@nestjs/graphql';
import { AddressInput } from './address.input';

@InputType()
export class CreateUserInput {
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field()
  name: string;

  @Field()
  age: number;

  @Field(() => AddressInput)
  address: AddressInput;
}
