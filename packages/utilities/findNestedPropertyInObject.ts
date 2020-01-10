const findNestedPropertyInObject = (obj, propertyPath) => {
  if (propertyPath == null || obj == null) {
    return null;
  }

  return propertyPath.split(".").reduce((acc, nextProp) => {
    if (acc == null) {
      return acc;
    }

    return acc[nextProp];
  }, obj);
};

export default findNestedPropertyInObject;
