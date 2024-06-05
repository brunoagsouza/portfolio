import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedor Fullstack Pleno',
        p: 'Prodemge | Dez 2011 - Atual',
      },
      text: '<p>Desenvolvimento de sistemas para secretarias do estado de Minas Gerais utilizando Html5, Css3, Javascript, TypeScript, Angular 2+, Angular Material e Back-end com o framework Laravel.</p>',
    },
    {
      summary: {
        strong: 'Analista de Suporte',
        p: 'i2 Software | Nov 2008 - Nov 2011',
      },
      text: '<p> Suporte técnico a aplicações, interagindo com ambiente de redes e servidores Linux e suporte remoto a usuários.</p>',
    },
    {
      summary: {
        strong: 'Analista de Suporte',
        p: 'Faculdade UNA | Ago 2007 - Out 2008',
      },
      text: '<p>Instalação e configuração de softwares nos laboratórios e suporte aos alunos e funcionários da instutuição.</p>',
    },
  ]);
}
