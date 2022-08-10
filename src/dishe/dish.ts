import { DishesTypes } from '../shared/enums/dishes-types';
import { IDish } from "../shared/interfaces/dish.interface";

export abstract class Dish implements IDish {

    get type(): DishesTypes {
        return this._type;
    }

    get country(): string {
        return this._country;
    }

    setCountry(value: string):IDish {
        this._country = value;
        return this;
    }

    get cookedAt(): Date {
        return this._cookedAt;
    }

    setCookedAt(value: Date):IDish {
        this._cookedAt = value;
        return this;
    }

    protected _type: DishesTypes;
    protected _country: string;
    protected _cookedAt: Date;

    toString() {
        return `${this.country} ${this.type}:\nCooked at ${this.cookedAt.toISOString()}\n`;
    }
}
