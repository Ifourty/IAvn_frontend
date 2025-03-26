import { Data } from "./Data.model";

export interface City extends Data {
    id: string;
    type: string;
    new: boolean;
    update: boolean;
    name: string;
    positionCenter: {
        x: number;
        y: number;
    };
    desc: string;
}