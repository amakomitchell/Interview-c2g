import { Injectable } from '@angular/core';
import { Register } from './register';

@Injectable()
export class RegisterService {

  constructor() { }
  states = ['Imo', 'Anambra','Enugu', 'Abia','Lagos','Abuja','Ekiti','Abia','Oyo','Kano'];

  user = new Register(1,'Ugochi','Amako','6/12/1994','Female',this.states[0],'Software Dev','Alakija Street','amako@yahoo.com','sugarpie');


}
