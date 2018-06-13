/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyserNameService } from './myser-name.service';

describe('MyserNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyserNameService]
    });
  });

  it('should ...', inject([MyserNameService], (service: MyserNameService) => {
    expect(service).toBeTruthy();
  }));
});
