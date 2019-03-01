import { DonationType } from "./campaign";

/** Local representation of a donation transaction that will update the status of a project */
export class Donation {
    donationType: DonationType
    donationAmount: number
    campaign: string
    donor:string
    timestamp: number

    constructor(donationType: DonationType,amount:number,campaign:string,donor:string,timestamp:number){
        this.donationType = donationType
        this.donationAmount = amount
        this.campaign =campaign
        this.donor =donor
        this.timestamp =timestamp
    }
}