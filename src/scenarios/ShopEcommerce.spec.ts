import { test, expect } from '@playwright/test';
import { ShopPage } from '../support/pages/ShopPage';

test.describe('Demoblaze Store', () => {
  let shop: ShopPage;

  test.beforeEach(async ({ page }) => {
    shop = new ShopPage(page);
    await shop.openHome();
  });

  test('1 - Deve carregar a página inicial', async ({ page }) => {
    await expect(page).toHaveTitle(/STORE/);
  });

  test('2 - Deve abrir o primeiro produto e exibir o botão de adicionar ao carrinho', async () => {
    await shop.openFirstProduct();
    await expect(shop['page'].locator('text=Add to cart')).toBeVisible();
  });

  test('3 - Deve adicionar o primeiro produto ao carrinho', async () => {
    await shop.openFirstProduct();
    await shop.addProductToCart();
  });

  test('4 - Deve acessar o carrinho e verificar o produto listado', async () => {
    await shop.openFirstProduct();
    await shop.addProductToCart();
    await shop.goToCart();
    const items = await shop['page'].locator('#tbodyid tr').count();
    expect(items).toBeGreaterThan(0);
  });

  test('5 - Deve abrir o modal de contato e enviar uma mensagem', async () => {
    await shop.openContactModal();
    await shop.sendContactMessage(
      'teste@exemplo.com',
      'Nicolas',
      'Mensagem de automação.'
    );
  });

  test('6 - Deve preencher e enviar o formulário de Contato', async () => {
    await shop.openContactForm();
    await shop.fillContactForm('nicolas@test.com', 'Nicolas', 'Teste automatizado de contato.');
    await shop.submitContactForm();
    await expect(shop['page']).toHaveURL(/demoblaze\.com/);
  });

  test('7 - Deve preencher e enviar o formulário de Place Order', async () => {
    await shop.openPlaceOrderForm();
    await shop.fillPlaceOrderForm();
    await shop.submitPlaceOrderForm();
    await expect(shop['page']).toHaveURL(/demoblaze\.com/);
  });
});
