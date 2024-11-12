import { Injectable } from '@angular/core';
import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AwsBedrockService {

  modelId: string = "ai21.jamba-1-5-large-v1:0";

  config: any = { 
    region: 'us-east-1',
    credentials: {
      accessKeyId: environment.accessKeyId,
      secretAccessKey: environment.secretAccessKey
    }
  };
  
  client: any = new BedrockRuntimeClient(this.config);

  constructor() { }

  async syncBedRock(prompt: string) {
    const params: any = {
      body: prompt,
      modelId: this.modelId,
      maxTokens: 500,
      temperature: 0.5,
    };

    this.client.send(new InvokeModelCommand(params))
      .then((data: any) => {
        console.log('Response:', data);
      })
      .catch((err: any) => {
        console.error('Error:', err);
      });
  }
}
