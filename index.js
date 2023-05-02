/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { startNetworkLogging } from 'react-native-network-logger';
import { store, persistor, RootState } from './src/redux/store/store';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from 'react-redux';
import { injectStore } from './src/helpers/axiosInterceptor';

injectStore(store);

const MainApp = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}></PersistGate>
            <App />
        </Provider>
    )
}

startNetworkLogging();
AppRegistry.registerComponent(appName, () => MainApp);
