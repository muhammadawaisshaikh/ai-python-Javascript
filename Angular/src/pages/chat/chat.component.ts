import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GeminiGoogleAiService } from '../../services/gemini-google-ai/gemini-google-ai.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  messages: { text: string; isUser: boolean }[] = [];
  userInput: string = '';
  isLoading: boolean = false;

  constructor(private geminiService: GeminiGoogleAiService) {}

  async onSubmit() {
    if (!this.userInput.trim()) return;

    this.isLoading = true;

    this.messages.push({ text: this.userInput, isUser: true });

    const userMessage = this.userInput;
    this.userInput = '';

    // TODO: Handle errors
    const response = await this.geminiService.askGemini(userMessage);
    this.messages.push({ text: response, isUser: false });

    this.isLoading = false;
  }
}
