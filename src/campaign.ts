import { Donation } from "./donation";
/** Setting a predefined list of donation types available for easier managing */
export enum DonationType {
    EUR = "EUR",
    USD = "USD",
    GBP = "GBP",
    BTC = "BTC",
    ETH = "ETH",
}

enum CampaignStatus {
    CLOSED = 0,
    OPEN = 1
}

/** Local memory representation of a project that will be stored on the ledger */
export class Campaign {
    projectName: string
    donations: Donation[] = []
    status: CampaignStatus
    totals= {
        eur:0,
        usd:0,
        gbp:0,
        btc:0,
        eth:0
    }

    constructor(name:string){
        this.projectName = name
        this.status = CampaignStatus.OPEN
    }

    public closeCampaign() {
        this.status = CampaignStatus.CLOSED
    }

    private updateBalance(transactionType: DonationType,transactionAmount:number) {
        switch(transactionType) {
            case "EUR": this.totals.eur +=transactionAmount
            case "USD": this.totals.usd +=transactionAmount
            case "GBP": this.totals.gbp +=transactionAmount
            case "BTC": this.totals.btc +=transactionAmount
            case "ETH": this.totals.eth +=transactionAmount
            default: throw new Error("Donation type not supported")
        }
    }

    public processDonation(donation:Donation):boolean{
        if (this.status === CampaignStatus.CLOSED) {
            return false
        }
        this.updateBalance(donation.donationType,donation.donationAmount);
        this.donations.push(donation)
        return true
    }
}