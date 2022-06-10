export interface User {
  id: number;
  name: string;
}

export const fetchUser = () => new Promise<User>((res) => res({
  id: 32,
  name: 'John Doe'
}));
