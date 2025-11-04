import { Page, expect } from '@playwright/test';
import { ShopElements } from '../elements/ShopElements';

export class ShopPage {
  constructor(private page: Page) {}

  async openHome() {
    await this.page.goto('https://www.demoblaze.com/');
    await expect(this.page).toHaveTitle(/STORE/);
  }

  async login(username: string, password: string) {
    await this.page.click(ShopElements.navLogin);
    await this.page.fill(ShopElements.loginUsername, username);
    await this.page.fill(ShopElements.loginPassword, password);
    await this.page.click(ShopElements.loginButton);
    await this.page.waitForTimeout(2000); // pequena espera para login
  }

  async openFirstProduct() {
    await this.page.click(ShopElements.firstProduct);
    await this.page.waitForSelector(ShopElements.addToCartButton);
  }

  async addProductToCart() {
    await this.page.click(ShopElements.addToCartButton);
    await this.page.waitForTimeout(2000); // aguarda o alert
  }

  async goToCart() {
    await this.page.click(ShopElements.navCart);
    await this.page.waitForSelector(ShopElements.cartTable);
  }

  async openContactModal() {
    await this.page.click(ShopElements.navContact);
    await this.page.waitForSelector(ShopElements.contactEmail);
  }

  async sendContactMessage(email: string, name: string, message: string) {
    await this.page.fill(ShopElements.contactEmail, email);
    await this.page.fill(ShopElements.contactName, name);
    await this.page.fill(ShopElements.contactMessage, message);
    await this.page.click(ShopElements.sendMessageButton);
    await this.page.waitForTimeout(2000);
  }

  async openContactForm() {
    await this.page.click('a[data-target="#exampleModal"]'); // botão "Contact"
    await this.page.waitForSelector(ShopElements.contactModal);
  }

  async fillContactForm(email: string, name: string, message: string) {
    await this.page.fill(ShopElements.contactEmail, email);
    await this.page.fill(ShopElements.contactName, name);
    await this.page.fill(ShopElements.contactMessage, message);
  }

  async submitContactForm() {
    // intercepta o alert JavaScript
    this.page.once('dialog', (dialog) => dialog.accept());
    await this.page.click(ShopElements.sendMessageButton);
  }

  // --- FORMULÁRIO DE PLACE ORDER ---
  async openPlaceOrderForm() {
    await this.page.click('#cartur'); // abre carrinho
    await this.page.waitForSelector(ShopElements.placeOrderButton);
    await this.page.click(ShopElements.placeOrderButton);
    await this.page.waitForSelector(ShopElements.orderModal);
  }

  async fillPlaceOrderForm() {
    await this.page.fill(ShopElements.orderName, 'Nicolas Freitas');
    await this.page.fill(ShopElements.orderCountry, 'Brasil');
    await this.page.fill(ShopElements.orderCity, 'Criciúma');
    await this.page.fill(ShopElements.orderCard, '1234567890123456');
    await this.page.fill(ShopElements.orderMonth, '11');
    await this.page.fill(ShopElements.orderYear, '2025');
  }

  async submitPlaceOrderForm() {
    this.page.once('dialog', (dialog) => dialog.accept());
    await this.page.click(ShopElements.purchaseButton);
  }
}
