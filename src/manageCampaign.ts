import { Context,Contract } from "fabric-contract-api";
import {Donation} from "./donation"
import {Campaign,DonationType} from "./campaign"
/**  Adds a project to the ledger to allow for future donations
 */
export class ManageCampaign extends Contract {
    public async createCampaign(ctx:Context,campaignName:string): Promise<any> {
        // check if campaign exists
        let verification = await ctx.stub.getState(campaignName)
        if (verification === undefined || verification.length === 0) {
            let campaign = new Campaign(campaignName)
            return ctx.stub.putState(campaignName,Buffer.from(JSON.stringify(campaign)))
        }
        else {
            throw new Error("Campaign already exists")
        }
        // add campaign to the ledger
    }
    public async closeCampaign(ctx:Context,campaignName:string): Promise<any>{
        // close the campaign to donations
        let campaign_buffer = await ctx.stub.getState(campaignName)
        if (campaign_buffer === undefined || campaign_buffer.length === 0) {
            throw new Error("Cannot find campaign")
        }
        else {
            let campaign: Campaign = JSON.parse(campaign_buffer.toString())
            campaign.closeCampaign()
            return ctx.stub.putState(campaignName,Buffer.from(JSON.stringify(campaign)))
        } 
    }

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