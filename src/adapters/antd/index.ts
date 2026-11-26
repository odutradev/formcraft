import AutocompleteField from "@adapters/antd/autocompleteField";
import StepIndicator from "@adapters/antd/stepIndicator";
import SearchResults from "@adapters/antd/searchResults";
import SubGroupList from "@adapters/antd/subGroupList";
import SelectField from "@adapters/antd/selectField";
import TextField from "@adapters/antd/textField";
import TagsField from "@adapters/antd/tagsField";
import DateField from "@adapters/antd/dateField";
import FileField from "@adapters/antd/fileField";
import GroupList from "@adapters/antd/groupList";
import FieldGrid from "@adapters/antd/fieldGrid";
import FieldSlot from "@adapters/antd/fieldSlot";
import SearchBar from "@adapters/antd/searchBar";
import DevTools from "@adapters/antd/devTools";
import Divider from "@adapters/antd/divider";
import Message from "@adapters/antd/message";
import Actions from "@adapters/antd/actions";
import Button from "@adapters/antd/button";
import Group from "@adapters/antd/group";
import Table from "@adapters/antd/table";
import Modal from "@adapters/antd/modal";
import Form from "@adapters/antd/form";

import type { FormComponents } from "@typings";

export const antdComponents: FormComponents = {
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
