describe('Laden der Startseite', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/');
  });
});

describe('Titel der Seite korrekt?', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/');
    cy.title().should('eq', 'VANVENTURA');
  });
});

describe('link gut?', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/');
    cy.contains('a', 'Länderregeln').click();
    cy.contains('h2', 'Länder und ihre Regeln').should('be.visible');
  });
});

describe('Kontakt Formular ', () => {
  it('sollte das Kontaktformular ausfüllen können', () => {
    cy.visit('http://localhost:5173/');
    cy.get('input[name="name"]').type('Max Mustermann'); // Beispiel für ein Namensfeld
    cy.get('input[name="Mail"]').type('max@mustermann.de'); // Beispiel für ein E-Mail-Feld
    cy.get('textarea[name="message"]').type('Dies ist eine Testnachricht.'); // Beispiel für ein Nachrichtenfeld
    cy.get('textarea[name="message"]').should(
      'have.value',
      'Dies ist eine Testnachricht.'
    );
  });
});

describe('Klicken eines Buttons', () => {
  it('sollte den Senden-Button im Kontaktformular klicken', () => {
    cy.visit('http://localhost:5173/');
    cy.get('input[name="name"]').type('Max Mustermann');
    cy.get('input[name="Mail"]').type('max@mustermann.de');
    cy.get('textarea[name="message"]').type('Dies ist eine Testnachricht.');
    cy.get('button[type="submit"]').click(); // Senden-Button klicken
  });
});
