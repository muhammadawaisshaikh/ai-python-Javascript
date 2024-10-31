import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'starter',
    pathMatch: 'full',
  },
  {
    path: 'starter',
    loadComponent: () =>
      import('./components/text-based-gemini/text-based-gemini.component').then(
        (c) => c.TextBasedGeminiComponent,
      ),
  },
  {
    path: 'chat',
    loadComponent: () =>
      import('./pages/chat/chat.component').then((c) => c.ChatComponent),
  },
  {
    path: 'skill-quiz-generator',
    loadComponent: () =>
      import('./pages/skill-quiz-generator/skill-quiz-generator.component').then(c => c.SkillQuizGeneratorComponent)
  }
];
