import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule,
         MatMenuModule,
         MatIconModule,
         MatCardModule,
         MatButtonModule,
         MatTableModule,
         MatDividerModule,
         MatProgressSpinnerModule,
         MatListModule,
         MatGridListModule,
         MatDialogModule,
         MatFormFieldModule,
         MatInputModule,
         MatOptionModule,
         MatSelectModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncountersComponent } from './encounters/encounters.component';
import { MonsterComponent } from './monster/monster.component';
import { MonsterDetailComponent } from './monster/monster-detail/monster-detail.component';
import { MonsterDetailSmallComponent } from './monster/monster-detail-small/monster-detail-small.component';
import { EncounterDetailComponent } from './encounters/encounter-detail/encounter-detail.component';
import { AbilityModPipe } from './ability-mod.pipe';
import { CrPipe } from './cr.pipe';
import { EncounterDetailSmallComponent } from './encounters/encounter-detail-small/encounter-detail-small.component';
import { EncounterDialogComponent } from './encounters/encounter-dialog/encounter-dialog.component';
import { MonsterEncounterDialogComponent } from './monster/monster-encounter-dialog/monster-encounter-dialog.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { EncounterRunnerComponent } from './encounters/encounter-runner/encounter-runner.component';

@NgModule({
  declarations: [
    AppComponent,
    EncountersComponent,
    MonsterComponent,
    MonsterDetailComponent,
    MonsterDetailSmallComponent,
    EncounterDetailComponent,
    AbilityModPipe,
    CrPipe,
    EncounterDetailSmallComponent,
    EncounterDialogComponent,
    MonsterEncounterDialogComponent,
    EncounterRunnerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EncounterDialogComponent, MonsterEncounterDialogComponent]
})
export class AppModule { }
