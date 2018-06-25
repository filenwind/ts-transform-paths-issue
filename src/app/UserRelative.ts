import factory from './factory';

class User {
  public name = 'John';
  public double = (prefix: string) => {
    return {
      name: `${prefix} ${this.name.repeat(2)}`,
    };
  };
  public triple = (prefix: string) => {
    return {
      name: `${prefix} ${this.name.repeat(3)}`,
    };
  };

  public morning = factory('Morning', this.double);
  public afternoon = factory('Afternoon', this.triple);
}

export default User;
