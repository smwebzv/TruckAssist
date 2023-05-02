import EncryptedStorage from "react-native-encrypted-storage";

const SecureDBGateway = {
  get: async function (data_name: string) {
    try {
      const session = await EncryptedStorage.getItem(data_name);

      if (session != undefined && session != null) {
        let data = JSON.parse(session);
        return data;
      }
      return false;
    } catch (error) {
      return null;
    }
  },

  set: async function (data_name: string, data: any) {
    try {
      await EncryptedStorage.setItem(data_name, JSON.stringify(data));
    } catch (error) {
      return null;
    }
  },

  delete: async function (data_name: string) {
    try {
      await EncryptedStorage.removeItem(data_name);
      return true;
    } catch (error) {
      return null;
    }
  },
};

export default SecureDBGateway;
