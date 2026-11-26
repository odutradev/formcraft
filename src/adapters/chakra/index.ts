import AutocompleteField from "@adapters/chakra/autocompleteField";
import StepIndicator from "@adapters/chakra/stepIndicator";
import SearchResults from "@adapters/chakra/searchResults";
import SubGroupList from "@adapters/chakra/subGroupList";
import SelectField from "@adapters/chakra/selectField";
import TextField from "@adapters/chakra/textField";
import TagsField from "@adapters/chakra/tagsField";
import DateField from "@adapters/chakra/dateField";
import FileField from "@adapters/chakra/fileField";
import GroupList from "@adapters/chakra/groupList";
import FieldGrid from "@adapters/chakra/fieldGrid";
import FieldSlot from "@adapters/chakra/fieldSlot";
import SearchBar from "@adapters/chakra/searchBar";
import DevTools from "@adapters/chakra/devTools";
import Divider from "@adapters/chakra/divider";
import Message from "@adapters/chakra/message";
import Actions from "@adapters/chakra/actions";
import Button from "@adapters/chakra/button";
import Group from "@adapters/chakra/group";
import Table from "@adapters/chakra/table";
import Modal from "@adapters/chakra/modal";
import Form from "@adapters/chakra/form";

import type { FormComponents } from "@typings";

export const chakraComponents: FormComponents = {
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
