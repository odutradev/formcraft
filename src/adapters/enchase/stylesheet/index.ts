import { stepIndicatorStyles } from "@adapters/enchase/stepIndicator/styles";
import { searchResultsStyles } from "@adapters/enchase/searchResults/styles";
import { fieldGridStyles } from "@adapters/enchase/fieldGrid/styles";
import { fieldSlotStyles } from "@adapters/enchase/fieldSlot/styles";
import { textFieldStyles } from "@adapters/enchase/textField/styles";
import { tagsFieldStyles } from "@adapters/enchase/tagsField/styles";
import { fileFieldStyles } from "@adapters/enchase/fileField/styles";
import { searchBarStyles } from "@adapters/enchase/searchBar/styles";
import { devToolsStyles } from "@adapters/enchase/devTools/styles";
import { buttonStyles } from "@adapters/enchase/button/styles";
import { groupStyles } from "@adapters/enchase/group/styles";
import { tableStyles } from "@adapters/enchase/table/styles";
import { formStyles } from "@adapters/enchase/form/styles";

const componentStyles = [
  formStyles,
  stepIndicatorStyles,
  groupStyles,
  fieldGridStyles,
  fieldSlotStyles,
  textFieldStyles,
  tagsFieldStyles,
  fileFieldStyles,
  buttonStyles,
  tableStyles,
  searchBarStyles,
  searchResultsStyles,
  devToolsStyles
];

const stylesheet = componentStyles.join("\n");

export default stylesheet;
