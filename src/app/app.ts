import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { InterestSection } from './components/interest-section/interest-section';

@Component({
  selector: 'app-root',
  imports: [Navbar, InterestSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  backendTopics = [
    'Criação de APIs',
    'Regras de negócio',
    'Banco de dados',
    'Integrações entre sistemas'
  ];

  frontendTopics = [
    'Interfaces modernas',
    'Experiência do usuário',
    'Componentização',
    'Angular e aplicações web'
  ];

  iaTopics = [
    'Criação de chatbots com IA',
    'Automação de atendimento',
    'Respostas inteligentes',
    'Integração com APIs e sistemas'
  ];
}