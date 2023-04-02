import { Given, Then } from "cypress-cucumber-preprocessor/steps"
import utilACtions from "../../support/commands/utilsactions"

const utilsAction = new utilACtions();

Given('Client call user endpoint', () => {
  cy.request("https://jsonplaceholder.typicode.com/users").as('response')
});

Then('Validate that username exist', () => {
  cy.get('@response').should((resp) => {
    expect(resp.status).to.be.eq(200)
    const username = utilsAction.getusername(resp.body, "Samantha")
    expect(username).to.be.equal("Samantha")
  })
})

Given('Client make a new post with userid {string}, title {string} and body {string}', (id, title, body) => {
  cy.request({
    method: "Post",
    url: "https://jsonplaceholder.typicode.com/posts",
    Headers: {
      'Content-Type': ('application/json; charset=UTF-8')
    },
    body: {
      "userId": id,
      "title": title,
      "body": body
    }
  }).as('response')
});

Then('Validate that response return userid {string}, title {string} and body {string}', (id, title, body) => {
  cy.get('@response').should((resp) => {
    expect(resp.status).to.eq(201)
    expect(resp.body.userId).to.eq(id)
    expect(resp.body.title).to.be.equal(title)
    expect(resp.body.body).to.be.equal(body)
  })
})

Given('Client make a post to endpoint photos', () => {
    cy.request({
    method: "Post",
    url: "https://jsonplaceholder.typicode.com/photos",
    Headers: {
      'Content-Type': ('application/json; charset=UTF-8')
    }
  }).as('response')
});

Then('Validate that the call is successful', () => {
  cy.get('@response').should((resp) => {
    expect(resp.status).to.eq(201) 
    expect(resp.duration).to.be.lessThan(100)   
  })
})
