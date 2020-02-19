export default {
  Query: {
    myQuery: (root, args, context) => {
      if (args.something === '1') {
        return true;
      }

      return false;
    }
  }
};
