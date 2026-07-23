import { Component, signal } from '@angular/core';

export const QUESTIONS_FREQUENTES_INTRO =
  "Nous avons fait un listing des questions récurrentes. Merci de lire avant de nous contacter s'il vous plait.";

type FaqItem = {
  question: string;
  answerHtml: string;
};

@Component({
  selector: 'app-questions-frequentes-article',
  standalone: true,
  templateUrl: './questions-frequentes-article.html',
  styleUrl: './questions-frequentes-article.scss',
})
export class QuestionsFrequentesArticle {
  readonly intro = QUESTIONS_FREQUENTES_INTRO;
  readonly openIndex = signal<number | null>(null);

  readonly faqs: FaqItem[] = [
    {
      question: "Puis-je venir faire un essai avant de m'inscrire au club ?",
      answerHtml:
        "Oui, grâce à la fédération vous avez le droit à 3 séances d'essai en scannant le QR code placé à l'entrée du gymnase.",
    },
    {
      question: "Faites-vous de la location de terrain à l'heure ?",
      answerHtml: 'Non.',
    },
    {
      question: 'Il y a t-il des entraînements dirigés ?',
      answerHtml: 'Oui, le jeudi ou le samedi, une semaine sur 2.',
    },
    {
      question: "Puis-je venir plus d'une fois dans la semaine ?",
      answerHtml:
        'Oui, tous les <u><a href="/agenda">creneaux</a></u> sont ouverts, sans reservation au prealable.',
    },
    {
      question: "Mon enfant souhaite faire du badminton, puis-je l'inscrire ?",
      answerHtml:
        "Non, étant donné que nous n'avons pas d'encadrant, nous ne pouvons pas accepter les mineurs dans notre club.",
    },
    {
      question: "J'ai le niveau débutant, puis-je m'inscrire quand même ?",
      answerHtml: 'Oui. Nous acceptons tous les niveaux, notre philosophie etant le loisir.',
    },
    {
      question: 'Pratiquez-vous en compétition ?',
      answerHtml:
        'Oui, nous avons une équipe d\'<u><a href="/competitions">interclub</a></u>, nous organisons deux <u><a href="/competitions">tournois</a></u> internes sur la saison et certains adherents vont également faire des tournois sur la région toulousaine.',
    },
    {
      question: 'Dois-je avoir mon équipement pour jouer ?',
      answerHtml:
        'Oui, nous ne prêtons pas de raquettes. Concernant les volants, vous pouvez les acheter à tarif préférentiel en étant adhérent au club.',
    },
  ];

  isOpen(index: number): boolean {
    return this.openIndex() === index;
  }

  toggleFaq(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
