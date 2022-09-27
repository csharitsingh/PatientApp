export interface PatientDetailsInterface {
  patientID: number;
  patientName: string;
  HospitalID: string;
  age: number;
  mobile: string;
  dateofconsent: string;
  gender: string;
  SEMID: number;
  dailyCigarettesCount: number;
}

export const pateintDetailsArray: PatientDetailsInterface[] = [
  {
    patientID: 1,
    patientName: 'Gojo',
    mobile: '6355590351',
    HospitalID: 'AF321',
    age: 21,
    dateofconsent: '12/04/2022',
    gender: 'Male',
    SEMID: 151,
    dailyCigarettesCount: 5,
  },
  {
    patientID: 2,
    patientName: 'Gojo',
    mobile: '6355590351',
    HospitalID: 'AF323',
    age: 20,
    dateofconsent: '18/12/2022',
    gender: 'Female',
    SEMID: 152,
    dailyCigarettesCount: 10,
  },
  {
    patientID: 3,
    patientName: 'Gojo',
    mobile: '6355590351',
    HospitalID: 'AF324',
    age: 25,
    dateofconsent: '12/11/2022',
    gender: 'Male',
    SEMID: 153,
    dailyCigarettesCount: 15,
  },
  {
    patientID: 4,
    patientName: 'Gojo',
    mobile: '6355590351',
    HospitalID: 'AF325',
    age: 29,
    dateofconsent: '19/04/2022',
    gender: 'Male',
    SEMID: 154,
    dailyCigarettesCount: 25,
  },
  {
    patientID: 5,
    patientName: 'Gojo',
    mobile: '6355590351',
    HospitalID: 'AF326',
    age: 22,
    dateofconsent: '12/05/2022',
    gender: 'Female',
    SEMID: 155,
    dailyCigarettesCount: 35,
  },
];
