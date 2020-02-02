
class MatrixIterator<T> {
    x: number
    y: number
    matrix: Matrix<T>

    constructor(matrix: Matrix<T>) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next(): { value?: { x: number; y: number; value: T }; done: boolean } {
        if (this.y == this.matrix.height) return {done: true};

        const value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)
        };

        this.x++;

        if (this.x == this.matrix.width) {
            this.x = 0;
            this.y++;
        }

        return {value, done: false};
    }
}


class Matrix<T> {
    width: number
    height: number
    content: T[]

    constructor(width: number, height: number, element: (x: number, y: number) => T) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++) {
            for(let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }

    get(x: number, y: number): T {
        return this.content[y * this.width + x];
    }

    set(x: number, y: number, value: T): void {
        this.content[y * this.width + x] = value;
    }

    // https://stackoverflow.com/questions/28739745/how-to-make-an-iterator-out-of-an-es6-class
    [Symbol.iterator](): MatrixIterator<T> {
        return new MatrixIterator<T>(this);
    }
    
}


class SymmetricMatrix<T> extends Matrix<T> {
    constructor(size: number, element: (x: number, y: number) => T) {
        super(size, size, (x, y) => {
            if (x < y) return element(y, x);
            else return element(x, y);
        });
    }

    set(x: number, y: number, value: T): void {
        super.set(x, y, value);
        if (x != y) {
            super.set(y, x, value);
        }
    }
}


/**
 * https://www.typescriptlang.org/docs/handbook/advanced-types.html#typeof-type-guards
 * @param matrixIterator 
 */
function isNotDone<T>(matrixIterator: { x: number; y: number; value: T } | undefined ): matrixIterator is { x: number; y: number; value: T } {
    if (matrixIterator !== undefined) return true
    return false
}


// Test
// let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
const matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);

for (const mat of matrix) {
    // https://www.typescriptlang.org/docs/handbook/advanced-types.html#typeof-type-guards
    if (isNotDone(mat)) console.log(mat.x, mat.y, mat.value);
}