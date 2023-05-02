import * as React from "react";
import BackgroundGeolocation, {
  Subscription,
} from "react-native-background-geolocation";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleGpsActivation, updateGpsLocation } from "../redux/gps/gpsSlice";
import { RootState } from "../redux/store/store";

const useTracking = () => {
  const dispatch = useDispatch();
  const { isActive, watch_position } = useSelector((state: RootState) => state.gpsData);

  React.useEffect(() => {
    /// 1.  Subscribe to events.
    const onLocation: Subscription = BackgroundGeolocation.onLocation(
      (location) => {
        //console.log('[onLocation]', location);
        dispatch(updateGpsLocation(location));
      }
    );

    const onMotionChange: Subscription = BackgroundGeolocation.onMotionChange(
      (event) => {
        //console.log('[onMotionChange]', event);
      }
    );

    const onActivityChange: Subscription =
      BackgroundGeolocation.onActivityChange((event) => {
        //console.log('[onMotionChange]', event);
      });

    const onProviderChange: Subscription =
      BackgroundGeolocation.onProviderChange((event) => {
        //console.log('[onProviderChange]', event);
      });

    /// 2. ready the plugin.
    BackgroundGeolocation.ready({
      // Geolocation Config
      desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
      distanceFilter: 10,
      // Activity Recognition
      stopTimeout: 5,
      // Application config
      debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
      logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
      stopOnTerminate: false, // <-- Allow the background-service to continue tracking when user closes the app.
      startOnBoot: true, // <-- Auto start tracking when device is powered-up.
      // HTTP / SQLite config
      url: "http://yourserver.com/locations",
      batchSync: false, // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
      autoSync: true, // <-- [Default: true] Set true to sync each location to server as it arrives.
      headers: {
        // <-- Optional HTTP headers
        "X-FOO": "bar",
      },
      params: {
        // <-- Optional HTTP params
        auth_token: "maybe_your_server_authenticates_via_token_YES?",
      },
    }).then((state) => {
      dispatch(toggleGpsActivation(state.enabled));
      console.log(
        "- BackgroundGeolocation is configured and ready: ",
        state.enabled
      );
    });

    return () => {
      // Remove BackgroundGeolocation event-subscribers when the View is removed or refreshed
      // during development live-reload.  Without this, event-listeners will accumulate with
      // each refresh during live-reload.
      onLocation.remove();
      onMotionChange.remove();
      onActivityChange.remove();
      onProviderChange.remove();
    };
  }, []);

  /// 3. start / stop BackgroundGeolocation
  React.useEffect(() => {
    if (isActive) {
      BackgroundGeolocation.start();
    } else {
      BackgroundGeolocation.stop();
      dispatch(updateGpsLocation(""));
    }
  }, [isActive]);
};
export default useTracking;
