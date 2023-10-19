import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesComponentForLab } from './messages.lab.component';
import { MessageService } from 'src/app/services/message/message.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('MessagesComponentForLab integration testing', () => {
  let fixture: ComponentFixture<MessagesComponentForLab>;
  let component: MessagesComponentForLab;
  let messageService: MessageService;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesComponentForLab],
      providers: [MessageService],
    });

    fixture = TestBed.createComponent(MessagesComponentForLab);
    component = fixture.componentInstance;
    messageService = TestBed.inject(MessageService);
    debugElement = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create the component successfully', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty template', () => {
    const template = debugElement.query(By.css('.msg'));
    expect(template).toBeFalsy(); // Assuming .msg doesn't exist initially
  });

  it('should display messages in the template after setting them', () => {
    const message = 'Test Message';
    messageService.messages.push(message);
    fixture.detectChanges();

    const template = debugElement.query(By.css('.msg'));
    expect(template).toBeTruthy(); // Assuming .msg exists after setting messages
    expect(template.nativeElement.textContent).toContain(message);
  });
});
