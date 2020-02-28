import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncountersComponent } from './encounters/encounters.component';
import { MonsterComponent } from './monster/monster.component';
import { MonsterDetailComponent } from './monster/monster-detail/monster-detail.component';
import { EncounterDetailComponent } from './encounters/encounter-detail/encounter-detail.component';
import { EncounterRunnerComponent } from './encounters/encounter-runner/encounter-runner.component';


const routes: Routes = [
  {path: '', component: EncountersComponent},
  {path: 'encounters', component: EncountersComponent},
  {path: 'encounters/:name', component: EncounterDetailComponent},
  {path: 'encounters/:name/run', component: EncounterRunnerComponent},
  {path: 'monsters', component: MonsterComponent},
  {path: 'monsters/:name', component: MonsterDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
