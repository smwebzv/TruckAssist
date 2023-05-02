import SecureDBGateway from "./SecureDBGateway";

const UserDBGateway = {
  getAccountToken: async function () {
    const userAccounts = await SecureDBGateway.get("user-data");
    if (userAccounts) {
      return userAccounts.token;
    } else {
      return null;
    }
  },
};

export default UserDBGateway;
