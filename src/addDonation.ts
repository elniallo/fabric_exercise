import {Context,Contract} from "fabric-contract-api"
import {Donation} from "./donation"
import {Campaign, DonationType} from "./campaign"
/** Adds a donation to a specified project
 */
export class AddDonation extends Contract {
    /** Adds a donation to a particular campaign */
    public async addDonation(ctx:Context,donationType:string,name:string,donorName:string,amount:number,timestamp:number): Promise<any> {
        let campaign_buf = await ctx.stub.getState(name)
        if (campaign_buf === undefined || campaign_buf.length === 0) {
            throw new Error("Campaign not found")
        } else {
            let campaign: Campaign = JSON.parse(campaign_buf.toString())
            let dtype:DonationType = DonationType[donationType]
            if (dtype === undefined){
                throw new Error("Invalid donation type")
            }
            let donation = new Donation(dtype,amount,name,donorName,timestamp)
            campaign.processDonation(donation)
            return ctx.stub.putState(campaign.projectName,Buffer.from(JSON.stringify(campaign)))
        }
    }
}