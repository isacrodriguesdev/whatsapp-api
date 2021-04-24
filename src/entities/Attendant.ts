import { assign } from "../helpers/assign/Assign";
import { Uuid } from "../helpers/uuid/Uuidv4";

interface INewAttendant {
  id?: string
  first_name: string
  last_name?: string
  username: string
  password: string
  photo?: string
  status: string
  cpf?: string
  email?: string
  city?: string
  phone?: string
  job_start: Date
  job_end: Date
  socket_id?: string
  created_at?: Date
  updated_at?: Date
}

export class Attendant {

  public readonly id?: string
  public first_name: string
  public last_name?: string
  public username: string
  public password: string
  public photo?: string
  public status: string
  public cpf?: string
  public email?: string
  public city?: string
  public phone?: string
  public job_start: Date
  public job_end: Date
  public socket_id?: string
  public created_at?: Date
  public updated_at?: Date

  constructor(attendant: INewAttendant) {
    this.id = assign(attendant.id, Uuid())
    this.first_name = attendant.first_name
    this.username = attendant.username
    this.password = attendant.password
    this.status = attendant.status
    this.job_start = attendant.job_start
    this.job_end = attendant.job_end
    this.created_at = assign(attendant.created_at, new Date())
    this.updated_at = assign(attendant.updated_at, new Date())
  }
}