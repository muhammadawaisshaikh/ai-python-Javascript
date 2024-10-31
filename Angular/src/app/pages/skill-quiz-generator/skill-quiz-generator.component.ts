import { Component } from '@angular/core';
import { GeneratedQuizComponent } from './generated-quiz/generated-quiz.component';

@Component({
  selector: 'app-skill-quiz-generator',
  standalone: true,
  imports: [GeneratedQuizComponent],
  templateUrl: './skill-quiz-generator.component.html',
  styleUrl: './skill-quiz-generator.component.scss'
})
export class SkillQuizGeneratorComponent {

}
