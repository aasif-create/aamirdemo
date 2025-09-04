export const add = (a: number, b: number): number => {
    return a + b;
};

export const subtract = (a: number, b: number): number => {
    return a - b;
};

export const multiply = (a: number, b: number): number => {
    return a * b;
};

export const divide = (a: number, b: number): number => {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
};

export const squareRoot = (a: number): number => {
    if (a < 0) {
        throw new Error("Cannot take the square root of a negative number");
    }
    return Math.sqrt(a);
};

export const power = (base: number, exponent: number): number => {
    return Math.pow(base, exponent);
};

export const sine = (angle: number): number => {
    return Math.sin(angle);
};

export const cosine = (angle: number): number => {
    return Math.cos(angle);
};

export const tangent = (angle: number): number => {
    return Math.tan(angle);
};