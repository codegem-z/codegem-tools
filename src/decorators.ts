import { emojis } from './emojis.js';

export function printLevel(
  level: 'info' | 'debug' | 'warn' | 'error' | 'success',
) {
  return (
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor,
  ) => {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const frontEmoji = levelEmojiMatch(level);
      const result = original.call(this, `${frontEmoji}`, ...args);
      return result;
    };
  };
}

const levelEmojiMatch = match({
  warn: emojis.forbidden,
  error: emojis.failed,
  info: emojis.common,
  debug: emojis.common,
  success: emojis.giftFlower,
});

function match<T extends string>(map: Record<T, any>) {
  return (key: keyof typeof map) => map[key];
}
