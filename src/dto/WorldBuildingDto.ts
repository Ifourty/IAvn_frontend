import { Data } from "@angular/router";
import { Character } from "../models/Character.model";

export interface DTOFirstPhase {
    readonly Input: {
        prompt: string;
        phase: number;
    }

    readonly Output: {
        threadId: string;
        runId: string;
        status: string;
        isDone: boolean;
        response: {
            worldStory: string;
        }
    }
}

export interface DTOSecondPhase {
    readonly Input: {
        prompt: string;
        phase: number;
        threadId: string;
        runId: string;
    }

    readonly Output: {
        threadId: string;
        runId: string;
        status: string;
        isDone: boolean;
        response: {
            mainCharacters: [Character];
        }
    }
}

export interface DTOThirdPhase {
    readonly Input: {
        prompt: string;
        phase: number;
        threadId: string;
        runId: string;
    }

    readonly Output: {
        threadId: string;
        runId: string;
        status: string;
        isDone: boolean;
        response: {
            data: [Data];
        }
    }
}

export interface DTOCheckStatus {
    readonly Input: {
        phase: number;
        threadId: string;
        runId: string;
    }
}
