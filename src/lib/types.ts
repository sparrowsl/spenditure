export interface User {
	id?: string;
	email: string;
	password: string;
}

export interface Records {
	id?: string;
	name: string;
	address: string;
	city: string;
	created?: Date;
}
