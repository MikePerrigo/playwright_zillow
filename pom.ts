import { expect, type Locator, type Page } from '@playwright/test';

export class MortgageCalculator {
    readonly page: Page;
    readonly homePrice: Locator;
    readonly downPayment: Locator;
    readonly downPaymentPercent: Locator;
    readonly interestRate: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homePrice = page.locator('input#homePrice')
        this.downPayment = page.locator('input#form-2_downPayment')
        this.downPaymentPercent = page.locator('input#form-2_downPaymentPercent')
        this.interestRate = page.locator('input#rate')
    }

    async goto() {
        await this.page.goto('/mortgage-calculator/')
    }

    async editHomePrice(homePrice) {
        await this.homePrice.fill(homePrice)
    }

    async editDownPayment(downPayment) {
        await this.downPayment.clear()
        await this.downPayment.fill(downPayment)
        await this.page.keyboard.press('Enter')
    }
}