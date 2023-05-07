//Class Destination
import { faker } from "@faker-js/faker";

export class Destination {
  receiver: string;
  location: {
    lat: number;
    lon: number;
  };
  constructor() {
    //use library npmjs.com>> faker
    this.receiver = faker.name.firstName();
    //faker location is string so we have to convert to number by adding +
    this.location = {
      lat: +faker.address.latitude(),
      lon: +faker.address.latitude(),
    };
  }
}
