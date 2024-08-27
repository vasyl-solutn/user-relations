import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateUserInput } from './user.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    const newUser = new this.userModel({ ...createUserInput });
    return newUser.save();
  }
}
