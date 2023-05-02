export function removeUndefinedPropertiesAndIgnoreFields<T extends Record<string, any>>(
  object: T,
  ignoreFields: string[]
): Partial<T> {
  const result: Partial<T> = {};

  Object.entries(object).forEach(([key, value]) => {
    if (value !== undefined && !ignoreFields.includes(key)) {
      result[key as keyof T] = value;
    }
  });

  return result;
};