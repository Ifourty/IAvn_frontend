import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../env/env';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../models/Character.model';
import { City } from '../models/City.model';
import { Faction } from '../models/Faction.model';
import { Region } from '../models/Region.model';
import { DTOCheckStatus, DTOFirstPhase } from '../dto/WorldBuildingDto';

@Injectable({
  providedIn: 'root'
})
export class WorldBuildingService {

  private readonly timeout = 2000;

  private readonly http = inject(HttpClient);
  private baseUrl = environment.apiUrl + 'cgptWorldBuilding';

  private worldStory = new BehaviorSubject<string>('');
  worldStory$ = this.worldStory.asObservable();

  private characters = new BehaviorSubject<Character[]>([]);
  characters$ = this.characters.asObservable();

  private citys = new BehaviorSubject<City[]>([]);
  citys$ = this.citys.asObservable();

  private factions = new BehaviorSubject<Faction[]>([]);
  factions$ = this.factions.asObservable();

  private regions = new BehaviorSubject<Region[]>([]);
  regions$ = this.regions.asObservable();

  private threadId !: string | null;
  private runId !: string | null;

  resetThread() {
    this.threadId = null;
    this.runId = null;
  }

  startWorldBuilding(prompt: string, phase: number) {
    if (phase == 0) {
      const input: DTOFirstPhase['Input'] = {
        prompt: prompt,
        phase: phase
      };

      this.http.post<DTOFirstPhase['Output']>(this.baseUrl, input).subscribe((res: DTOFirstPhase['Output']) => {
        this.threadId = res.threadId;
        this.runId = res.runId;
        setTimeout(() => { this.checkStatus(phase) }, this.timeout);
      })
    }
  }

  checkStatus(phase: number) {
    if (!this.threadId || !this.runId) throw new Error('Thread or Run Id is not set');
    const input: DTOCheckStatus['Input'] = {
      phase: phase,
      threadId: this.threadId,
      runId: this.runId
    };

    this.http.post<DTOFirstPhase['Output']>(this.baseUrl, input).subscribe((res: DTOFirstPhase['Output']) => {
      if (res.isDone) {
        this.worldStory.next(res.response.worldStory);
      } else {
        setTimeout(() => { this.checkStatus(phase) }, this.timeout);
      }
    })

  }
}
