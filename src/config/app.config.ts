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
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Viewer'],
  tenantName: 'Team',
  applicationName: 'Tasky2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage tasks', 'Manage lists', 'Manage users', 'Manage teams'],
  getQuoteUrl: 'https://app.roq.ai/proposal/c92c4540-b1d1-4ca4-b670-37b825bab579',
};
