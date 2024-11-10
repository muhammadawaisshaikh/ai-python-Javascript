import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'recipes-listing',
    loadComponent: () =>
      import('./pages/recipes-listing/recipes-listing.component').then(
        (c) => c.RecipesListingComponent,
      ),
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
      import(
        './pages/skill-quiz-generator/skill-quiz-generator.component'
      ).then((c) => c.SkillQuizGeneratorComponent),
  },
  {
    path: 'sentiment-analyzer',
    loadComponent: () =>
      import('./pages/sentiment-analyzer/sentiment-analyzer.component').then(
        (c) => c.SentimentAnalyzerComponent,
      ),
  },
  {
    path: 'recognize-plant',
    loadComponent: () =>
      import('./pages/recognise-plant-ai/recognise-plant-ai.component').then(
        (c) => c.RecognisePlantAiComponent,
      ),
  },
  {
    path: 'feedback-analyzer',
    loadComponent: () =>
      import('./pages/feedback-analyzer/feedback-analyzer.component').then(
        (c) => c.FeedbackAnalyzerComponent,
      ),
  },
  {
    path: 'health-report-ai',
    loadComponent: () =>
      import('./pages/heath-report-ai/heath-report-ai.component').then(
        (c) => c.HeathReportAiComponent,
      ),
  },
];
