import { Donation } from "./donation";
/** Setting a predefined list of donation types available for easier managing */
export enum DonationType {
    EUR,
    USD,
    GBP,
    BTC,
    ETH,
}

/** Local memory representation of a project that will be stored on the ledger */
export class Project {
    projectName: String
    donations: Donation[] = []
    totals= {
        eur:0,
        usd:0,
        gbp:0,
        btc:0,
        eth:0
    }

    constructor(name:String){
        this.projectName = name
    }
}