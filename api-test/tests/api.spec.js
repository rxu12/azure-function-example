"use strict";
const request = require("supertest");
const serviceUrl = process.env.MICROSERVICE_URL;
const service = request(serviceUrl);
const { expect } = require("chai");

describe("/api/HttpExample", () => {
  describe("No name parameter", () => {
    it("Should respond 200 with expected message string", async () => {
      return await service.get(`/api/HttpExample`).expect(function (res) {
        expect(res.text).to.be.equal(
          "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response."
        );
      });
    });
  });

  describe("With name parameter", () => {
    it("Should respond 200 with message string that contains name value", async () => {
      return await service
        .get(`/api/HttpExample?name=Ray`)
        .expect(function (res) {
          expect(res.text).to.be.equal(
            "Hello, Ray. This HTTP triggered function executed successfully."
          );
        });
    });
  });
});
