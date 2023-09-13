import { TestBed } from '@angular/core/testing';
import { GithubdataService } from './github-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
/**
 * How to test an http service :
 * https://angular.io/guide/http-test-requests
 */
describe('GithubdataService', () => {
  let service: GithubdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(GithubdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});