import { DishesTypes } from '../shared/enums/dishes-types';
import { Dish } from "./dish";

export class ThirdDish extends Dish {
    constructor() {
        super();
        this._type = DishesTypes.THIRD_DISH;
    }
}
