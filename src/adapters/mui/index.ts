import AutocompleteField from "@adapters/mui/autocompleteField";
import StepIndicator from "@adapters/mui/stepIndicator";
import SearchResults from "@adapters/mui/searchResults";
import SubGroupList from "@adapters/mui/subGroupList";
import SelectField from "@adapters/mui/selectField";
import TextField from "@adapters/mui/textField";
import TagsField from "@adapters/mui/tagsField";
import DateField from "@adapters/mui/dateField";
import FileField from "@adapters/mui/fileField";
import GroupList from "@adapters/mui/groupList";
import FieldGrid from "@adapters/mui/fieldGrid";
import FieldSlot from "@adapters/mui/fieldSlot";
import SearchBar from "@adapters/mui/searchBar";
import DevTools from "@adapters/mui/devTools";
import Divider from "@adapters/mui/divider";
import Message from "@adapters/mui/message";
import Actions from "@adapters/mui/actions";
import Button from "@adapters/mui/button";
import Group from "@adapters/mui/group";
import Table from "@adapters/mui/table";
import Modal from "@adapters/mui/modal";
import Form from "@adapters/mui/form";

import type { FormComponents } from "@core/types";

export const muiComponents: FormComponents = {
  form: Form,
  stepIndicator: StepIndicator,
  groupList: GroupList,
  group: Group,
  subGroupList: SubGroupList,
  fieldGrid: FieldGrid,
  fieldSlot: FieldSlot,
  inputs: {
    text: TextField,
    number: TextField,
    email: TextField,
    currency: TextField,
    percentage: TextField,
    select: SelectField,
    autocomplete: AutocompleteField,
    tags: TagsField,
    date: DateField,
    file: FileField
  },
  message: Message,
  divider: Divider,
  button: Button,
  actions: Actions,
  table: Table,
  modal: Modal,
  searchBar: SearchBar,
  searchResults: SearchResults,
  devTools: DevTools
};
