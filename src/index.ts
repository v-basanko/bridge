import {Restaurant} from './restaurant/restaurant';
import {DishesTypes} from './shared/enums/dishes-types';
import {CuisinesTypes} from "./shared/enums/cuisines-types";

const run = () => {
  const restaurant = new Restaurant();

  const americanSecondDish = restaurant.prepareOrder({
    dishType: DishesTypes.SECOND_DISH,
    country: CuisinesTypes.AMERICAN
  });
  console.log(americanSecondDish.toString());

  const ukrainianDesert = restaurant.prepareOrder({
    dishType: DishesTypes.DESERT,
    country: CuisinesTypes.UKRAINIAN
  });
  console.log(ukrainianDesert.toString());
};

run();
