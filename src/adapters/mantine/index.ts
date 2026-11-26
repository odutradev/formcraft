import AutocompleteField from "@adapters/mantine/autocompleteField";
import StepIndicator from "@adapters/mantine/stepIndicator";
import SearchResults from "@adapters/mantine/searchResults";
import SubGroupList from "@adapters/mantine/subGroupList";
import SelectField from "@adapters/mantine/selectField";
import TextField from "@adapters/mantine/textField";
import TagsField from "@adapters/mantine/tagsField";
import DateField from "@adapters/mantine/dateField";
import FileField from "@adapters/mantine/fileField";
import GroupList from "@adapters/mantine/groupList";
import FieldGrid from "@adapters/mantine/fieldGrid";
import FieldSlot from "@adapters/mantine/fieldSlot";
import SearchBar from "@adapters/mantine/searchBar";
import DevTools from "@adapters/mantine/devTools";
import Divider from "@adapters/mantine/divider";
import Message from "@adapters/mantine/message";
import Actions from "@adapters/mantine/actions";
import Button from "@adapters/mantine/button";
import Group from "@adapters/mantine/group";
import Table from "@adapters/mantine/table";
import Modal from "@adapters/mantine/modal";
import Form from "@adapters/mantine/form";

import type { FormComponents } from "@typings";

export const mantineComponents: FormComponents = {
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
