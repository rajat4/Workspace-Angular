import { TestBed } from '@angular/core/testing';

import { RajatsResolver1Resolver } from './rajats-resolver1.resolver';

describe('RajatsResolver1Resolver', () => {
  let resolver: RajatsResolver1Resolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RajatsResolver1Resolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
