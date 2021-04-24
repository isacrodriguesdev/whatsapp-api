export class Company {
  constructor(
    public readonly id: string,
    public name: string,
    public email: string,
    public password: string,
    public photo: string,
    public active: boolean,
    public city: string,
    public cnpj_cpf: string,
    public phone_number: string,
    public director_name: string,
    public password_request: boolean,
    public password_token: string,
    public created_at: Date,
    public updated_at: Date
  ) { }
}