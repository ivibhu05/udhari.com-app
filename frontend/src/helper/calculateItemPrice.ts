export function calculateDiscountedPrice(originalPrice: number, discountPercent: number): number {
    if (originalPrice < 0 || discountPercent < 0 || discountPercent > 100) {
        throw new Error("Invalid input. Please provide non-negative values for originalPrice and discountPercent (between 0 and 100).");
    }

    const discountAmount = (originalPrice * discountPercent) / 100;
    const discountedPrice = originalPrice - discountAmount;

    return Math.floor(discountedPrice);
}