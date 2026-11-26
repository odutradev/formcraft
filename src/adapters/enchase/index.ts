import AutocompleteField from "@adapters/enchase/autocompleteField";
import StepIndicator from "@adapters/enchase/stepIndicator";
import SearchResults from "@adapters/enchase/searchResults";
import SubGroupList from "@adapters/enchase/subGroupList";
import SelectField from "@adapters/enchase/selectField";
import TextField from "@adapters/enchase/textField";
import TagsField from "@adapters/enchase/tagsField";
import DateField from "@adapters/enchase/dateField";
import FileField from "@adapters/enchase/fileField";
import GroupList from "@adapters/enchase/groupList";
import FieldGrid from "@adapters/enchase/fieldGrid";
import FieldSlot from "@adapters/enchase/fieldSlot";
import SearchBar from "@adapters/enchase/searchBar";
import DevTools from "@adapters/enchase/devTools";
import Divider from "@adapters/enchase/divider";
import Message from "@adapters/enchase/message";
import Actions from "@adapters/enchase/actions";
import Button from "@adapters/enchase/button";
import Group from "@adapters/enchase/group";
import Table from "@adapters/enchase/table";
import Modal from "@adapters/enchase/modal";
import Form from "@adapters/enchase/form";

import type { FormComponents } from "@typings";

export const enchaseComponents: FormComponents = {
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
