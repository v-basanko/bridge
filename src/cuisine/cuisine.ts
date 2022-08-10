import { ICuisine } from '../shared/interfaces/cuisine.interface';
import { IDish } from '../shared/interfaces/dish.interface';

export abstract class Cuisine implements ICuisine {
  protected country:string;

  cook(dish:IDish):IDish {
    return dish
        .setCountry(this.country)
        .setCookedAt(new Date());
  }
}
