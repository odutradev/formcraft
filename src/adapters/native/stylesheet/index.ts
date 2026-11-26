import { searchTableViewStyles } from "@adapters/native/searchResults/subcomponents/tableView/styles";
import { paginationStyles } from "@adapters/native/searchResults/subcomponents/pagination/styles";
import { treeViewStyles } from "@adapters/native/searchResults/subcomponents/treeView/styles";
import { stepIndicatorStyles } from "@adapters/native/stepIndicator/styles";
import { searchResultsStyles } from "@adapters/native/searchResults/styles";
import { subGroupListStyles } from "@adapters/native/subGroupList/styles";
import { fieldFrameStyles } from "@adapters/native/fieldFrame/styles";
import { searchBarStyles } from "@adapters/native/searchBar/styles";
import { fieldGridStyles } from "@adapters/native/fieldGrid/styles";
import { fieldSlotStyles } from "@adapters/native/fieldSlot/styles";
import { groupListStyles } from "@adapters/native/groupList/styles";
import { fileFieldStyles } from "@adapters/native/fileField/styles";
import { comboBoxStyles } from "@adapters/native/comboBox/styles";
import { devToolsStyles } from "@adapters/native/devTools/styles";
import { spinnerStyles } from "@adapters/native/spinner/styles";
import { dividerStyles } from "@adapters/native/divider/styles";
import { messageStyles } from "@adapters/native/message/styles";
import { actionsStyles } from "@adapters/native/actions/styles";
import { buttonStyles } from "@adapters/native/button/styles";
import { groupStyles } from "@adapters/native/group/styles";
import { tableStyles } from "@adapters/native/table/styles";
import { modalStyles } from "@adapters/native/modal/styles";
import { formStyles } from "@adapters/native/form/styles";
import { iconStyles } from "@adapters/native/icon/styles";
import { chipStyles } from "@adapters/native/chip/styles";
import { themeStyles } from "@adapters/native/theme";

const componentStyles = [
  themeStyles,
  formStyles,
  iconStyles,
  spinnerStyles,
  fieldFrameStyles,
  comboBoxStyles,
  chipStyles,
  buttonStyles,
  stepIndicatorStyles,
  groupListStyles,
  subGroupListStyles,
  groupStyles,
  fieldGridStyles,
  fieldSlotStyles,
  fileFieldStyles,
  messageStyles,
  dividerStyles,
  actionsStyles,
  tableStyles,
  modalStyles,
  searchBarStyles,
  searchResultsStyles,
  searchTableViewStyles,
  treeViewStyles,
  paginationStyles,
  devToolsStyles
];

const stylesheet = `@layer multi-step-form {\n${componentStyles.map((styles) => styles.trim()).join("\n")}\n}`;

export default stylesheet;
