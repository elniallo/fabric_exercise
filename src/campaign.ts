import { Donation } from "./donation";
/** Setting a predefined list of donation types available for easier managing */

export enum CampaignStatus {
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

}