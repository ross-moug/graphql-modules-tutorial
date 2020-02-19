import { Injectable } from '@graphql-modules/di';
import { TestProvider } from "../my-second-module/test.provider";

@Injectable()
export class UserProvider {
  users = [
    {
      _id: '0',
      username: 'jhon'
    }
  ];

  constructor(private testProvider: TestProvider) {
  }

  getUserById(id) {
    return this.users.find(user => user._id === id);
  }
}
