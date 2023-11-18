export interface User {
	id?: string;
	email: string;
	password: string;
}

export interface Record {
	id?: string;
	name: string;
	email: string;
	contact: string;
	address: string;
	city: string;
	created?: Date;
}
