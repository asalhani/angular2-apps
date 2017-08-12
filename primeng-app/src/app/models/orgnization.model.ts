export class ApplicantOrgnizationRelationModel {
    TypeId: number;
    ArName: string;
    EnName: string;
}


export class OrgnizationModel {
    constructor(){
        this.ApplicantOrgRelation = new Array<ApplicantOrgnizationRelationModel>();
    }
    CRNumber: string;
    Name: string;
    Address: string;
    POBox: string;
    ZipCode: string;
    PhoneNumber: string;
    FaxNumber: string;
    CRIssueDate: string;
    CRExpiryDate: string;
    CRStatus: string;
    IsMainCR: boolean;
    ApplicantOrgRelation: ApplicantOrgnizationRelationModel[];
}
