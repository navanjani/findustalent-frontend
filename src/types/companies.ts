export interface ICompany {
  id?: number;
  logo?: string;
  name: string;
  primaryColor: string;
  slug: string;
  subscriptionId: number;
  subscriptionValidTill: string;
  textColor: string;
  domain: string;
  industry: number;
  location: string;
  description: string;
}

export interface ICreateCompany {
  name: string;
  primaryColor: string;
  textColor: string;
  industry: number;
  location: string;
}
