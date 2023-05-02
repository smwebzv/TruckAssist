import * as React from "react";
import { View } from "react-native";
import ShortcutButton from "../../../../../components/ShortcutButton/ShortcutButton";
import { shortcutsButtonsStyle } from "./ShortuctsButtons.style";

interface Iprops {
  setPreviewTab: (tab: number) => void;
  previewTab: number;
}

const ShortcutsButtons = ({ setPreviewTab, previewTab }: Iprops) => {
  return (
    <View style={shortcutsButtonsStyle.mainHolder}>
      <ShortcutButton
        name={previewTab === 1 ? "Info" : "InfoNoneText"}
        setTab={setPreviewTab}
        value={1}
        active={previewTab === 1}
      />
      <ShortcutButton
        name={previewTab === 2 ? "Truck" : "Truck Bill"}
        count={26}
        setTab={setPreviewTab}
        value={2}
        active={previewTab === 2}
        total={35645}
      />
      <ShortcutButton
        name={previewTab === 2 ? "Trailer" : "Trailer Bill"}
        count={8}
        setTab={setPreviewTab}
        value={3}
        active={previewTab === 3}
      />
    </View>
  );
};

export default ShortcutsButtons;
