import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  authors = [
    {
      name: 'Muhammad Awais',
      image: 'assets/img/author.jpg',
      description: `Hi there! I'm Muhammad Awais, an internationally recognised passionate Lead Software Engineer with 9+ years of experience who finds joy in crafting exceptional web
                    experiences, fixing breaking logic and bug fixes using top-notch technology stack. My days are filled with lines
                    of code, bringing creativity to life through a top-notch technology stack. Additionally, I have authored a book "Boost Your Angular Applications to Production-Grade with SOLID Design Principles"
                    and contributed as a tech author to Genenerative Ai and JavaScript in Plain English. Die hard supporter of #opensource`,
      contactLinks: [
        { label: 'LinkTree', url: 'https://linktr.ee/mawaisshaikh' },
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/muhammadawaisshaikh',
        },
        { label: 'Website', url: 'https://bit.ly/muhammadawaisshaikh' },
        { label: 'Twitter', url: 'https://www.twitter.com/developerorium' },
      ],
    },
    {
      name: 'Lars Gyrup Brink Nielsen',
      image: 'assets/img/lars-co-author.jpg',
      description: `🏆 4x Microsoft MVP in Developer Technologies
                    🌟 4x GitHub Star
                    🌊 Nx Champion
                    🦸 Angular Hero of Education at ngAwards
                    📗 Author of "Accelerating Angular Development with Ivy" & free book 📘 "The Angular Developer's Nx Handbook"
                    👨‍🏫 Co-founder of the non-profit Open Learning initiative "This is Learning"
                    📣 Organizer of in-person meetup "AarhusJS"
                    👨‍💻 Open-source maintainer in the Ngworkers and RxAngular FOSS teams
                    ❤️ Private and corporate sponsorships welcome at GitHub Sponsors @LayZeeDK`,
      contactLinks: [
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/larsgbn/' },
        { label: 'Github', url: 'https://github.com/LayZeeDK' },
        { label: 'Twitter', url: 'https://twitter.com/layzeedk' },
      ],
    },
    {
      name: 'Sonu Kapoor',
      image: 'assets/img/sonu-co-author.jpg',
      description: `I am a seasoned Senior Developer/Architect with an extensive career spanning over two decades. With more than 15 years 
      of expertise in web applications and a decade dedicated to .NET, my commitment to excellence has been consistently recognized through 
      prestigious awards. Recently, I received the Microsoft Most Valuable Professional (MVP) award in Developer Technologies, acknowledging
      my invaluable contributions to the development community. I am also honored to be a Google Developer Expert (GDE) in Angular, reflecting
      my deep knowledge and impactful contributions to the Angular ecosystem. Additionally, I hold the esteemed title of a recognized rMVP
      and have left my mark on the Angular repository, having been personally invited by Google to serve as an Angular Trusted Contributor.`,
      contactLinks: [
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sonu-kapoor/' },
        { label: 'Github', url: 'https://github.com/sonukapoor' },
        { label: 'Twitter', url: 'https://twitter.com/SonuKapoor1978' },
      ],
    },
  ];
}
