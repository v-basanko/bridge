import { CuisinesTypes } from '../shared/enums/cuisines-types';
import { DishesTypes } from "../shared/enums/dishes-types";
import { AmericanCuisine } from "../cuisine/american-cuisine";
import { Order } from "../shared/interfaces/order";
import { FirstDish } from "../dishe/first-dish";
import { SecondDish } from "../dishe/second-dish";
import { ThirdDish } from "../dishe/third-dish";
import { Desert } from "../dishe/desert";
import { IDish } from "../shared/interfaces/dish.interface";
import { ICuisine } from "../shared/interfaces/cuisine.interface";
import { JapaneseCuisine } from "../cuisine/japanese-cuisine";
import { UkrainianCuisine } from "../cuisine/ukrainian-cuisine";

export class Restaurant {
  prepareOrder(order:Order):IDish | null {
    const dish = this.getDish(order.dishType);
    const cuisine = this.getCuisine(order.country);
    if(cuisine && dish) {
      return cuisine.cook(dish);
    }
    return null;
  }

  private getDish(dishType:DishesTypes):IDish | null {
    let dish:IDish;
    switch (dishType) {
      case DishesTypes.FIRST_DISH:
        dish = new FirstDish();
        break;
      case DishesTypes.SECOND_DISH:
        dish = new SecondDish();
        break;
      case DishesTypes.THIRD_DISH:
        dish = new ThirdDish();
        break;
      case DishesTypes.DESERT:
        dish = new Desert();
        break;
      default:
        dish = null;
        break;
    }
    return dish;
  }

  private getCuisine(cuisineType: CuisinesTypes):ICuisine | null {
    let cuisine:ICuisine | null;
    switch (cuisineType) {
      case CuisinesTypes.AMERICAN:
        cuisine = new AmericanCuisine();
        break;
      case CuisinesTypes.JAPANESE:
        cuisine = new JapaneseCuisine();
        break;
      case CuisinesTypes.UKRAINIAN:
        cuisine = new UkrainianCuisine();
        break;
      default:
        cuisine = null;
        break
    }
    return cuisine;
  }
}
