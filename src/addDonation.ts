import { Context,Contract } from "fabric-contract-api";
import {Donation} from "./donation"
import {Campaign,CampaignStatus} from "./campaign"
/**  Adds a project to the ledger to allow for future donations
 */
export class AddDonation extends Contract {
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
            campaign.status = CampaignStatus.CLOSED
            return ctx.stub.putState(campaignName,Buffer.from(JSON.stringify(campaign)))
        } 
    }

    public async addDonation(ctx:Context,donationType:string,name:string,donorName:string,amount:string,timestamp:string): Promise<any> {
        let campaign_buf = await ctx.stub.getState(name)
        if (campaign_buf === undefined || campaign_buf.length === 0) {
            throw new Error("Campaign not found")
        } else {
            let campaign: Campaign = JSON.parse(campaign_buf.toString())
            let donation = new Donation(donationType,Number(amount),name,donorName,Number(timestamp))
            if (campaign.status === CampaignStatus.OPEN) {
            this.updateBalance(donation.donationType,donation.donationAmount,campaign)
            campaign.donations.push(donation)    
            return ctx.stub.putState(campaign.projectName,Buffer.from(JSON.stringify(campaign)))
            } else {throw new Error("Campaign is closed")}
            
        }
    }

    private updateBalance(transactionType: string,transactionAmount:number, campaign:Campaign) {
        switch(transactionType) {
            case "EUR": {campaign.totals.eur +=transactionAmount
            break}
            case "USD": {campaign.totals.usd +=transactionAmount
                break}
            case "GBP": {campaign.totals.gbp +=transactionAmount
                break}
            case "BTC": {campaign.totals.btc +=transactionAmount
            break}
            case "ETH": {campaign.totals.eth +=transactionAmount
            break}
            default: throw new Error(`Donation type not supported: ${transactionType}`)
        }
    }

    public async retrieveCampaign(ctx:Context,name:string) {
        return ctx.stub.getState(name)
    }


}