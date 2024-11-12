import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AwsBedrockService } from './services/aws-bedrock/aws-bedrock.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'aws-bedrock-angular';

  http = inject(HttpClient);
  bedrock = inject(AwsBedrockService);

  ngOnInit(): void {
    this.onCheckBedRock()
  }

  onCheckBedRock() {
    this.bedrock.syncBedRock("hey, how is your day?");
  }
}
