class IterableGroupIterator<T> {
    set: T[]
    counter: number

    constructor(group: IterableGroup<T>) {
        this.set = group.set;
        this.counter = 0;
    }

    next(): { value?: T, done: boolean } {
        if (this.counter > this.set.length - 1) return {done: true};

        let value = this.set[this.counter];

        this.counter++;

        return {value, done: false};
    }
}


class IterableGroup<T> {
    set: T[]

    constructor() {
        this.set = [];
    }

    add(value: T): void {
        if (!this.has(value)) this.set.push(value);
    }

    delete(value: T): void {
        let idx = this.set.indexOf(value);

        if ( idx != -1 ) {
            this.set.splice(idx, 1);
        }
    }

    has(value: T): boolean {
        if ( this.set.indexOf(value) == -1) {
            return false;
        } else {
            return true;
        }
    }

    static from<U>(other: U[]): IterableGroup<U> {
        let group = new IterableGroup<U>();
        other.forEach(element => {
            group.add(element);
        });

        return group;
    }

    toString(): string {
        return this.set.join(',');
    }

    [Symbol.iterator](): IterableGroupIterator<T> {
        return new IterableGroupIterator<T>(this);
    }

}


// Test
console.log('Creating listB...');
let listB = [1, 2, 3, 4, 4, 5, 6, 6, 6];
console.log(listB);
console.log();

console.log('creating groupC...');
let groupC = new IterableGroup();
listB.forEach(element => {
    groupC.add(element);
});
console.log(groupC.toString());
console.log();

console.log('Iterating groupC...');
for (let x of groupC) {
    console.log(x);
}

console.log();