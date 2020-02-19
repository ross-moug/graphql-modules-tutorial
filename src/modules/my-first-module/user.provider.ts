import { Injectable } from '@graphql-modules/di';

@Injectable()
export class UserProvider {
  users = [
    {
      _id: '0',
      username: 'jhon'
    }
  ];
  getUserById(id) {
    return this.users.find(user => user._id === id);
  }
}
