import { Component } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {

  diceImages: string[] = [
    'assets/dice-1.png',
    'assets/dice-2.png',
    'assets/dice-3.webp',
    'assets/dice-4.webp',
    'assets/dice-5.png',
    'assets/dice-6.png'
  ];
  dice1: string = this.diceImages[0];
  dice2: string = this.diceImages[0];
  total: number = 2;

  rollDice(): void {
    const dice1Val = Math.floor(Math.random() * 6);
    const dice2Val = Math.floor(Math.random() * 6);

    this.dice1 = this.diceImages[dice1Val];
    this.dice2 = this.diceImages[dice2Val];
    this.total = dice1Val + dice2Val + 2; // Add 2 to account for 0-based index
  }

  
}


