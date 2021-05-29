// Get value by path from the object
// Usage: const value = getDeepValue(obj, 'path.to.variable');
export const getDeepValue = (obj: Record<string, unknown>, path: string): any => path
  .split('.')
  .reduce(
    (res: any, prop: string) => {
      const arrProp = prop.match(/(\w+)\[(\d+)\]$/i);
      if (arrProp) {
        return res ? res[arrProp[1]][Number(arrProp[2])] : undefined;
      }
      return res ? res[prop] : undefined;
    },
    obj
  );
