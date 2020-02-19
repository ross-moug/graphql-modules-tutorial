export default {
  Query: {
    user: (root, { id }) => {
      return {
        _id: id,
        username: 'john'
      };
    }
  },
  User: {
    id: user => user._id,
    username: user => user.username
  }
};
