import { IElement, IResult } from '../interfaces/Index';

export function selectOptimalElements(
    elements: IElement[],
    minCalories: number,
    maxWeight: number
): IResult | null {
    const dp: number[] = Array(maxWeight + 1).fill(0);
    const selections: IElement[][] = Array(maxWeight + 1)
        .fill(null)
        .map(() => []);

    for (const element of elements) {
        for (let w = maxWeight; w >= element.weight; w--) {
            const newCalories = dp[w - element.weight] + element.calories;
            if (newCalories > dp[w]) {
                dp[w] = newCalories;
                selections[w] = [...selections[w - element.weight], element];
            }
        }
    }

    for (let w = 0; w <= maxWeight; w++) {
        if (dp[w] >= minCalories) {
            return {
                elements: selections[w],
                totalWeight: w,
                totalCalories: dp[w],
            };
        }
    }

    return null;
}
