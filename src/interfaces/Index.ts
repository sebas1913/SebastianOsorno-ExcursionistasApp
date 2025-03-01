export interface IElement {
    id: string;
    weight: number;
    calories: number;
}

export interface IResult {
    elements: IElement[];
    totalWeight: number;
    totalCalories: number;
}