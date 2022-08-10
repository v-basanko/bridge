import { CuisinesTypes } from "../enums/cuisines-types";
import { DishesTypes } from "../enums/dishes-types";

export interface Order {
    country: CuisinesTypes;
    dishType: DishesTypes;
}
