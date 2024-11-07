import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { GeminiGoogleAiService } from '../../services/gemini-google-ai/gemini-google-ai.service';

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

  readonly #geminiService = inject(GeminiGoogleAiService);

  async onSubmit() {
    if (!this.userInput.trim()) return;

    this.isLoading = true;

    this.messages.push({ text: this.userInput, isUser: true });

    const userMessage = this.userInput;
    this.userInput = '';

    try {
      const response = await this.#geminiService.askGemini(userMessage);
      this.messages.push({ text: response, isUser: false });
    } catch (err) {
      this.messages.push({
        text: "Error: Couldn't reach the Gemini API",
        isUser: false,
      });
      console.error(err);
    }

    this.isLoading = false;
  }
}
