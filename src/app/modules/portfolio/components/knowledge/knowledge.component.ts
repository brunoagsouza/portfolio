import { Component, signal } from '@angular/core';

// Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de html5',
      title: 'HTML 5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de css3',
      title: 'CSS 3',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de javascript',
      title: 'Javascript',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de angular',
      title: 'Angular',
    },
    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'Ícone de conhecimento de typescript',
      title: 'Typescript',
    },
    {
      src: 'assets/icons/knowledge/php.svg',
      alt: 'Ícone de conhecimento de PHP',
      title: 'PHP',
    },
    {
      src: 'assets/icons/knowledge/mysql.svg',
      alt: 'Ícone de conhecimento de MySql',
      title: 'MySql',
    },
  ]);
}
