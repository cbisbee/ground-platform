/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayerListItemComponent } from './layer-list-item.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { NavigationService } from './../../services/router/router.service';
import { of } from 'rxjs';
import { MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

describe('LayerListItemComponent', () => {
  let component: LayerListItemComponent;
  let fixture: ComponentFixture<LayerListItemComponent>;
  const firestoreStub: Partial<AngularFirestore> = {};

  beforeEach(async(() => {
    const navigationService = {
      getProjectId$: () => of(''),
      getFeatureId$: () => of(''),
    };

    TestBed.configureTestingModule({
      declarations: [LayerListItemComponent],
      imports: [MatListModule, MatMenuModule, MatDialogModule],
      providers: [
        { provide: NavigationService, useValue: navigationService },
        { provide: Router, useValue: {} },
        { provide: AngularFirestore, useValue: firestoreStub },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
