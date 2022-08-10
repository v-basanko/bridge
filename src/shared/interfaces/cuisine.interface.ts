import { IDish } from "./dish.interface";

export interface ICuisine {
  cook: (dish:IDish) => IDish;
}
