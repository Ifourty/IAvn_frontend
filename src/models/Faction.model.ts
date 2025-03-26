import { Data } from "./Data.model";

export interface Faction extends Data {
    id: string;
    type: string;
    new: boolean;
    update: boolean;
    name: string;
    desc: string;
}