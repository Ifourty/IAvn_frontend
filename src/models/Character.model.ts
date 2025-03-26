import { Data } from "./Data.model";

export interface Character extends Data {
    id: string;
    type: string;
    new: boolean;
    update: boolean;
    name: string;
    desc: string;
    charaType: string;
    sexe: string;
    status: {
        current: string;
        deathAt: string;
        deathInfo: string;
    };
}