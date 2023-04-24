type ObjectType = {
  [key: string]: any;
};

export function removeUndefinedPropertiesAndIgnoreFields(
  obj: ObjectType,
  ignoreFields: string[]
): ObjectType {
  const result: ObjectType = {};

  Object.entries(obj).forEach(([key, value]) => {
    if (value !== undefined && !ignoreFields.includes(key)) {
      result[key] = value;
    }
  });

  return result;
}
