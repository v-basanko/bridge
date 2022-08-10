import { DishesTypes } from '../shared/enums/dishes-types';
import { Dish } from "./dish";

export class Desert extends Dish {
    constructor() {
        super();
        this._type = DishesTypes.DESERT;
    }
}
