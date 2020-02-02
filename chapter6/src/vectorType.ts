class Vec {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    plus(other: Vec): Vec {
        return new Vec(this.x + other.x, this.y + other.y);
    }

    minus(other: Vec): Vec {
        return new Vec(this.x - other.x, this.y - other.y);
    }

    get length(): number {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

// Test
const vecA = new Vec(1, 1);
const vecB = new Vec(2, 2);

console.log(vecA.plus(vecB));
console.log(vecA.minus(vecB));

console.log(vecA.length);
console.log(vecB.length);