export type Address = {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
};

export type Profile = {
  network: string;
  username: string;
  url: string;
};

interface WorkInterface {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
}

interface UserInterface {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: Address;
  profiles: Profile[];
}

export { UserInterface, WorkInterface };
