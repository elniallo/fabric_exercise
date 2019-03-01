import { } from "jasmine"
import {Campaign} from "../src/campaign"
describe("Project",()=>{
    it("Should assign to default values on construction",()=>{
        let project = new Campaign("testproject")
        expect(project.projectName).toEqual("testproject")
        expect(project.donations).toBeDefined()
        expect(project.donations.length).toEqual(0)
        expect(project.totals).toBeDefined()
        expect(project.totals.eur).toEqual(0)
        expect(project.totals.gbp).toEqual(0)
        expect(project.totals.usd).toEqual(0)
        expect(project.totals.btc).toEqual(0)
        expect(project.totals.eth).toEqual(0)
    })
})