export class PatientList{
    patientID : number;
    centerID : number;
    HospitalID : string;
    age : number;
    dateofconsent: string;
    gender:string;
    SEMID : number;

    constructor(patientID, centerID,hospitalID,age,dateofconsent,gender,SEMID){
        this.patientID=patientID;
        this.centerID=centerID;
        this.HospitalID=hospitalID;
        this.age=age;
        this.dateofconsent=dateofconsent;
        this.gender=gender;
        this.SEMID=SEMID;

    }

}

export interface IpatientList{
    $selected?:boolean;
    $disabled?: boolean
}

export const pateintD : PatientList[] =[
    {patientID:1, centerID:10, HospitalID: "AF321" , age:21 ,dateofconsent:"12/04/2022", gender:"Male" , SEMID:151},
    {patientID:2, centerID:12, HospitalID: "AF323" , age:20 ,dateofconsent:"18/12/2022", gender:"Female" , SEMID:152},
    {patientID:3, centerID:13, HospitalID: "AF324" , age:25 ,dateofconsent:"12/11/2022", gender:"Male" , SEMID:153},
    {patientID:4, centerID:14, HospitalID: "AF325" , age:29 ,dateofconsent:"19/04/2022", gender:"Male" , SEMID:154},
    {patientID:5, centerID:15, HospitalID: "AF326" , age:22 ,dateofconsent:"12/05/2022", gender:"Female" , SEMID:155},
]

