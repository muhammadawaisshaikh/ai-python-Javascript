import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GeminiGoogleImageGenService } from '../../services/gemini-google-ai/gemini-google-image-gen.service';

@Component({
  selector: 'app-banner-generator-ai',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './banner-generator-ai.component.html',
  styleUrl: './banner-generator-ai.component.scss'
})
export class BannerGeneratorAiComponent {
  bannerForm: FormGroup;
  generatedPrompt: string = '';
  base64Image: string | null = null;

  constructor(
    private fb: FormBuilder,
    private gemma3ImageGenService: GeminiGoogleImageGenService
  ) {
    this.bannerForm = this.fb.group({
      title: ['Build with AI'],
      bannerType: ['Workshop'],
      host: ['Women Techmakers Hyderabad, Pakistan'],
      date: ['2025-04-08'],
      time: ['14:00'],
      duration: ['1'],
      themeKeywords: ['innovation, diversity, artificial intelligence'],
      aiVisuals: ['neural networks, brain circuits, futuristic technology'],
      branding: ['Women Techmakers logo, blue-green color scheme'],
      speakerDetails: ['Muhammad Awais, Lead Software Engineer @ Royal Cyber'],
      style: ['modern, empowering, tech-focused'],
    });
  }

  generatePrompt() {
    const form = this.bannerForm.value;
    this.generatedPrompt = ''; 

    this.generatedPrompt = `
      Design a professional and vibrant banner for a "${form.bannerType}" titled "${form.title}", 
      hosted by ${form.host}. The workshop will take place on ${new Date(form.date).toDateString()}, 
      from ${form.time} for ${form.duration} hour(s). 

      The theme should reflect: ${form.themeKeywords}. 
      Include strong visual representations of AI such as: ${form.aiVisuals}. 
      Incorporate branding elements like: ${form.branding}. 
      The layout should reserve space for speaker details: ${form.speakerDetails || '[Add Name & Session Info]'}.

      The overall design should feel ${form.style}.
    `.trim();
  }

  generateImage() {
    this.gemma3ImageGenService.generateImage(this.generatedPrompt).subscribe((img) => {
      this.base64Image = img;
    });
  }
}
