import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../components/text-based-gemini/text-based-gemini.component').then(c => c.TextBasedGeminiComponent)
    }
];
