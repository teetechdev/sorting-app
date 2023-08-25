import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
console.log('----');

const charactersCollection = new CharactersCollection('Xaayf');
charactersCollection.sort();
console.log(charactersCollection.data);
console.log('----');

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.print();
console.log('----');
linkedList.sort();
linkedList.print();
