import { DishesTypes } from '../shared/enums/dishes-types';
import { Dish } from "./dish";

export class SecondDish extends Dish {
    constructor() {
        super();
        this._type = DishesTypes.SECOND_DISH;
    }
}
