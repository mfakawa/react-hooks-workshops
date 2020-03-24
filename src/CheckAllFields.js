export const checkAllFields = (obj, k) => {
  for (const name in obj) {
    if (obj[name] instanceof Object) {
      checkAllFields(obj[name], k);
    } else {
      if (
        obj[name] !== null &&
        obj[name]
          .toString()
          .toLowerCase()
          .includes(k.toLowerCase())
      ) {
        return obj;
      }
    }
  }
};
