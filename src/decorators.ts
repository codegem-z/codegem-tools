export function printName(name: string) {
  return (
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor,
  ) => {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`[${name}]:`);
      const result = original.call(this, ...args);
      console.log('result: ', result);
      return result;
    };
  };
}
