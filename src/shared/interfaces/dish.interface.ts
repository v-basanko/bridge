import { DishesTypes } from "../enums/dishes-types";

export interface IDish {
  type: DishesTypes;
  country: string;
  cookedAt: Date;
  setCountry: (country: string)=>IDish;
  setCookedAt: (cookedAt: Date)=>IDish;
  toString: () => string;
}
