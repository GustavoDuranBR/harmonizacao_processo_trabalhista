import { When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../pages/login_page";
const loginPage = new LoginPage();


When("o usuário seleciona o programa {string}", (programa) => {
  loginPage.laborProcess(programa);
});

Then("o programa deve ser selecionado com sucesso", () => {
  loginPage.programaOK();
});
