import { TransactionService } from "../src/service/TransactionService"


describe("TransactionService", () => {
    it("should fail to retrive transactions without the userToken", async () => {

    })

    it("should return transactions given an userId", async () => {
        const userId = "77e359a7-e0d3-41d8-8e9d-4e96a8f0c257"
        const transactionList = await TransactionService.getByUserId(userId)
        expect(transactionList).toBeDefined()
        expect(transactionList.length).toBe(4)
        console.log(transactionList)
    })
})