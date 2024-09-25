import { When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../pages/login_page";
const loginPage = new LoginPage();


When("o usuário esteja na página dos programas", () => {
  loginPage.loginOK();
});

Then("o programa está pronto para ser executado", () => {
  loginPage.programaOK();
});
