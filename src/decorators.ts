export function printLevel(level: 'info' | 'debug' | 'warn' | 'error') {
  return (
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor,
  ) => {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const result = original.call(this, `[${level}]:`, ...args);
      return result;
    };
  };
}
