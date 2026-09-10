export interface NavDropdownItem {
  title: string;
  href: string;
}

export interface NavItem {
  title: string;
  href: string;
  dropdown?: NavDropdownItem[];
}

export interface ServiceCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
}

export interface ModalityItem {
  id: string;
  title: string;
  description: string;
}

export interface TherapistItem {
  name: string;
  title: string;
  href: string;
}
