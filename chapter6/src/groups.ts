class Group<T> {
    set: T[]

    constructor() {
        this.set = [];
    }

    add(value: T): void {
        if (!this.has(value)) this.set.push(value);
    }

    delete(value: T): void {
        const idx = this.set.indexOf(value);

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

    static from<U>(other: U[]): Group<U> {
        const group = new Group<U>();
        other.forEach(element => {
            group.add(element);
        });

        return group;
    }

    toString(): string {
        return this.set.join(',');
    }
}



// Test
console.log('Creating listA...');
const listA = [1, 2, 3, 4, 4, 5, 6, 6, 6];
console.log(listA);
console.log();

console.log('creating groupA...');
const groupA = new Group();
listA.forEach(element => {
    groupA.add(element);
});
console.log(groupA.toString());
console.log();

console.log('Removing some values from the set...');
groupA.delete(3);
groupA.delete(7);
console.log(groupA.toString());
console.log();

console.log('Creating groupB from listA by from()...');
// let groupB = new Group();
const groupB = Group.from(listA);
console.log(groupB.toString());
console.log();