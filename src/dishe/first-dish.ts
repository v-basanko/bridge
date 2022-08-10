import { DishesTypes } from '../shared/enums/dishes-types';
import { Dish } from "./dish";

export class FirstDish extends Dish {
    constructor() {
        super();
        this._type = DishesTypes.FIRST_DISH;
    }
}
