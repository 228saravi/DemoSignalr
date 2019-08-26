import { TestBed, inject } from '@angular/core/testing';

import { SignalerChatService } from './signaler-chat.service';

describe('SignalerChatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignalerChatService]
    });
  });

  it('should be created', inject([SignalerChatService], (service: SignalerChatService) => {
    expect(service).toBeTruthy();
  }));
});
