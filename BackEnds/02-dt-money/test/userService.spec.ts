import { UserService } from "../src/service/UserService"


describe("userService", () => {
    it("login should return a token", async () => {
        const token = await UserService.login({
            email: "jfghiggino@gmail.com",
            password: "debit123"
        })
        console.log(token)
        expect(token).toBeDefined()
    })


})