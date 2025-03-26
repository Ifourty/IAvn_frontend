import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WorldBuildingService } from '../../../services/world-building.service';

@Component({
  selector: 'app-new-game-page',
  imports: [MatSliderModule, InputTextModule, FormsModule, FloatLabelModule, MatIconModule],
  templateUrl: './new-game-page.component.html',
  styleUrl: './new-game-page.component.scss'
})
export class NewGamePageComponent implements OnInit {

  readonly menuTabs = [
    { name: "World Story", mode: "worldStory" },
    { name: "Characters", mode: "characters" },
    { name: "Factions", mode: "factions" },
    { name: "Regions", mode: "regions" },
    { name: "Cities", mode: "cities" },
  ]
  selectedMenuMode = "worldBuilding"
  selectedMenu !: HTMLElement
  currentStep = 0;
  prompt = ""
  _snackbar = inject(MatSnackBar)
  _worldBuildingService = inject(WorldBuildingService)

  formatLabel(value: number): string {
    return `${value}`;
  }

  ngOnInit() {
    this._worldBuildingService.resetThread()
  }

  setSelectedMenu(mode: string, menu: HTMLElement) {
    this.selectedMenuMode = mode

  }

  sendPrompt() {

    this._snackbar.open(this.prompt + this.currentStep, 'close', {
      duration: 15000,
      panelClass: ['custom-snackbar']
    })
  }


}
