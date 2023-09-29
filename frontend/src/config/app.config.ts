interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager', 'Wait Staff', 'Chef'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View restaurant information',
    'View menus',
    'Check reservation status',
    'View table availability',
  ],
  ownerAbilities: ['Manage restaurant information', 'Manage menus', 'Manage reservations', 'Manage restaurant tables'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/3d945e57-492b-4494-bab4-120fc5b7485f',
};
