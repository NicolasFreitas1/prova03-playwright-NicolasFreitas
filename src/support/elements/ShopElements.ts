export class ShopElements {
  // Header
  static navHome = '#navbarExample a.nav-link[href="index.html"]';
  static navContact = '#navbarExample a[data-target="#exampleModal"]';
  static navAbout = '#navbarExample a[data-target="#videoModal"]';
  static navCart = '#cartur';
  static navLogin = '#login2';
  static navSignup = '#signin2';

  // Login modal
  static loginUsername = '#loginusername';
  static loginPassword = '#loginpassword';
  static loginButton = 'button[onclick="logIn()"]';
  static closeLogin = '#logInModal .btn-secondary';

  // Product grid
  static firstProduct = '.card-title a';
  static addToCartButton = 'a[onclick*="addToCart"]';

  // Cart page
  static cartTable = '#tbodyid tr';
  static deleteButton = 'a[onclick^="deleteItem"]';
  static placeOrderButton = 'button[data-target="#orderModal"]';

  // Contact modal
  static contactModal = '#exampleModal';
  static contactEmail = '#recipient-email';
  static contactName = '#recipient-name';
  static contactMessage = '#message-text';
  static sendMessageButton = 'button[onclick="send()"]';


  // Place Order form
  static orderModal = '#orderModal';
  static orderName = '#name';
  static orderCountry = '#country';
  static orderCity = '#city';
  static orderCard = '#card';
  static orderMonth = '#month';
  static orderYear = '#year';
  static purchaseButton = 'button[onclick="purchaseOrder()"]';
}
