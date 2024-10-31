import { Component } from '@angular/core';
import { GeneratedQuizComponent } from './generated-quiz/generated-quiz.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-skill-quiz-generator',
  standalone: true,
  imports: [GeneratedQuizComponent, ReactiveFormsModule],
  templateUrl: './skill-quiz-generator.component.html',
  styleUrl: './skill-quiz-generator.component.scss'
})
export class SkillQuizGeneratorComponent {
  candidateForm!: FormGroup;
  technologies = ['Angular', 'React', 'JavaScript', 'TypeScript', 'Python', 'Java'];

  constructor(private fb: FormBuilder) {
    this.formInit();
  }

  formInit() {
    this.candidateForm = this.fb.group({
      candidateName: ['', Validators.required],
      technology: ['', Validators.required],
      questionsLength: [5, [Validators.required, Validators.min(5)]]
    });
  }

  hasError(controlName: string, errorNames: string[]) {
    const control = this.candidateForm.get(controlName);
    return control && control.touched && errorNames.some(errorName => control.hasError(errorName));
  }

  onSubmit() {
    if (this.candidateForm.valid) {
      console.log('Form Submitted', this.candidateForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
