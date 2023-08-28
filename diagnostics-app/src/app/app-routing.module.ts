// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Defines routes for app.module
 * Imported by app.module.ts
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelemetryDashboardComponent } from './telemetry/telemetry-dashboard/telemetry-dashboard.component';
import { DiagnosticsDashboardComponent } from './diagnostics/diagnostics-dashboard/diagnostics-dashboard.component';
import { EventsDashboardComponent } from './events/events-dashboard/events-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/telemetry', pathMatch: 'full' },
  { path: 'telemetry', component: TelemetryDashboardComponent },
  { path: 'diagnostics', component: DiagnosticsDashboardComponent },
  { path: 'events', component: EventsDashboardComponent },
  { path: '**', redirectTo: '/telemetry' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
