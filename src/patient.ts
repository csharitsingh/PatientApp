export class PatientList {
  patientID: number;
  centerID: number;
  HospitalID: string;
  age: number;
  dateofconsent: string;
  gender: string;
  SEMID: number;

  constructor(
    patientID,
    centerID,
    hospitalID,
    age,
    dateofconsent,
    gender,
    SEMID
  ) {
    this.patientID = patientID;
    this.centerID = centerID;
    this.HospitalID = hospitalID;
    this.age = age;
    this.dateofconsent = dateofconsent;
    this.gender = gender;
    this.SEMID = SEMID;
  }
}

export interface IpatientList {
  $selected?: boolean;
  $disabled?: boolean;
}

export const pateintD: PatientList[] = [
  {
    patientID: 1,
    centerID: 10,
    HospitalID: 'AF321',
    age: 21,
    dateofconsent: '12/04/2022',
    gender: 'Male',
    SEMID: 151,
  },
  {
    patientID: 2,
    centerID: 11,
    HospitalID: 'AF323',
    age: 20,
    dateofconsent: '18/12/2022',
    gender: 'Female',
    SEMID: 152,
  },
  {
    patientID: 3,
    centerID: 12,
    HospitalID: 'AF324',
    age: 25,
    dateofconsent: '12/11/2022',
    gender: 'Male',
    SEMID: 153,
  },
  {
    patientID: 4,
    centerID: 13,
    HospitalID: 'AF325',
    age: 29,
    dateofconsent: '19/04/2022',
    gender: 'Male',
    SEMID: 154,
  },
  {
    patientID: 5,
    centerID: 14,
    HospitalID: 'AF326',
    age: 22,
    dateofconsent: '12/05/2022',
    gender: 'Female',
    SEMID: 155,
  },
  {
    patientID: 6,
    centerID: 15,
    HospitalID: 'AF327',
    age: 21,
    dateofconsent: '12/05/2022',
    gender: 'Male',
    SEMID: 156,
  },
  {
    patientID: 7,
    centerID: 16,
    HospitalID: 'AF328',
    age: 19,
    dateofconsent: '12/05/2022',
    gender: 'Male',
    SEMID: 157,
  },
  {
    patientID: 8,
    centerID: 17,
    HospitalID: 'AF329',
    age: 24,
    dateofconsent: '12/05/2022',
    gender: 'Female',
    SEMID: 158,
  },
  {
    patientID: 9,
    centerID: 18,
    HospitalID: 'AF330',
    age: 28,
    dateofconsent: '12/05/2022',
    gender: 'Male',
    SEMID: 159,
  },
  {
    patientID: 10,
    centerID: 19,
    HospitalID: 'AF331',
    age: 23,
    dateofconsent: '12/05/2022',
    gender: 'Female',
    SEMID: 160,
  },
  {
    patientID: 11,
    centerID: 20,
    HospitalID: 'AF332',
    age: 30,
    dateofconsent: '12/05/2022',
    gender: 'Male',
    SEMID: 161,
  },
  {
    patientID: 12,
    centerID: 21,
    HospitalID: 'AF333',
    age: 27,
    dateofconsent: '12/05/2022',
    gender: 'Male',
    SEMID: 162,
  },
  {
    patientID: 13,
    centerID: 22,
    HospitalID: 'AF333',
    age: 25,
    dateofconsent: '12/05/2022',
    gender: 'Female',
    SEMID: 163,
  },
  {
    patientID: 14,
    centerID: 23,
    HospitalID: 'AF334',
    age: 23,
    dateofconsent: '12/05/2022',
    gender: 'Male',
    SEMID: 164,
  },
  {
    patientID: 15,
    centerID: 24,
    HospitalID: 'AF3335',
    age: 22,
    dateofconsent: '12/05/2022',
    gender: 'Female',
    SEMID: 165,
  },
  {
    patientID: 16,
    centerID: 25,
    HospitalID: 'AF336',
    age: 21,
    dateofconsent: '12/05/2022',
    gender: 'Male',
    SEMID: 166,
  },
  {
    patientID: 17,
    centerID: 26,
    HospitalID: 'AF337',
    age: 18,
    dateofconsent: '12/05/2022',
    gender: 'Male',
    SEMID: 167,
  },
  {
    patientID: 18,
    centerID: 27,
    HospitalID: 'AF338',
    age: 22,
    dateofconsent: '12/05/2022',
    gender: 'Female',
    SEMID: 168,
  },
  {
    patientID: 19,
    centerID: 28,
    HospitalID: 'AF339',
    age: 24,
    dateofconsent: '12/05/2022',
    gender: 'Male',
    SEMID: 169,
  },
  {
    patientID: 20,
    centerID: 29,
    HospitalID: 'AF340',
    age: 26,
    dateofconsent: '12/05/2022',
    gender: 'Female',
    SEMID: 170,
  },
  {
    patientID: 21,
    centerID: 30,
    HospitalID: 'AF341',
    age: 28,
    dateofconsent: '12/05/2022',
    gender: 'Male',
    SEMID: 171,
  },
];
