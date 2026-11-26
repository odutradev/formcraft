import AutocompleteField from "@adapters/native/autocompleteField";
import StepIndicator from "@adapters/native/stepIndicator";
import SearchResults from "@adapters/native/searchResults";
import SubGroupList from "@adapters/native/subGroupList";
import SelectField from "@adapters/native/selectField";
import TextField from "@adapters/native/textField";
import TagsField from "@adapters/native/tagsField";
import DateField from "@adapters/native/dateField";
import FileField from "@adapters/native/fileField";
import GroupList from "@adapters/native/groupList";
import FieldGrid from "@adapters/native/fieldGrid";
import FieldSlot from "@adapters/native/fieldSlot";
import SearchBar from "@adapters/native/searchBar";
import DevTools from "@adapters/native/devTools";
import Divider from "@adapters/native/divider";
import Message from "@adapters/native/message";
import Actions from "@adapters/native/actions";
import Button from "@adapters/native/button";
import Group from "@adapters/native/group";
import Table from "@adapters/native/table";
import Modal from "@adapters/native/modal";
import Form from "@adapters/native/form";

import type { FormComponents } from "@typings";

export const nativeComponents: FormComponents = {
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
