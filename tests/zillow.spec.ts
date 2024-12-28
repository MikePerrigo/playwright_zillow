import { test, expect } from '@playwright/test';
import { MortgageCalculator } from '../pom'

test('has title', async ({ page }) => {
  const mtgclc = new MortgageCalculator(page);
  await mtgclc.goto();
  await mtgclc.editHomePrice('450000')
  await mtgclc.editDownPayment('80000')
});
