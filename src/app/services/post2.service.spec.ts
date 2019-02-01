import { TestBed, inject } from '@angular/core/testing';

import { Post2Service } from './post2.service';

describe('Post2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Post2Service]
    });
  });

  it('should be created', inject([Post2Service], (service: Post2Service) => {
    expect(service).toBeTruthy();
  }));
});
