import { Context,Contract } from "fabric-contract-api";
import {Campaign} from "./campaign"
/**  Adds a project to the ledger to allow for future donations
 */
export class ManageCampaign extends Contract {
    async createCampaign(ctx:Context,campaignName:string): Promise<any> {
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
    async closeCampaign(ctx:Context,campaignName:string): Promise<any>{
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


}