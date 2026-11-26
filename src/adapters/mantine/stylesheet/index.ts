import { searchResultsStyles } from "@adapters/mantine/searchResults/styles";
import { fieldLabelStyles } from "@adapters/mantine/fieldLabel/styles";
import { fieldGridStyles } from "@adapters/mantine/fieldGrid/styles";
import { fieldSlotStyles } from "@adapters/mantine/fieldSlot/styles";
import { fileFieldStyles } from "@adapters/mantine/fileField/styles";
import { searchBarStyles } from "@adapters/mantine/searchBar/styles";
import { devToolsStyles } from "@adapters/mantine/devTools/styles";
import { buttonStyles } from "@adapters/mantine/button/styles";
import { groupStyles } from "@adapters/mantine/group/styles";
import { tableStyles } from "@adapters/mantine/table/styles";
import { formStyles } from "@adapters/mantine/form/styles";

const componentStyles = [
  formStyles,
  fieldLabelStyles,
  groupStyles,
  fieldGridStyles,
  fieldSlotStyles,
  buttonStyles,
  fileFieldStyles,
  tableStyles,
  searchBarStyles,
  searchResultsStyles,
  devToolsStyles
];

const stylesheet = componentStyles.join("\n");

export default stylesheet;
