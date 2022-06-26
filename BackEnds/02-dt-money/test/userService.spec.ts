import { UserService } from "../src/service/UserService"

type ExpectedTokenResponse = {
    username: {
        firstname: string
        lastname: string
        phonenumber: string
        email: string
        id: string
    }
    token: string
}

describe("userService", () => {
    it("login should return a token", async () => {
        const token: ExpectedTokenResponse = await UserService.login({
            email: "jfghiggino@gmail.com",
            password: "errado"
        })
        // console.log(token)
        expect(token).toBeDefined()
        expect(token.userForToken.email as string).toBe( "jfghiggino@gmail.com")
        expect(token.userForToken.id as string).toBe('77e359a7-e0d3-41d8-8e9d-4e96a8f0c257')
    })


})