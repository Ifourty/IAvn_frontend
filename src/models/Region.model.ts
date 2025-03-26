import { City } from "./City.model";
import { Data } from "./Data.model";

export interface Region extends Data {
    id: string;
    type: string;
    new: boolean;
    update: boolean;
    name: string;
    cityList: City[];
    positionCenter: {
        x: number;
        y: number;
    };
}