import { searchResultsStyles } from "@adapters/antd/searchResults/styles";
import { selectFieldStyles } from "@adapters/antd/selectField/styles";
import { fieldFrameStyles } from "@adapters/antd/fieldFrame/styles";
import { groupListStyles } from "@adapters/antd/groupList/styles";
import { fieldGridStyles } from "@adapters/antd/fieldGrid/styles";
import { fieldSlotStyles } from "@adapters/antd/fieldSlot/styles";
import { fileFieldStyles } from "@adapters/antd/fileField/styles";
import { searchBarStyles } from "@adapters/antd/searchBar/styles";
import { devToolsStyles } from "@adapters/antd/devTools/styles";
import { buttonStyles } from "@adapters/antd/button/styles";
import { groupStyles } from "@adapters/antd/group/styles";
import { formStyles } from "@adapters/antd/form/styles";

const componentStyles = [
  formStyles,
  fieldFrameStyles,
  groupListStyles,
  groupStyles,
  fieldGridStyles,
  fieldSlotStyles,
  selectFieldStyles,
  buttonStyles,
  fileFieldStyles,
  searchBarStyles,
  searchResultsStyles,
  devToolsStyles
];

const stylesheet = componentStyles.join("\n");

export default stylesheet;
