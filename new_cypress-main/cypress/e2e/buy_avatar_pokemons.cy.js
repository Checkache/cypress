describe("Покупка аватара на сайте pokemons", function () {
  it("e2e тест на покупку нового аватара для тренера", function () {
    cy.visit("https://pokemonbattle.ru/login");
    cy.get("#k_email").type("USER_LOGIN");
    cy.get("#k_password").type("USER_PASSWORD");
    cy.get(
      "#root > div > div > section > div.style_1_popup_white_in.style_1_popup_white_in_auth > form > button"
    ).click();
    cy.get(
      "#root > div > header > nav > div.right_block > a.header_card_trainer.style_1_interactive_button_link"
    ).click();
    cy.get(
      "#root > div > div > div > div.single_page_body_content > div.single_page_body_content_inner > div.k_mobile.k_content_trainer > div:nth-child(5)"
    ).click();
    cy.get(".available > .shop__button").then(($buttons) => {
      const randomIndex = Math.floor(Math.random() * $buttons.length);
      cy.wrap($buttons[randomIndex]).click();
    });
    cy.get(
      "#root > div > div > main > form > div > div:nth-child(2) > input"
    ).type("4620869113632996");
    cy.get(
      "#root > div > div > main > form > div > div.payment_form_card_form_inputs > div:nth-child(1) > input"
    ).type("1230");
    cy.get(
      "#root > div > div > main > form > div > div.payment_form_card_form_inputs > div:nth-child(2) > input"
    ).type("125");
    cy.get(
      "#root > div > div > main > form > div > div.payment_form_card_form_input.payment_form_card_form_input_last > input"
    ).type("A");
    cy.get(
      "#root > div > div > main > form > div > div.style_1_base_button_payment_body > button"
    ).click();
    cy.get(
      "#root > div > div > main > form > div > div.payment_form_card_form_input > input"
    ).type("56456");
    cy.get(
      "#root > div > div > main > form > div > div.style_1_base_button_payment_body > button"
    ).click();
    cy.get("#root > div > div > main > form > div > div > h3").should(
      "be.visible"
    );
    cy.get("#root > div > div > main > form > div > div > h3").contains(
      "Покупка прошла успешно"
    );
  });
});
