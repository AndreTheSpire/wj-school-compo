<template>
  <label
    v-if="label"
    class="paragraph-normal text-label weight--600"
    :for="name"
    >{{ label }}</label
  >
  <v-text-field
    ref="input"
    v-if="type == 'password'"
    v-model="inputValue"
    hide-details
    :name="name"
    :placeholder="placeholder"
    variant="outlined"
    class="paragraph-normal my-2 text-input"
    :type="!showText && type === 'password' ? 'password' : 'text'"
    :append-inner-icon="showText ? 'mdi-eye' : 'mdi-eye-off'"
    prepend-inner-icon="mdi-lock"
    @click:append-inner="showText = !showText"
  />

  <v-textarea
    v-else-if="type == 'areafield'"
    v-model="inputValue"
    :name="name"
    variant="outlined"
    auto-grow
    rows="2"
    :placeholder="placeholder"
    :rules="[rules.required]"
    class="paragraph-normal my-2 text-input"
  >
  </v-textarea>
  <v-select
    v-else-if="type == 'selected'"
    v-model="inputValue"
    :items="selectitems"
    density="compact"
    label="Select"
    item-title="state"
    item-value="value"
    variant="outlined"
    @input="this.doparentfunc()"
    return-object
    :rules="name == 'selectedemail' ? [rules.required] : ''"
    single-line
    :error="false"
    :hint="false"
  ></v-select>

  <v-file-input
    v-else-if="type == 'upload'"
    v-model="inputValue"
    :name="name"
    variant="outlined"
    :placeholder="placeholder"
    class="paragraph-normal my-2 text-input"
  ></v-file-input>
  <v-text-field
    ref="input"
    v-else
    v-model="inputValue"
    :name="name"
    variant="outlined"
    density="compact"
    :rules="name != 'search' ? [rules.required] : ''"
    :placeholder="placeholder"
    class="paragraph-normal text-input"
  >
  </v-text-field>
</template>

<script>
export default {
  name: "TextBox",
  props: {
    initialValue: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    selectitems: {
      type: Array,
      default: null,
    },
    inputfunc: Function,

    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      showText: false,
      isTelInputError: false,
      dataError: false,
      dataMessages: [],
      telObject: null,
      state: "default",
      inputValue: "",
      inputOptions: {
        // Untuk vue-tel-input: https://iamstevendao.github.io/vue-tel-input/documentation/props.html
        id: "username",
        name: "username",
      },
      rules: {
        required: (v) => !!v || "this field is required",
      },
    };
  },
  methods: {
    doparentfunc() {
      this.inputfunc(this.inputValue);
    },
  },
  watch: {
    inputValue() {
      this.$emit("update:modelValue", this.inputValue);
      if (this.type == "selected" && this.name == "selectedsort") {
        this.inputfunc(this.inputValue);
      }
      if (this.type == "field" && this.name == "search") {
        this.inputfunc(this.inputValue);
      }
    },
    value() {
      this.inputValue = this.value;
    },
  },
  mounted() {
    this.inputValue = this.initialValue;
  },
};
</script>

<style lang="scss" scoped>
.text-label {
  color: black;
}
.text-input {
  color: black;
  font-size: 32px !important;
}
.v-text-field :deep(input) {
  font-size: 1rem;
  font-weight: 600;
  font-family: "Open Sans";
}
</style>