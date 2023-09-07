///<reference types = "cypress" />

describe("Create Project", () => {
  it("Post Project", () => {
    cy.request({
      url: "http://192.168.1.202:8080/rest/api/2/project",
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      auth: {
        username: "akan",
        password: "red123",
      },
      body: {
        key: "DE",
        name: "Delta",
        projectTypeKey: "Software",
        projectTemplateKey:
          "com.atlassian.jira-core-project-templates:jira-core-project-management",
        description: "Delta Project description",
        lead: "Valerie",
        url: "http://192.168.1.202:8080",
        assigneeType: "PROJECT_LEAD",
        avatarId: 10200,
      },
    })
      .its("status")
      .should("eql", 201);
  });
});
