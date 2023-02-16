export const interceptGetCountries = () => {
  const reference = "getCountries";
  cy.intercept("GET", "https://api-football-v1.p.rapidapi.com/v3/countries", {
    fixture: "countries.json",
  }).as(reference);
  return reference;
};

export const interceptGetTeams = () => {
  const reference = "getTeams";
  cy.intercept(
    "GET",
    "https://api-football-v1.p.rapidapi.com/v3/teams?country=argentina",
    {
      fixture: "teams.json",
    }
  ).as(reference);
  return reference;
};

export const interceptGetPlayers = () => {
  const reference = "getPlayers";
  cy.intercept(
    "GET",
    "https://api-football-v1.p.rapidapi.com/v3/players?season=2022&team=26",
    {
      fixture: "players.json",
    }
  ).as(reference);
  return reference;
};

describe("Your Adidas Team", () => {
  const renderAppAndGetPlayers = () => {
    const getCountries = interceptGetCountries();
    const getTeams = interceptGetTeams();
    const getPlayers = interceptGetPlayers();
    cy.visit("/");
    cy.wait(`@${getCountries}`);
    cy.findByText(/your adidas team/i).should("exist");
    cy.get("[data-testid='autocomplete']").type("ARG{downarrow}{enter}");
    cy.wait(`@${getTeams}`);
    cy.wait(`@${getPlayers}`);
  };

  it("Should show an error when more than 2 attackers are selected", () => {
    renderAppAndGetPlayers();
    cy.get(
      "[data-testid='argentina-attacker'] [aria-label='Add to lineup']"
    ).each((item, index, list) => {
      if (index <= 2) {
        cy.get(item).click();
      }
    });
    cy.get(".MuiAlert-message").should(
      "have.text",
      "Ya tienes el máximo de Attacker"
    );
  });

  it("Should show an error when more than 4 midfielders are selected", () => {
    renderAppAndGetPlayers();
    cy.get(
      "[data-testid='argentina-midfielder'] [aria-label='Add to lineup']"
    ).each((item, index, list) => {
      if (index <= 2) {
        cy.get(item).click();
      }
    });
    cy.get(
      "[data-testid='france-midfielder'] [aria-label='Add to lineup']"
    ).each((item, index, list) => {
      if (index <= 2) {
        cy.get(item).click();
      }
    });
  });

  it("Should show an error when more than 4 defenders are selected", () => {
    renderAppAndGetPlayers();
    cy.get(
      "[data-testid='argentina-defender'] [aria-label='Add to lineup']"
    ).each((item, index, list) => {
      if (index <= 2) {
        cy.get(item).click();
      }
    });

    cy.get("[data-testid='france-defender'] [aria-label='Add to lineup']").each(
      (item, index, list) => {
        if (index <= 2) {
          cy.get(item).click();
        }
      }
    );
    cy.get(".MuiAlert-message").should(
      "have.text",
      "Ya tienes el máximo de Defender"
    );
  });

  it("Should show an error when more than 2 goalkeepers are selected", () => {
    renderAppAndGetPlayers();
    cy.get(
      "[data-testid='argentina-goalkeeper'] [aria-label='Add to lineup']"
    ).each((item, index, list) => {
      if (index <= 2) {
        cy.get(item).click();
      }
    });
    cy.get(".MuiAlert-message").should(
      "have.text",
      "Ya tienes el máximo de Goalkeeper"
    );
  });

  it("Should show an error when more than 4 player of the same team are selected", () => {
    renderAppAndGetPlayers();
    cy.get(
      "[data-testid='argentina-attacker'] [aria-label='Add to lineup']"
    ).each((item, index, list) => {
      if (index <= 2) {
        cy.get(item).click();
      }
    });
    cy.get(
      "[data-testid='argentina-defender'] [aria-label='Add to lineup']"
    ).each((item, index, list) => {
      if (index <= 2) {
        cy.get(item).click();
      }
    });
    cy.get(".MuiAlert-message").should(
      "have.text",
      "Ya tienes el máximo de Argentina"
    );
  });
});
