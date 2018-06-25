import { Data } from 'app/type';

type transform = (prefix: string) => Data;

const factory = (prefix: string, transform: transform) => () => {
  return transform(prefix);
}

export default factory;
