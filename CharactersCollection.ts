import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter{
    constructor(public data: string) {
        super();
    }
    get length(): number {
        return this.data.length;
    }

    compare(rightIndex: number, leftIndex: number): boolean {
        return this.data[leftIndex].toLowerCase() < this.data[rightIndex].toLowerCase();
    }

    swap(rightIndex: number, leftIndex: number): void {
        const characters = this.data.split('');

        const temp = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = temp;

        this.data = characters.join('');
    }
}