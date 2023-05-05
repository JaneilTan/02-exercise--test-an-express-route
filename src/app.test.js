const request = require("supertest");
const app = require("./app");

describe("app", () => {
    it("should GET /properties", async () => {
        const expected = [
            {
                "id": 1,
                "askingPrice": "$891822.26",
                "description": "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
                "address": "8 Shasta Pass",
                "title": "A Beauty on Shasta",
                "img": "https://placeimg.com/640/480/arch",
                "private": false
              },
              {
                "id": 3,
                "askingPrice": "$946446.87",
                "description": "Combining contemporary comforts with a functional layout",
                "address": "8237 Moland Hill",
                "title": "Rare Moland Hill Stunner",
                "img": "https://placeimg.com/640/480/arch",
                "private": false
              }
        ];

        await request(app)
            .get("/properties")
            .expect(200)
            .expect((response) => {
                const body = response.body;
                expect(body).toEqual(expected);
            });
            });
            

    });
