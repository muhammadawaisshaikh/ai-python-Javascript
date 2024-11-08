import { Component } from '@angular/core';
import { IRecipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-recipes-listing',
  standalone: true,
  imports: [],
  templateUrl: './recipes-listing.component.html',
  styleUrl: './recipes-listing.component.scss'
})
export class RecipesListingComponent {
  recipes: IRecipe[] = [
    {
      title: 'Starter Recipe',
      img: 'assets/img/getting-started-with-gemini.png',
      desc: 'Actionable Recipe to show the proper integration of Gemini with Angular.',
      url: '/starter',
      github: 'https://github.com/muhammadawaisshaikh/ai-python-Javascript/tree/main/Angular/src/app/components/text-based-gemini',
    },
    {
      title: 'Building Ai Powered Chat App',
      img: 'assets/img/ai-powered-chat-app.png',
      desc: 'Step-by-Step Guide for Seamless Integration of Gemini with Angular in an AI-Powered Chat App',
      url: '/chat',
      github: 'https://github.com/muhammadawaisshaikh/ai-python-Javascript/tree/main/Angular/src/app/pages/chat',
    },
    {
      title: 'Ai Powered Skill Quiz Generator',
      img: 'assets/img/skill-quiz-generator-ai-app.png',
      desc: 'AI-Driven Skill Quiz Generator for Enhanced Learning and Assessment for Organizations.',
      url: '/skill-quiz-generator',
      github: 'https://github.com/muhammadawaisshaikh/ai-python-Javascript/tree/main/Angular/src/app/pages/skill-quiz-generator',
    },
    {
      title: 'Sentiment Analysis Tool',
      img: 'assets/img/sentiment-analysis-using-ai.png',
      desc: 'AI-Powered Sentiment Analysis on Data/Text for Enhanced Insights on reviews/ratings/messages.',
      url: '/sentiment-analyzer',
      github: 'https://github.com/muhammadawaisshaikh/ai-python-Javascript/tree/main/Angular/src/app/pages/sentiment-analyzer',
    },
    {
      title: 'Ai Powered Plant Identifier',
      img: 'assets/img/plat-identifier-using-ai.png',
      desc: 'AI-Powered Plant Identification Tool for Instant Recognition and Information.',
      url: '/recognize-plant',
      github: 'https://github.com/muhammadawaisshaikh/ai-python-Javascript/tree/main/Angular/src/app/pages/recognize-plant',
    },
  ];
}
