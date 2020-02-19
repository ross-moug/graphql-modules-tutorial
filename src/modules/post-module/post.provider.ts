import { Injectable } from '@graphql-modules/di';

@Injectable()
export class PostProvider {

  posts() {
    console.log("posts");
  }

  addPost(post) {
    console.log("addPost");
  }
}
