/* esm.sh - json-schema-library@9.3.5 */
// node_modules/json-schema-library/dist/module/lib/config/strings.js
var strings_default = {
  // validation errors
  AdditionalItemsError: "Array at `{{pointer}}` may not have an additional item `{{key}}`",
  AdditionalPropertiesError: "Additional property `{{property}}` on `{{pointer}}` does not match schema `{{schema}}`",
  AllOfError: "Value `{{value}}` at `{{pointer}}` does not match schema of `{{allOf}}`",
  AnyOfError: "Value `{{value}}` at `{{pointer}}` does not match any schema of `{{anyOf}}`",
  ConstError: "Expected value at `{{pointer}}` to be `{{expected}}`, but value given is `{{value}}`",
  containsAnyError: "The array at `{{pointer}}` must contain at least one item",
  ContainsArrayError: "The property at `{{pointer}}` must not be an array",
  ContainsError: "The array at `{{pointer}}` must contain an element that matches `{{schema}}`",
  EnumError: "Expected given value `{{value}}` in `{{pointer}}` to be one of `{{values}}`",
  ForbiddenPropertyError: "Property name `{{property}}` at `{{pointer}}` is not allowed",
  FormatDateError: "Value `{{value}}` at `{{pointer}}` is not a valid date",
  FormatDateTimeError: "Value `{{value}}` at `{{pointer}}` is not a valid date-time",
  FormatEmailError: "Value `{{value}}` at `{{pointer}}` is not a valid email",
  FormatHostnameError: "Value `{{value}}` at `{{pointer}}` is not a valid hostname",
  FormatIPV4Error: "Value `{{value}}` at `{{pointer}}` is not a valid IPv4 address",
  FormatIPV4LeadingZeroError: "IPv4 addresses starting with zero are invalid, since they are interpreted as octals",
  FormatIPV6Error: "Value `{{value}}` at `{{pointer}}` is not a valid IPv6 address",
  FormatIPV6LeadingZeroError: "IPv6 addresses starting with zero are invalid, since they are interpreted as octals",
  FormatJsonPointerError: "Value `{{value}}` at `{{pointer}}` is not a valid json-pointer",
  FormatRegExError: "Value `{{value}}` at `{{pointer}}` is not a valid regular expression",
  FormatTimeError: "Value `{{value}}` at `{{pointer}}` is not a valid time",
  FormatURIError: "Value `{{value}}` at `{{pointer}}` is not a valid uri",
  FormatURIReferenceError: "Value `{{value}}` at `{{pointer}}` is not a valid uri-reference",
  FormatURITemplateError: "Value `{{value}}` at `{{pointer}}` is not a valid uri-template",
  FormatURLError: "Value `{{value}}` at `{{pointer}}` is not a valid url",
  InvalidDataError: "No value may be specified in `{{pointer}}`",
  InvalidPropertyNameError: "Invalid property name `{{property}}` at `{{pointer}}`",
  MaximumError: "Value in `{{pointer}}` is `{{length}}`, but should be `{{maximum}}` at maximum",
  MaxItemsError: "Too many items in `{{pointer}}`, should be `{{maximum}}` at most, but got `{{length}}`",
  MaxLengthError: "Value `{{pointer}}` should have a maximum length of `{{maxLength}}`, but got `{{length}}`.",
  MaxPropertiesError: "Too many properties in `{{pointer}}`, should be `{{maximum}}` at most, but got `{{length}}`",
  MinimumError: "Value in `{{pointer}}` is `{{length}}`, but should be `{{minimum}}` at minimum",
  MinItemsError: "Too few items in `{{pointer}}`, should be at least `{{minItems}}`, but got `{{length}}`",
  MinItemsOneError: "At least one item is required in `{{pointer}}`",
  MinLengthError: "Value `{{pointer}}` should have a minimum length of `{{minLength}}`, but got `{{length}}`.",
  MinLengthOneError: "A value is required in `{{pointer}}`",
  MinPropertiesError: "Too few properties in `{{pointer}}`, should be at least `{{minimum}}`, but got `{{length}}`",
  MissingDependencyError: "The required propery '{{missingProperty}}' in `{{pointer}}` is missing",
  MissingOneOfPropertyError: "Value at `{{pointer}}` property: `{{property}}`",
  MultipleOfError: "Expected `{{value}}` in `{{pointer}}` to be multiple of `{{multipleOf}}`",
  MultipleOneOfError: "Value `{{value}}` should not match multiple schemas in oneOf `{{matches}}`",
  NoAdditionalPropertiesError: "Additional property `{{property}}` in `{{pointer}}` is not allowed",
  NotError: "Value `{{value}}` at pointer should not match schema `{{not}}`",
  OneOfError: "Value `{{value}}` in `{{pointer}}` does not match any given oneof schema",
  OneOfPropertyError: "Failed finding a matching oneOfProperty schema in `{{pointer}}` where `{{property}}` matches `{{value}}`",
  PatternError: "Value in `{{pointer}}` should match `{{description}}`, but received `{{received}}`",
  PatternPropertiesError: "Property `{{key}}` does not match any patterns in `{{pointer}}`. Valid patterns are: {{patterns}}",
  RequiredPropertyError: "The required property `{{key}}` is missing at `{{pointer}}`",
  SchemaWarning: "Failed retrieving a schema from "{{pointer}}" to key '{{key}}'",
  TypeError: "Expected `{{value}}` ({{received}}) in `{{pointer}}` to be of type `{{expected}}`",
  UndefinedValueError: "Value must not be undefined in `{{pointer}}`",
  UniqueItemsError: "Items in array must be unique. Value `{{value}}` in `{{pointer}}` is a duplicate of {{duplicatePointer}}.",
  UnknownPropertyError: "Could not find a valid schema for property `{{pointer}}` within object",
  ValueNotEmptyError: "A value for `{{property}}` is required at `{{pointer}}`"
};

// node_modules/json-schema-library/dist/module/lib/getTypeOf.js
var toString = Object.prototype.toString;
function getTypeOf(value) {
  const type = toString.call(value).match(/\s([^\]]+)\]/).pop().toLowerCase();
  if (type === "file") {
    return "object";
  }
  return type;
}

// node_modules/json-schema-library/dist/module/lib/utils/render.js
var OBJECT_TYPE = "object";
var ARRAY_TYPE = "array";
function render(template, data = {}) {
  return template.replace(/\{\{\w+\}\}/g, (match) => {
    const key = match.replace(/[{}]/g, "");
    const variable = data[key];
    const variableType = getTypeOf(variable);
    if (variableType === OBJECT_TYPE || variableType === ARRAY_TYPE) {
      return JSON.stringify(variable);
    }
    return variable;
  });
}

// node_modules/json-schema-library/dist/module/lib/utils/__.js
function __(keyword, data, fallback = keyword) {
  var _a;
  const template = (_a = strings_default[keyword]) !== null && _a !== void 0 ? _a : fallback;
  return render(template, data);
}

// node_modules/json-schema-library/dist/module/lib/utils/createCustomError.js
function dashCase(text) {
  return text.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function createError(name, data) {
  return {
    type: "error",
    name,
    code: dashCase(name),
    message: __(name, data),
    data
  };
}
function createCustomError(name) {
  return createError.bind(null, name);
}

// node_modules/json-schema-library/dist/module/lib/utils/flattenArray.js
function flattenArray(list, result = []) {
  for (let i = 0; i < list.length; i += 1) {
    const item = list[i];
    if (Array.isArray(item)) {
      flattenArray(item, result);
    } else {
      result.push(item);
    }
  }
  return result;
}

// node_modules/json-schema-library/dist/module/lib/config/settings.js
var settings_default = {
  DECLARATOR_ONEOF: "oneOfProperty",
  GET_TEMPLATE_RECURSION_LIMIT: 1,
  propertyBlacklist: ["_id"],
  templateDefaultOptions: {
    addOptionalProps: false,
    removeInvalidData: false,
    extendDefaults: true
  }
};

// node_modules/json-schema-library/dist/module/lib/schema/createOneOfSchemaResult.js
function createOneOfSchemaResult(schema, oneOfSchema, oneOfIndex) {
  const childSchema = { ...oneOfSchema };
  Object.defineProperty(childSchema, "getOneOfOrigin", {
    enumerable: false,
    value: () => ({
      index: oneOfIndex,
      schema
    })
  });
  return childSchema;
}

// node_modules/json-schema-library/dist/module/lib/types.js
function isJsonError(error) {
  return (error === null || error === void 0 ? void 0 : error.type) === "error";
}

// node_modules/json-schema-library/dist/module/lib/utils/filter.js
function isPromise(obj) {
  return obj instanceof Promise;
}
function errorOrPromise(error) {
  return isJsonError(error) || isPromise(error);
}
function errorsOnly(error) {
  return isJsonError(error);
}

// node_modules/json-schema-library/dist/module/lib/features/oneOf.js
var { DECLARATOR_ONEOF } = settings_default;
function resolveOneOf(draft, data, schema = draft.rootSchema, pointer = "#") {
  if (data != null && schema[DECLARATOR_ONEOF]) {
    const errors3 = [];
    const oneOfProperty = schema[DECLARATOR_ONEOF];
    const oneOfValue = data[schema[DECLARATOR_ONEOF]];
    if (oneOfValue === void 0) {
      return draft.errors.missingOneOfPropertyError({
        property: oneOfProperty,
        pointer,
        schema,
        value: data
      });
    }
    for (let i = 0; i < schema.oneOf.length; i += 1) {
      const one = draft.resolveRef(schema.oneOf[i]);
      const oneOfPropertySchema = draft.step(oneOfProperty, one, data, pointer);
      if (isJsonError(oneOfPropertySchema)) {
        return oneOfPropertySchema;
      }
      let result = flattenArray(draft.validate(oneOfValue, oneOfPropertySchema, pointer));
      result = result.filter(errorOrPromise);
      if (result.length > 0) {
        errors3.push(...result);
      } else {
        return createOneOfSchemaResult(schema, one, i);
      }
    }
    return draft.errors.oneOfPropertyError({
      property: oneOfProperty,
      value: oneOfValue,
      pointer,
      schema,
      errors: errors3
    });
  }
  const matches = [];
  const errors2 = [];
  for (let i = 0; i < schema.oneOf.length; i += 1) {
    const one = draft.resolveRef(schema.oneOf[i]);
    let result = flattenArray(draft.validate(data, one, pointer));
    result = result.filter(errorOrPromise);
    if (result.length > 0) {
      errors2.push(...result);
    } else {
      matches.push({ index: i, schema: one });
    }
  }
  if (matches.length === 1) {
    return createOneOfSchemaResult(schema, matches[0].schema, matches[0].index);
  }
  if (matches.length > 1) {
    return draft.errors.multipleOneOfError({
      value: data,
      pointer,
      schema,
      matches
    });
  }
  return draft.errors.oneOfError({
    value: JSON.stringify(data),
    pointer,
    schema,
    oneOf: schema.oneOf,
    errors: errors2
  });
}
function fuzzyObjectValue(draft, one, data, pointer) {
  if (data == null || one.properties == null) {
    return -1;
  }
  let value = 0;
  const keys = Object.keys(one.properties);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (data[key] != null && draft.isValid(data[key], one.properties[key], pointer)) {
      value += 1;
    }
  }
  return value;
}
function resolveOneOfFuzzy(draft, data, schema = draft.rootSchema, pointer = "#") {
  if (data != null && schema[DECLARATOR_ONEOF]) {
    const errors2 = [];
    const oneOfProperty = schema[DECLARATOR_ONEOF];
    const oneOfValue = data[schema[DECLARATOR_ONEOF]];
    if (oneOfValue === void 0) {
      return draft.errors.missingOneOfPropertyError({
        property: oneOfProperty,
        pointer,
        schema,
        value: data
      });
    }
    for (let i = 0; i < schema.oneOf.length; i += 1) {
      const one = draft.resolveRef(schema.oneOf[i]);
      const oneOfPropertySchema = draft.step(oneOfProperty, one, data, pointer);
      if (isJsonError(oneOfPropertySchema)) {
        return oneOfPropertySchema;
      }
      let result = flattenArray(draft.validate(oneOfValue, oneOfPropertySchema, pointer));
      result = result.filter(errorOrPromise);
      if (result.length > 0) {
        errors2.push(...result);
      } else {
        return createOneOfSchemaResult(schema, one, i);
      }
    }
    return draft.errors.oneOfPropertyError({
      property: oneOfProperty,
      value: oneOfValue,
      pointer,
      schema,
      errors: errors2
    });
  }
  const matches = [];
  for (let i = 0; i < schema.oneOf.length; i += 1) {
    const one = draft.resolveRef(schema.oneOf[i]);
    if (draft.isValid(data, one, pointer)) {
      matches.push({ schema: one, index: i });
    }
  }
  if (matches.length === 1) {
    return createOneOfSchemaResult(schema, matches[0].schema, matches[0].index);
  }
  if (getTypeOf(data) === "object") {
    let schemaOfItem;
    let schemaOfIndex = -1;
    let fuzzyGreatest = 0;
    for (let i = 0; i < schema.oneOf.length; i += 1) {
      const one = draft.resolveRef(schema.oneOf[i]);
      const fuzzyValue = fuzzyObjectValue(draft, one, data);
      if (fuzzyGreatest < fuzzyValue) {
        fuzzyGreatest = fuzzyValue;
        schemaOfItem = schema.oneOf[i];
        schemaOfIndex = i;
      }
    }
    if (schemaOfItem === void 0) {
      return draft.errors.oneOfError({
        value: JSON.stringify(data),
        pointer,
        schema,
        oneOf: schema.oneOf
      });
    }
    return createOneOfSchemaResult(schema, schemaOfItem, schemaOfIndex);
  }
  if (matches.length > 1) {
    return draft.errors.multipleOneOfError({ matches, pointer, schema, value: data });
  }
  return draft.errors.oneOfError({
    value: JSON.stringify(data),
    pointer,
    schema,
    oneOf: schema.oneOf
  });
}
var validateOneOf = (draft, schema, value, pointer) => {
  if (Array.isArray(schema.oneOf)) {
    const schemaOrError = draft.resolveOneOf(value, schema, pointer);
    if (isJsonError(schemaOrError)) {
      return schemaOrError;
    }
  }
};

// node_modules/json-schema-library/dist/module/lib/utils/merge.js
import deepmerge from "../../deepmerge@^4.3.1.js";
var overwriteMerge = (destinationArray, sourceArray) => sourceArray;
var merge_default = (a, b) => deepmerge(a, b, { arrayMerge: overwriteMerge });
var mergeUniqueItems = (destinationArray, sourceArray) => {
  const all = destinationArray.concat(sourceArray);
  return all.filter((item, pos) => all.indexOf(item) === pos);
};
var mergeArraysUnique = (a, b) => deepmerge(a, b, { arrayMerge: mergeUniqueItems });

// node_modules/json-schema-library/dist/module/lib/mergeSchema.js
function mergeSchema(a, b) {
  const aType = getTypeOf(a);
  const bType = getTypeOf(b);
  if (aType !== bType) {
    return a;
  }
  const result = mergeArraysUnique(a, b);
  if (a.getOneOfOrigin) {
    Object.defineProperty(result, "getOneOfOrigin", {
      enumerable: false,
      value: a.getOneOfOrigin
    });
  } else if (b.getOneOfOrigin) {
    Object.defineProperty(result, "getOneOfOrigin", {
      enumerable: false,
      value: b.getOneOfOrigin
    });
  }
  return result;
}

// node_modules/json-schema-library/dist/module/lib/utils/omit.js
function omit(object, ...keysToOmit) {
  const result = {};
  Object.keys(object).forEach((key) => {
    if (!keysToOmit.includes(key)) {
      result[key] = object[key];
    }
  });
  if (object.getOneOfOrigin) {
    Object.defineProperty(result, "getOneOfOrigin", {
      enumerable: false,
      value: object.getOneOfOrigin
    });
  }
  return result;
}

// node_modules/json-schema-library/dist/module/lib/utils/copy.js
import copy from "../../fast-copy@^3.0.2.js";
var copy_default = copy;

// node_modules/json-schema-library/dist/module/lib/features/if.js
function resolveIfSchema(draft, schema, data) {
  if (schema.if == null) {
    return void 0;
  }
  if (schema.if === false) {
    return schema.else;
  }
  if (schema.if && (schema.then || schema.else)) {
    const ifErrors = draft.validate(data, draft.resolveRef(schema.if));
    if (ifErrors.length === 0 && schema.then) {
      return draft.resolveRef(schema.then);
    }
    if (ifErrors.length !== 0 && schema.else) {
      return draft.resolveRef(schema.else);
    }
  }
}
var validateIf = (draft, schema, value, pointer) => {
  const resolvedSchema = resolveIfSchema(draft, schema, value);
  if (resolvedSchema) {
    return draft.validate(value, resolvedSchema, pointer);
  }
};

// node_modules/json-schema-library/dist/module/lib/features/allOf.js
function resolveSchema(draft, schemaToResolve, data) {
  var _a;
  const schema = { ...(_a = draft.resolveRef(schemaToResolve)) !== null && _a !== void 0 ? _a : {} };
  const ifSchema = resolveIfSchema(draft, schema, data);
  if (ifSchema) {
    return ifSchema;
  }
  return omit(schema, "if", "then", "else");
}
function resolveAllOf(draft, data, schema = draft.rootSchema) {
  let mergedSchema = copy_default(schema);
  for (let i = 0; i < schema.allOf.length; i += 1) {
    const allOfSchema = resolveSchema(draft, schema.allOf[i], data);
    mergedSchema = mergeSchema(mergedSchema, allOfSchema);
  }
  delete mergedSchema.allOf;
  return mergedSchema;
}
function mergeAllOfSchema(draft, schema) {
  const { allOf } = schema;
  if (!Array.isArray(allOf) || allOf.length === 0) {
    return;
  }
  let resolvedSchema = {};
  allOf.forEach((subschema) => {
    resolvedSchema = mergeSchema(resolvedSchema, draft.resolveRef(subschema));
  });
  return resolvedSchema;
}
var validateAllOf = (draft, schema, value, pointer) => {
  const { allOf } = schema;
  if (!Array.isArray(allOf) || allOf.length === 0) {
    return;
  }
  const errors2 = [];
  schema.allOf.forEach((subSchema) => {
    errors2.push(...draft.validate(value, subSchema, pointer));
  });
  return errors2;
};

// node_modules/json-schema-library/dist/module/lib/resolveRef.strict.js
function resolveRef(schema, rootSchema) {
  if (schema == null || schema.$ref == null) {
    return schema;
  }
  if (schema.getRoot) {
    const resolvedSchema2 = schema.getRoot().getRef(schema);
    return resolvedSchema2;
  }
  const resolvedSchema = rootSchema.getRef(schema);
  return resolvedSchema;
}

// node_modules/json-schema-library/dist/module/lib/resolveRef.merge.js
function resolveRefMerge(schema, rootSchema) {
  if (schema == null || schema.$ref == null) {
    return schema;
  }
  const resolvedSchema = rootSchema.getRef(schema);
  const mergedSchema = Object.assign({}, resolvedSchema, schema);
  delete mergedSchema.$ref;
  Object.defineProperty(mergedSchema, "__ref", { enumerable: false, value: schema.__ref });
  Object.defineProperty(mergedSchema, "getRoot", { enumerable: false, value: schema.getRoot });
  return mergedSchema;
}

// node_modules/json-schema-library/dist/module/lib/validateAsync.js
function createErrorNotification(onError) {
  return function notifyError(error) {
    if (Array.isArray(error)) {
      error = flattenArray(error);
      error.forEach(notifyError);
      return error;
    }
    if (isJsonError(error)) {
      onError(error);
    }
    return error;
  };
}
function validateAsync(draft, value, options) {
  const { schema, pointer, onError } = { schema: draft.rootSchema, pointer: "#", ...options };
  let errors2 = draft.validate(value, schema, pointer);
  if (onError) {
    errors2 = flattenArray(errors2);
    const notifyError = createErrorNotification(onError);
    for (let i = 0; i < errors2.length; i += 1) {
      const error = errors2[i];
      if (error instanceof Promise) {
        error.then(notifyError);
      } else if (isJsonError(error)) {
        onError(error);
      }
    }
  }
  return Promise.all(errors2).then(flattenArray).then((resolvedErrors) => resolvedErrors.filter(errorsOnly)).catch((e) => {
    console.log("Failed resolving promises", e.message);
    console.log(e.stack);
    throw e;
  });
}

// node_modules/json-schema-library/dist/module/lib/utils/uniqueItems.js
function uniqueItems(list) {
  return list.filter((item, index) => list.indexOf(item) === index);
}

// node_modules/json-schema-library/dist/module/lib/utils/isObject.js
function isObject(v) {
  return getTypeOf(v) === "object";
}

// node_modules/json-schema-library/dist/module/lib/features/dependencies.js
function resolveDependencies(draft, schema, data) {
  const { dependencies } = schema;
  if (!isObject(dependencies) || !isObject(data)) {
    return;
  }
  let updated = false;
  let resolvedSchema = { required: [] };
  Object.keys(dependencies).forEach((prop) => {
    var _a, _b;
    if (data[prop] == null && !(((_a = schema.required) === null || _a === void 0 ? void 0 : _a.includes(prop)) || ((_b = resolvedSchema.required) === null || _b === void 0 ? void 0 : _b.includes(prop)))) {
      return;
    }
    const dependency = dependencies[prop];
    if (Array.isArray(dependency)) {
      updated = true;
      resolvedSchema.required.push(...dependency);
      return;
    }
    if (isObject(dependency)) {
      updated = true;
      resolvedSchema = mergeSchema(resolvedSchema, draft.resolveRef(dependency));
      return;
    }
  });
  if (updated) {
    resolvedSchema.required = uniqueItems(resolvedSchema.required);
    return resolvedSchema;
  }
}
var validateDependencies = (draft, schema, value, pointer) => {
  if (getTypeOf(schema.dependencies) !== "object") {
    return void 0;
  }
  const errors2 = [];
  Object.keys(value).forEach((property) => {
    if (schema.dependencies[property] === void 0) {
      return;
    }
    if (schema.dependencies[property] === true) {
      return;
    }
    if (schema.dependencies[property] === false) {
      errors2.push(draft.errors.missingDependencyError({ pointer, schema, value }));
      return;
    }
    let dependencyErrors;
    const type = getTypeOf(schema.dependencies[property]);
    if (type === "array") {
      dependencyErrors = schema.dependencies[property].filter((dependency) => value[dependency] === void 0).map((missingProperty) => draft.errors.missingDependencyError({ missingProperty, pointer, schema, value }));
    } else if (type === "object") {
      dependencyErrors = draft.validate(value, schema.dependencies[property], pointer);
    } else {
      throw new Error(`Invalid dependency definition for ${pointer}/${property}. Must be string[] or schema`);
    }
    errors2.push(...dependencyErrors);
  });
  return errors2.length > 0 ? errors2 : void 0;
};

// node_modules/json-schema-library/dist/module/lib/features/anyOf.js
function mergeValidAnyOfSchema(draft, schema, data) {
  if (!Array.isArray(schema.anyOf) || schema.anyOf.length === 0) {
    return;
  }
  let resolvedSchema;
  schema.anyOf.forEach((anySchema) => {
    anySchema = draft.resolveRef(anySchema);
    if (draft.isValid(data, anySchema)) {
      resolvedSchema = resolvedSchema ? mergeSchema(resolvedSchema, anySchema) : anySchema;
    }
  });
  return resolvedSchema;
}
function resolveAnyOf(draft, data, schema = draft.rootSchema, pointer = "#") {
  const { anyOf } = schema;
  if (!Array.isArray(anyOf) || anyOf.length === 0) {
    return schema;
  }
  const resolvedSchema = mergeValidAnyOfSchema(draft, schema, data);
  if (resolvedSchema == null) {
    return draft.errors.anyOfError({ pointer, schema, value: data, anyOf: JSON.stringify(anyOf) });
  }
  const mergedSchema = mergeSchema(schema, resolvedSchema);
  return omit(mergedSchema, "anyOf");
}
var validateAnyOf = (draft, schema, value, pointer) => {
  if (!Array.isArray(schema.anyOf) || schema.anyOf.length === 0) {
    return void 0;
  }
  for (let i = 0; i < schema.anyOf.length; i += 1) {
    if (draft.isValid(value, schema.anyOf[i])) {
      return void 0;
    }
  }
  return draft.errors.anyOfError({ pointer, schema, value, anyOf: schema.anyOf });
};

// node_modules/json-schema-library/dist/module/lib/resolveDynamicSchema.js
var toOmit = ["allOf", "anyOf", "oneOf", "dependencies", "if", "then", "else"];
var dynamicProperties = ["allOf", "anyOf", "oneOf", "dependencies", "if"];
function isDynamicSchema(schema) {
  const givenProps = Object.keys(schema);
  return dynamicProperties.findIndex((prop) => givenProps.includes(prop)) !== -1;
}
function resolveDynamicSchema(draft, schema, data, pointer) {
  let resolvedSchema;
  let error;
  schema = draft.resolveRef(schema);
  if (schema.oneOf) {
    const oneOfSchema = resolveOneOfFuzzy(draft, data, schema, pointer);
    if (isJsonError(oneOfSchema)) {
      error = oneOfSchema;
    } else if (oneOfSchema) {
      resolvedSchema = mergeSchema(resolvedSchema !== null && resolvedSchema !== void 0 ? resolvedSchema : {}, oneOfSchema);
    }
  }
  if (Array.isArray(schema.allOf)) {
    const allOf = schema.allOf.map((s) => {
      if (isDynamicSchema(s)) {
        let result = resolveDynamicSchema(draft, s, data, pointer);
        if (result) {
          result = mergeSchema(s, result);
          return omit(result, ...toOmit);
        }
        return void 0;
      }
      return s;
    });
    if (allOf.length > 0) {
      const allOfSchema = mergeAllOfSchema(draft, { allOf });
      resolvedSchema = mergeSchema(resolvedSchema !== null && resolvedSchema !== void 0 ? resolvedSchema : {}, allOfSchema);
    }
  }
  const anyOfSchema = mergeValidAnyOfSchema(draft, schema, data);
  if (anyOfSchema) {
    resolvedSchema = mergeSchema(resolvedSchema !== null && resolvedSchema !== void 0 ? resolvedSchema : {}, anyOfSchema);
  }
  const dependenciesSchema = resolveDependencies(draft, schema, data);
  if (dependenciesSchema) {
    resolvedSchema = mergeSchema(resolvedSchema !== null && resolvedSchema !== void 0 ? resolvedSchema : {}, dependenciesSchema);
  }
  const ifSchema = resolveIfSchema(draft, schema, data);
  if (ifSchema) {
    resolvedSchema = mergeSchema(resolvedSchema !== null && resolvedSchema !== void 0 ? resolvedSchema : {}, ifSchema);
  }
  if (resolvedSchema == null) {
    return error;
  }
  const nestedSchema = resolveDynamicSchema(draft, resolvedSchema, data, pointer);
  if (nestedSchema) {
    resolvedSchema = mergeSchema(resolvedSchema, nestedSchema);
  }
  return omit(resolvedSchema, ...toOmit);
}

// node_modules/json-schema-library/dist/module/lib/reduceSchema.js
var toOmit2 = ["allOf", "anyOf", "oneOf", "dependencies", "if", "then", "else"];
function reduceSchema(draft, schema, data, pointer) {
  let resolvedSchema = resolveDynamicSchema(draft, schema, data, pointer);
  if (resolvedSchema) {
    resolvedSchema = mergeSchema(schema, resolvedSchema);
    return omit(resolvedSchema, ...toOmit2);
  }
  return schema;
}

// node_modules/json-schema-library/dist/module/lib/draft/index.js
var Draft = class {
  constructor(config2, schema) {
    this.remotes = {};
    this.errors = {};
    this.typeKeywords = {};
    this.validateKeyword = {};
    this.validateType = {};
    this.validateFormat = {};
    this.config = config2;
    this.typeKeywords = copy_default(config2.typeKeywords);
    this.validateKeyword = Object.assign({}, config2.validateKeyword);
    this.validateType = Object.assign({}, config2.validateType);
    this.validateFormat = Object.assign({}, config2.validateFormat);
    this.errors = Object.assign({}, config2.errors);
    this.setSchema(schema);
  }
  get rootSchema() {
    return this.__rootSchema;
  }
  set rootSchema(rootSchema) {
    if (rootSchema == null) {
      return;
    }
    this.__rootSchema = this.config.compileSchema(this, rootSchema);
  }
  /**
   * register a json-schema to be referenced from another json-schema
   * @param url - base-url of json-schema (aka id)
   * @param schema - json-schema root
   */
  addRemoteSchema(url, schema) {
    this.config.addRemoteSchema(this, url, schema);
  }
  compileSchema(schema) {
    var _a;
    return this.config.compileSchema(this, schema, (_a = this.rootSchema) !== null && _a !== void 0 ? _a : schema);
  }
  createSchemaOf(data) {
    return this.config.createSchemaOf(data);
  }
  /**
   * Iterates over data, retrieving its schema
   *
   * @param data - the data to iterate
   * @param callback - will be called with (schema, data, pointer) on each item
   * @param [schema] - the schema matching the data. Defaults to rootSchema
   * @param [pointer] - pointer to current data. Default to rootPointer
   */
  each(data, callback, schema, pointer) {
    return this.config.each(this, data, callback, schema, pointer);
  }
  eachSchema(callback, schema = this.rootSchema) {
    return this.config.eachSchema(schema, callback);
  }
  getChildSchemaSelection(property, schema) {
    return this.config.getChildSchemaSelection(this, property, schema);
  }
  /**
   * Returns the json-schema of a data-json-pointer.
   *
   * To resolve dynamic schema where the type of json-schema is evaluated by
   * its value, a data object has to be passed in options.
   *
   * Per default this function will return `undefined` for valid properties that
   * do not have a defined schema. Use the option `withSchemaWarning: true` to
   * receive an error with `code: schema-warning` containing the location of its
   * last evaluated json-schema.
   *
   * Notes
   *      - uses draft.step to walk through data and schema
   *
   * @param draft
   * @param pointer - json pointer in data to get the json schema for
   * @param [options.data] - the data object, which includes the json pointers value. This is optional, as
   *    long as no oneOf, anyOf, etc statement is part of the pointers schema
   * @param [options.schema] - the json schema to iterate. Defaults to draft.rootSchema
   * @param [options.withSchemaWarning] - if true returns an error instead of `undefined` for valid properties missing a schema definition
   * @return resolved json-schema object of requested json-pointer location
   */
  getSchema(options) {
    return this.config.getSchema(this, options);
  }
  /**
   * Create data object matching the given schema
   *
   * @param [data] - optional template data
   * @param [schema] - json schema, defaults to rootSchema
   * @return created template data
   */
  getTemplate(data, schema, opts = this.config.templateDefaultOptions) {
    return this.config.getTemplate(this, data, schema, opts);
  }
  isValid(data, schema, pointer) {
    return this.config.isValid(this, data, schema, pointer);
  }
  resolveAnyOf(data, schema, pointer) {
    return this.config.resolveAnyOf(this, data, schema, pointer);
  }
  resolveAllOf(data, schema) {
    return this.config.resolveAllOf(this, data, schema);
  }
  resolveRef(schema) {
    return this.config.resolveRef(schema, this.rootSchema);
  }
  resolveOneOf(data, schema, pointer) {
    return this.config.resolveOneOf(this, data, schema, pointer);
  }
  setSchema(schema) {
    this.rootSchema = schema;
  }
  /**
   * Returns the json-schema of the given object property or array item.
   * e.g. it steps by one key into the data
   *
   *  This helper determines the location of the property within the schema (additional properties, oneOf, ...) and
   *  returns the correct schema.
   *
   * @param  key       - property-name or array-index
   * @param  schema    - json schema of current data
   * @param  data      - parent of key
   * @param  [pointer] - pointer to schema and data (parent of key)
   * @return Schema or Error if failed resolving key
   */
  step(key, schema, data, pointer) {
    return this.config.step(this, key, schema, data, pointer);
  }
  /**
   * Validate data by a json schema
   *
   * @param value - value to validate
   * @param [schema] - json schema, defaults to rootSchema
   * @param [pointer] - json pointer pointing to value (used for error-messages only)
   * @return list of errors or empty
   */
  validate(data, schema, pointer) {
    return this.config.validate(this, data, schema, pointer);
  }
};

// node_modules/json-schema-library/dist/module/lib/addRemoteSchema.js
function addRemoteSchema(draft, url, schema) {
  schema.id = schema.id || url;
  draft.remotes[url] = draft.compileSchema(schema);
}

// node_modules/json-schema-library/dist/module/lib/eachSchema.js
import gp2 from "../../@sagold/json-pointer@^5.1.2.js";

// node_modules/json-schema-library/dist/module/lib/schema/getTypeDefs.js
import gp from "../../@sagold/json-pointer@^5.1.2.js";
import { get } from "../../@sagold/json-query@^6.1.3.js";

// node_modules/json-schema-library/dist/module/lib/schema/types.js
var Types = {
  $ref: {
    type: false
  },
  allOf: {
    type: false,
    definitions: ["allOf/*"]
  },
  anyOf: {
    type: false,
    definitions: ["anyOf/*"]
  },
  array: {
    type: true,
    // ignore additionalItems:TypeDef, when items:TypeDef
    definitions: [
      "allOf/*",
      "anyOf/*",
      "oneOf/*",
      "not",
      "items",
      "items/*",
      "additionalItems"
    ],
    validationKeywords: ["minItems", "maxItems", "uniqueItems"],
    keywords: ["items", "additionalItems", "minItems", "maxItems", "uniqueItems"]
  },
  boolean: {
    type: true
  },
  enum: {
    type: false
  },
  integer: {
    type: true,
    definitions: ["allOf/*", "anyOf/*", "oneOf/*", "not"],
    validationKeywords: ["minimum", "maximum", "multipleOf"]
  },
  not: {
    type: false,
    definitions: ["not"]
  },
  number: {
    type: true,
    definitions: ["allOf/*", "anyOf/*", "oneOf/*", "not"],
    validationKeywords: ["minimum", "maximum", "multipleOf"]
  },
  null: {
    type: true
  },
  object: {
    type: true,
    // patternProperties also validate properties
    // dependencies:(string, TypeDef) extend current TypeDef
    // additional Properties validate only remaining properties (after properties & pattern)
    definitions: [
      "allOf/*",
      "anyOf/*",
      "oneOf/*",
      "not",
      "properties/*",
      "additionalProperties",
      "patternProperties/*",
      "dependencies/*"
    ],
    validationKeywords: ["minProperties", "maxProperties", "required"],
    keywords: [
      "properties",
      "additionalProperties",
      "patternProperties",
      "dependencies",
      "minProperties",
      "maxProperties",
      "required"
    ]
  },
  oneOf: {
    type: false,
    definitions: ["oneOf/*"]
  },
  string: {
    type: true,
    definitions: ["allOf/*", "anyOf/*", "oneOf/*", "not"],
    validationKeywords: ["minLength", "maxLength", "pattern"]
  }
};
var types_default = Types;

// node_modules/json-schema-library/dist/module/lib/schema/getTypeId.js
var typeKeywords = Object.keys(types_default).filter((id) => types_default[id].type === false);
var hasOwnProperty = Object.prototype.hasOwnProperty;
function getTypeId(schema) {
  if (isObject(schema) === false) {
    return void 0;
  }
  if (schema.enum) {
    return "enum";
  }
  const type = schema.type;
  if (Array.isArray(type) || types_default[type]) {
    return type;
  }
  const ids = typeKeywords.filter((type2) => schema[type2]);
  if (ids.length === 1) {
    return ids[0];
  }
  if (ids.length === 0) {
    for (let i = 0, l = types_default.object.keywords.length; i < l; i += 1) {
      const keyword = types_default.object.keywords[i];
      if (hasOwnProperty.call(schema, keyword)) {
        return "object";
      }
    }
    for (let i = 0, l = types_default.array.keywords.length; i < l; i += 1) {
      const keyword = types_default.array.keywords[i];
      if (hasOwnProperty.call(schema, keyword)) {
        return "array";
      }
    }
    return void 0;
  }
  throw new Error(`Mutiple typeIds [${ids.join(", ")}] matched in ${JSON.stringify(schema)}`);
}

// node_modules/json-schema-library/dist/module/lib/schema/getTypeDefs.js
function getTypeDefs(schema) {
  const defs = [];
  const id = getTypeId(schema);
  if (id == null) {
    return defs;
  }
  let type;
  if (Array.isArray(id)) {
    type = {};
    for (let i = 0, l = id.length; i < l; i += 1) {
      Object.assign(type, types_default[id[i]]);
    }
  } else {
    type = types_default[id];
  }
  if (type.definitions == null) {
    return defs;
  }
  type.definitions.forEach((query) => {
    get(schema, query, (value, key, parent, pointer) => {
      if (isObject(value) && getTypeId(value)) {
        defs.push({ pointer: gp.join(gp.split(pointer), false), def: value });
      }
    });
  });
  return defs;
}

// node_modules/json-schema-library/dist/module/lib/eachSchema.js
function nextTypeDefs(schema, pointer) {
  if (this.callback(schema, pointer) === true) {
    return;
  }
  const defs = getTypeDefs(schema);
  defs.forEach((next) => this.nextTypeDefs(next.def, gp2.join(pointer, next.pointer, false)));
}
function eachDefinition(walk, schema, pointer, key = "definitions") {
  const defs = schema[key];
  Object.keys(defs).forEach((defId) => {
    if (defs[defId] === false || isObject(defs[defId])) {
      walk.nextTypeDefs(defs[defId], gp2.join(pointer, key, defId, false));
      return;
    }
  });
}
function eachSchema(schema, callback, pointer = "#") {
  const walk = { callback, nextTypeDefs };
  walk.nextTypeDefs(schema, pointer);
  if (schema.definitions != null) {
    walk.callback = (defschema, schemaPointer) => {
      callback(defschema, schemaPointer);
      if (defschema.definitions != null) {
        eachDefinition(walk, defschema, schemaPointer);
      }
    };
    eachDefinition(walk, schema, pointer);
  }
  if (schema.$defs != null) {
    walk.callback = (defschema, schemaPointer) => {
      callback(defschema, schemaPointer);
      if (defschema.definitions != null) {
        eachDefinition(walk, defschema, schemaPointer);
      }
    };
    eachDefinition(walk, schema, pointer, "$defs");
  }
}

// node_modules/json-schema-library/dist/module/lib/compile/joinScope.js
var suffixes = /(#|\/)+$/;
var trailingHash = /#$/;
var isDomain = /^[^:]+:\/\/[^/]+\//;
var trailingFragments = /\/[^/]*$/;
var idAndPointer = /#.*$/;
function joinScope(previous, id) {
  if (previous == null && id == null) {
    return "#";
  }
  if (id == null) {
    return previous.replace(trailingHash, "");
  }
  if (previous == null) {
    return id.replace(trailingHash, "");
  }
  if (id[0] === "#") {
    return `${previous.replace(idAndPointer, "")}${id.replace(suffixes, "")}`;
  }
  if (isDomain.test(id)) {
    return id.replace(trailingHash, "");
  }
  return `${previous.replace(trailingFragments, "")}/${id.replace(trailingHash, "")}`;
}

// node_modules/json-schema-library/dist/module/lib/compile/getRef.js
import { get as get2 } from "../../@sagold/json-pointer@^5.1.2.js";

// node_modules/json-schema-library/dist/module/lib/compile/splitRef.js
var suffixes2 = /(#|\/)+$/g;
var emptyValues = ["", null, "#"];
function splitRef($ref) {
  if (emptyValues.includes($ref)) {
    return [];
  }
  $ref = $ref.replace(suffixes2, "");
  if ($ref.indexOf("#") === -1) {
    return [$ref.replace(suffixes2, "")];
  }
  if ($ref.indexOf("#") === 0) {
    return [$ref.replace(suffixes2, "")];
  }
  const result = $ref.split("#");
  result[0] = result[0].replace(suffixes2, "");
  result[1] = `#${result[1].replace(suffixes2, "")}`;
  return result;
}

// node_modules/json-schema-library/dist/module/lib/compile/getRef.js
var suffixes3 = /(#|\/)+$/g;
var isObject2 = (val) => getTypeOf(val) === "object";
function getRef(context, rootSchema, $ref) {
  if (isObject2($ref)) {
    $ref = $ref.__ref || $ref.$ref;
  }
  if ($ref == null) {
    return rootSchema;
  }
  let schema;
  const $remote = $ref.replace(suffixes3, "");
  if (context.remotes[$remote]) {
    schema = context.remotes[$remote];
    if (schema && schema.$ref) {
      return getRef(context, rootSchema, schema.$ref);
    }
    return schema;
  }
  if (context.ids[$ref]) {
    schema = get2(rootSchema, context.ids[$ref]);
    if (schema && schema.$ref) {
      return getRef(context, rootSchema, schema.$ref);
    }
    return schema;
  }
  const fragments = splitRef($ref);
  if (fragments.length === 0) {
    return rootSchema;
  }
  if (fragments.length === 1) {
    $ref = fragments[0];
    if (context.remotes[$ref]) {
      schema = context.remotes[$ref];
      return getRef(context, rootSchema, schema.$ref);
    }
    if (context.ids[$ref]) {
      schema = get2(rootSchema, context.ids[$ref]);
      if (schema && schema.$ref) {
        return getRef(context, rootSchema, schema.$ref);
      }
      return schema;
    }
  }
  if (fragments.length === 2) {
    const base = fragments[0];
    $ref = fragments[1];
    if (context.remotes[base]) {
      if (context.remotes[base].getRef) {
        return context.remotes[base].getRef($ref);
      }
      return getRef(context, context.remotes[base], $ref);
    }
    if (context.ids[base]) {
      return getRef(context, get2(rootSchema, context.ids[base]), $ref);
    }
  }
  schema = get2(rootSchema, context.ids[$ref] || $ref);
  if (schema && schema.$ref) {
    return getRef(context, rootSchema, schema.$ref);
  }
  return schema;
}

// node_modules/json-schema-library/dist/module/lib/compile/index.js
import { get as get3 } from "../../@sagold/json-pointer@^5.1.2.js";
var COMPILED = "__compiled";
var COMPILED_REF = "__ref";
var GET_REF = "getRef";
var GET_ROOT = "getRoot";
var suffixes4 = /(#|\/)+$/g;
function compileSchema(draft, schemaToCompile, rootSchema = schemaToCompile, force = false) {
  if (!schemaToCompile || schemaToCompile[COMPILED] !== void 0) {
    return schemaToCompile;
  }
  const context = { ids: {}, remotes: draft.remotes };
  const rootSchemaAsString = JSON.stringify(schemaToCompile);
  const compiledSchema = JSON.parse(rootSchemaAsString);
  Object.defineProperty(compiledSchema, COMPILED, { enumerable: false, value: true });
  Object.defineProperty(compiledSchema, GET_REF, {
    enumerable: false,
    value: getRef.bind(null, context, compiledSchema)
  });
  if (force === false && rootSchemaAsString.includes("$ref") === false) {
    return compiledSchema;
  }
  if (schemaToCompile !== rootSchema) {
    Object.defineProperty(compiledSchema, "definitions", {
      enumerable: false,
      value: Object.assign({}, rootSchema.definitions, rootSchema.$defs, schemaToCompile.definitions, schemaToCompile.$defs)
    });
  }
  const scopes = {};
  const getRoot = () => compiledSchema;
  eachSchema(compiledSchema, (schema, pointer) => {
    var _a;
    if (schema.id) {
      if (schema.id.startsWith("http") && /(allOf|anyOf|oneOf)\/\d+$/.test(pointer)) {
        const parentPointer2 = pointer.replace(/\/(allOf|anyOf|oneOf)\/\d+$/, "");
        const parentSchema = get3(compiledSchema, parentPointer2);
        schema.id = (_a = parentSchema.id) !== null && _a !== void 0 ? _a : schema.id;
      }
      context.ids[schema.id.replace(suffixes4, "")] = pointer;
    }
    pointer = `#${pointer}`.replace(/##+/, "#");
    const previousPointer = pointer.replace(/\/[^/]+$/, "");
    const parentPointer = pointer.replace(/\/[^/]+\/[^/]+$/, "");
    const previousScope = scopes[previousPointer] || scopes[parentPointer];
    const scope = joinScope(previousScope, schema.id);
    scopes[pointer] = scope;
    if (context.ids[scope] == null) {
      context.ids[scope] = pointer;
    }
    if (schema.$ref && !schema[COMPILED_REF]) {
      Object.defineProperty(schema, COMPILED_REF, {
        enumerable: false,
        value: joinScope(scope, schema.$ref)
      });
      Object.defineProperty(schema, GET_ROOT, { enumerable: false, value: getRoot });
    }
  });
  return compiledSchema;
}

// node_modules/json-schema-library/dist/module/lib/compileSchema.js
var compileSchema_default = compileSchema;

// node_modules/json-schema-library/dist/module/lib/each.js
function each(draft, data, callback, schema = draft.rootSchema, pointer = "#") {
  schema = draft.resolveRef(schema);
  callback(schema, data, pointer);
  const dataType = getTypeOf(data);
  if (dataType === "object") {
    Object.keys(data).forEach((key) => {
      const nextSchema = draft.step(key, schema, data, pointer);
      const next = data[key];
      draft.each(next, callback, nextSchema, `${pointer}/${key}`);
    });
  } else if (dataType === "array") {
    data.forEach((next, key) => {
      const nextSchema = draft.step(key, schema, data, pointer);
      draft.each(next, callback, nextSchema, `${pointer}/${key}`);
    });
  }
}

// node_modules/json-schema-library/dist/module/lib/validation/errors.js
var errors = {
  additionalItemsError: createCustomError("AdditionalItemsError"),
  additionalPropertiesError: createCustomError("AdditionalPropertiesError"),
  anyOfError: createCustomError("AnyOfError"),
  allOfError: createCustomError("AllOfError"),
  constError: createCustomError("ConstError"),
  containsError: createCustomError("ContainsError"),
  containsArrayError: createCustomError("ContainsArrayError"),
  containsAnyError: createCustomError("ContainsAnyError"),
  enumError: createCustomError("EnumError"),
  forbiddenPropertyError: createCustomError("ForbiddenPropertyError"),
  formatURLError: createCustomError("FormatURLError"),
  formatURIError: createCustomError("FormatURIError"),
  formatURIReferenceError: createCustomError("FormatURIReferenceError"),
  formatURITemplateError: createCustomError("FormatURITemplateError"),
  formatDateError: createCustomError("FormatDateError"),
  formatDateTimeError: createCustomError("FormatDateTimeError"),
  formatEmailError: createCustomError("FormatEmailError"),
  formatHostnameError: createCustomError("FormatHostnameError"),
  formatIPV4Error: createCustomError("FormatIPV4Error"),
  formatIPV4LeadingZeroError: createCustomError("FormatIPV4LeadingZeroError"),
  formatIPV6Error: createCustomError("FormatIPV6Error"),
  formatIPV6LeadingZeroError: createCustomError("FormatIPV6LeadingZeroError"),
  formatJsonPointerError: createCustomError("FormatJsonPointerError"),
  formatRegExError: createCustomError("FormatRegExError"),
  formatTimeError: createCustomError("FormatTimeError"),
  invalidSchemaError: createCustomError("InvalidSchemaError"),
  invalidDataError: createCustomError("InvalidDataError"),
  invalidTypeError: createCustomError("InvalidTypeError"),
  invalidPropertyNameError: createCustomError("InvalidPropertyNameError"),
  maximumError: createCustomError("MaximumError"),
  maxItemsError: createCustomError("MaxItemsError"),
  maxLengthError: createCustomError("MaxLengthError"),
  maxPropertiesError: createCustomError("MaxPropertiesError"),
  minimumError: createCustomError("MinimumError"),
  minItemsError: createCustomError("MinItemsError"),
  minItemsOneError: createCustomError("MinItemsOneError"),
  minLengthError: createCustomError("MinLengthError"),
  minLengthOneError: createCustomError("MinLengthOneError"),
  minPropertiesError: createCustomError("MinPropertiesError"),
  missingDependencyError: createCustomError("MissingDependencyError"),
  missingOneOfPropertyError: createCustomError("MissingOneOfPropertyError"),
  multipleOfError: createCustomError("MultipleOfError"),
  multipleOneOfError: createCustomError("MultipleOneOfError"),
  noAdditionalPropertiesError: createCustomError("NoAdditionalPropertiesError"),
  notError: createCustomError("NotError"),
  oneOfError: createCustomError("OneOfError"),
  oneOfPropertyError: createCustomError("OneOfPropertyError"),
  patternError: createCustomError("PatternError"),
  patternPropertiesError: createCustomError("PatternPropertiesError"),
  requiredPropertyError: createCustomError("RequiredPropertyError"),
  schemaWarning: createCustomError("SchemaWarning"),
  typeError: createCustomError("TypeError"),
  undefinedValueError: createCustomError("UndefinedValueError"),
  uniqueItemsError: createCustomError("UniqueItemsError"),
  unknownPropertyError: createCustomError("UnknownPropertyError"),
  valueNotEmptyError: createCustomError("ValueNotEmptyError")
};
var errors_default = errors;

// node_modules/json-schema-library/dist/module/lib/validation/format.js
import validUrl from "../../valid-url@^1.0.9.js";
import { parse as parseIdnEmail } from "../../smtp-address-parser@1.0.10/denonext/smtp-address-parser.development.mjs.js";
var isValidDateTime = new RegExp("^([0-9]+)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])[Tt]([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\\.[0-9]+)?(([Zz])|([\\+|\\-]([01][0-9]|2[0-3]):[0-5][0-9]))$");
var isValidIPV4 = /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
var isValidIPV6 = /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i;
var isValidHostname = /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/;
var matchDate = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
var matchTime = /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i;
var DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var isValidJsonPointer = /^(?:\/(?:[^~/]|~0|~1)*)*$/;
var isValidRelativeJsonPointer = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
var isValidURIRef = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
var isValidURITemplate = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i;
var formatValidators = {
  date: (draft, schema, value, pointer) => {
    if (typeof value !== "string" || value === "") {
      return void 0;
    }
    const matches = value.match(matchDate);
    if (!matches) {
      return draft.errors.formatDateTimeError({ value, pointer, schema });
    }
    const year = +matches[1];
    const month = +matches[2];
    const day = +matches[3];
    const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    if (month >= 1 && month <= 12 && day >= 1 && day <= (month == 2 && isLeapYear ? 29 : DAYS[month])) {
      return void 0;
    }
    return draft.errors.formatDateError({ value, pointer, schema });
  },
  "date-time": (draft, schema, value, pointer) => {
    if (typeof value !== "string" || value === "") {
      return void 0;
    }
    if (value === "" || isValidDateTime.test(value)) {
      if (new Date(value).toString() === "Invalid Date") {
        return draft.errors.formatDateTimeError({ value, pointer, schema });
      }
      return void 0;
    }
    return draft.errors.formatDateTimeError({ value, pointer, schema });
  },
  email: (draft, schema, value, pointer) => {
    if (typeof value !== "string" || value === "") {
      return void 0;
    }
    if (value[0] === '"') {
      return draft.errors.formatEmailError({ value, pointer, schema });
    }
    const [name, host, ...rest] = value.split("@");
    if (!name || !host || rest.length !== 0 || name.length > 64 || host.length > 253) {
      return draft.errors.formatEmailError({ value, pointer, schema });
    }
    if (name[0] === "." || name.endsWith(".") || name.includes("..")) {
      return draft.errors.formatEmailError({ value, pointer, schema });
    }
    if (!/^[a-z0-9.-]+$/i.test(host) || !/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+$/i.test(name)) {
      return draft.errors.formatEmailError({ value, pointer, schema });
    }
    if (!host.split(".").every((part) => /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/i.test(part))) {
      return draft.errors.formatEmailError({ value, pointer, schema });
    }
    return void 0;
  },
  /**
   * @draft 7
   * [RFC6531] https://json-schema.org/draft-07/json-schema-validation.html#RFC6531
   */
  "idn-email": (draft, schema, value, pointer) => {
    if (typeof value !== "string" || value === "") {
      return void 0;
    }
    try {
      parseIdnEmail(value);
      return void 0;
    } catch (e) {
      return draft.errors.formatEmailError({ value, pointer, schema });
    }
  },
  hostname: (draft, schema, value, pointer) => {
    if (typeof value !== "string") {
      return void 0;
    }
    if (value === "" || isValidHostname.test(value)) {
      return void 0;
    }
    return draft.errors.formatHostnameError({ value, pointer, schema });
  },
  ipv4: (draft, schema, value, pointer) => {
    if (typeof value !== "string" || value === "") {
      return void 0;
    }
    if (value && value[0] === "0") {
      return draft.errors.formatIPV4LeadingZeroError({ value, pointer, schema });
    }
    if (value.length <= 15 && isValidIPV4.test(value)) {
      return void 0;
    }
    return draft.errors.formatIPV4Error({ value, pointer, schema });
  },
  ipv6: (draft, schema, value, pointer) => {
    if (typeof value !== "string" || value === "") {
      return void 0;
    }
    if (value && value[0] === "0") {
      return draft.errors.formatIPV6LeadingZeroError({ value, pointer, schema });
    }
    if (value.length <= 45 && isValidIPV6.test(value)) {
      return void 0;
    }
    return draft.errors.formatIPV6Error({ value, pointer, schema });
  },
  "json-pointer": (draft, schema, value, pointer) => {
    if (typeof value !== "string" || value === "") {
      return void 0;
    }
    if (isValidJsonPointer.test(value)) {
      return void 0;
    }
    return draft.errors.formatJsonPointerError({ value, pointer, schema });
  },
  "relative-json-pointer": (draft, schema, value, pointer) => {
    if (typeof value !== "string" || value === "") {
      return void 0;
    }
    if (isValidRelativeJsonPointer.test(value)) {
      return void 0;
    }
    return draft.errors.formatJsonPointerError({ value, pointer, schema });
  },
  regex: (draft, schema, value, pointer) => {
    if (typeof value === "string" && /\\Z$/.test(value) === false) {
      try {
        new RegExp(value);
        return void 0;
      } catch (e) {
      }
      return draft.errors.formatRegExError({ value, pointer, schema });
    }
    if (typeof value === "object" || typeof value === "number" || Array.isArray(value)) {
      return void 0;
    }
    return draft.errors.formatRegExError({ value, pointer, schema });
  },
  // hh:mm:ss.sTZD
  // https://opis.io/json-schema/2.x/formats.html
  // regex https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s07.html
  time: (draft, schema, value, pointer) => {
    if (typeof value !== "string" || value === "") {
      return void 0;
    }
    const matches = value.match(matchTime);
    return matches ? void 0 : draft.errors.formatDateTimeError({ value, pointer, schema });
  },
  uri: (draft, schema, value, pointer) => {
    if (typeof value !== "string" || value === "") {
      return void 0;
    }
    if (validUrl.isUri(value)) {
      return void 0;
    }
    return draft.errors.formatURIError({ value, pointer, schema });
  },
  "uri-reference": (draft, schema, value, pointer) => {
    if (typeof value !== "string" || value === "") {
      return void 0;
    }
    if (isValidURIRef.test(value)) {
      return void 0;
    }
    return draft.errors.formatURIReferenceError({ value, pointer, schema });
  },
  "uri-template": (draft, schema, value, pointer) => {
    if (typeof value !== "string" || value === "") {
      return void 0;
    }
    if (isValidURITemplate.test(value)) {
      return void 0;
    }
    return draft.errors.formatURITemplateError({ value, pointer, schema });
  },
  url: (draft, schema, value, pointer) => {
    if (value === "" || validUrl.isWebUri(value)) {
      return void 0;
    }
    return draft.errors.formatURLError({ value, pointer, schema });
  }
};
var format_default = formatValidators;

// node_modules/json-schema-library/dist/module/lib/getSchema.js
import gp3 from "../../@sagold/json-pointer@^5.1.2.js";
var emptyObject = {};
function getSchema(draft, options = emptyObject) {
  const { pointer = "#", data, schema = draft.rootSchema, withSchemaWarning = false } = options;
  const path = gp3.split(pointer);
  const result = _getSchema(draft, draft.resolveRef(schema), path, "#", data);
  if (!withSchemaWarning && (result === null || result === void 0 ? void 0 : result.code) === "schema-warning") {
    return void 0;
  }
  return result;
}
function _getSchema(draft, schema, path, pointer, data = emptyObject) {
  if (path.length === 0) {
    return draft.resolveRef(schema);
  }
  const key = path.shift();
  schema = draft.step(key, schema, data, pointer);
  if (isJsonError(schema)) {
    return schema;
  }
  data = data[key];
  return _getSchema(draft, schema, path, `${pointer}/${key}`, data);
}

// node_modules/json-schema-library/dist/module/lib/utils/isEmpty.js
function isEmpty(v) {
  const type = getTypeOf(v);
  switch (type) {
    case "string":
    case "array":
      return (v === null || v === void 0 ? void 0 : v.length) === 0;
    case "null":
    case "undefined":
      return true;
    case "object":
      return Object.keys(v).length === 0;
    default:
      return false;
  }
}

// node_modules/json-schema-library/dist/module/lib/getTemplate.js
var defaultOptions = settings_default.templateDefaultOptions;
var cache;
function shouldResolveRef(schema, pointer) {
  const { $ref } = schema;
  if ($ref == null) {
    return true;
  }
  const value = cache[pointer] == null || cache[pointer][$ref] == null ? 0 : cache[pointer][$ref];
  return value < settings_default.GET_TEMPLATE_RECURSION_LIMIT;
}
function resolveRef2(draft, schema, pointer) {
  const { $ref } = schema;
  if ($ref == null) {
    return schema;
  }
  cache[pointer] = cache[pointer] || {};
  cache[pointer][$ref] = cache[pointer][$ref] || 0;
  cache[pointer][$ref] += 1;
  return draft.resolveRef(schema);
}
function convertValue(type, value) {
  if (type === "string") {
    return JSON.stringify(value);
  } else if (typeof value !== "string") {
    return null;
  }
  try {
    value = JSON.parse(value);
    if (typeof value === type) {
      return value;
    }
  } catch (e) {
  }
  return null;
}
function createTemplateSchema(draft, schema, data, pointer, opts) {
  if (getTypeOf(schema) !== "object") {
    return Object.assign({ pointer }, schema);
  }
  if (shouldResolveRef(schema, pointer) === false && data == null) {
    return false;
  }
  let templateSchema = copy_default(resolveRef2(draft, schema, pointer));
  if (Array.isArray(schema.anyOf) && schema.anyOf.length > 0) {
    if (shouldResolveRef(schema.anyOf[0], `${pointer}/anyOf/0`)) {
      const resolvedAnyOf = resolveRef2(draft, schema.anyOf[0], `${pointer}/anyOf/0`);
      templateSchema = merge_default(templateSchema, resolvedAnyOf);
      templateSchema.pointer = schema.anyOf[0].$ref || templateSchema.pointer;
    }
    delete templateSchema.anyOf;
  }
  if (Array.isArray(schema.allOf)) {
    const mayResolve = schema.allOf.map((allOf, index) => shouldResolveRef(allOf, `${pointer}/allOf/${index}`)).reduceRight((next, before) => next && before, true);
    if (mayResolve) {
      const allOf = [];
      let extendedData = copy_default(data);
      for (let i = 0; i < schema.allOf.length; i += 1) {
        allOf.push(resolveSchema(draft, schema.allOf[i], extendedData));
        extendedData = getTemplate(draft, extendedData, { type: schema.type, ...allOf[i] }, `${pointer}/allOf/${i}`, opts);
      }
      const resolvedSchema = mergeAllOfSchema(draft, { allOf });
      if (resolvedSchema) {
        templateSchema = mergeSchema(templateSchema, resolvedSchema);
      }
    }
  }
  templateSchema.pointer = templateSchema.pointer || schema.$ref || pointer;
  return templateSchema;
}
var isJsonSchema = (template) => template && typeof template === "object";
function getTemplate(draft, data, _schema, pointer, opts) {
  var _a;
  if (_schema == null) {
    throw new Error(`getTemplate: missing schema for data: ${JSON.stringify(data)}`);
  }
  if (pointer == null) {
    throw new Error("Missing pointer");
  }
  let schema = createTemplateSchema(draft, _schema, data, pointer, opts);
  if (!isJsonSchema(schema)) {
    return void 0;
  }
  pointer = schema.pointer;
  if (schema === null || schema === void 0 ? void 0 : schema.const) {
    return schema.const;
  }
  if (Array.isArray(schema.oneOf)) {
    if (isEmpty(data)) {
      const type2 = schema.oneOf[0].type || schema.type || schema.const && typeof schema.const || getTypeOf(data);
      schema = { ...schema.oneOf[0], type: type2 };
    } else {
      const resolvedSchema = resolveOneOfFuzzy(draft, data, schema);
      if (isJsonError(resolvedSchema)) {
        if (data != null && opts.removeInvalidData !== true) {
          return data;
        }
        schema = schema.oneOf[0];
        data = void 0;
      } else {
        resolvedSchema.type = (_a = resolvedSchema.type) !== null && _a !== void 0 ? _a : schema.type;
        schema = resolvedSchema;
      }
    }
  }
  if (!isJsonSchema(schema) || schema.type == null) {
    return void 0;
  }
  if (data instanceof File) {
    return data;
  }
  const type = Array.isArray(schema.type) ? selectType(schema.type, data, schema.default) : schema.type;
  const javascriptTypeOfData = getTypeOf(data);
  if (data != null && javascriptTypeOfData !== type && !(javascriptTypeOfData === "number" && type === "integer")) {
    data = convertValue(type, data);
  }
  if (TYPE[type] == null) {
    if (opts.removeInvalidData) {
      return void 0;
    }
    return data;
  }
  const templateData = TYPE[type](draft, schema, data, pointer, opts);
  return templateData;
}
function selectType(types, data, defaultValue) {
  if (data == void 0) {
    if (defaultValue != null) {
      const defaultType = getTypeOf(defaultValue);
      if (types.includes(defaultType)) {
        return defaultType;
      }
    }
    return types[0];
  }
  const dataType = getTypeOf(data);
  if (types.includes(dataType)) {
    return dataType;
  }
  return types[0];
}
var TYPE = {
  null: (draft, schema, data) => getDefault(schema, data, null),
  string: (draft, schema, data) => getDefault(schema, data, ""),
  number: (draft, schema, data) => getDefault(schema, data, 0),
  integer: (draft, schema, data) => getDefault(schema, data, 0),
  boolean: (draft, schema, data) => getDefault(schema, data, false),
  object: (draft, schema, data, pointer, opts) => {
    var _a;
    const template = schema.default === void 0 ? {} : schema.default;
    const d = {};
    const required = opts.extendDefaults === false && schema.default !== void 0 ? [] : (_a = schema.required) !== null && _a !== void 0 ? _a : [];
    if (schema.properties) {
      Object.keys(schema.properties).forEach((key) => {
        const value = data == null || data[key] == null ? template[key] : data[key];
        const isRequired = required.includes(key);
        if (value != null || isRequired || opts.addOptionalProps) {
          d[key] = getTemplate(draft, value, schema.properties[key], `${pointer}/properties/${key}`, opts);
        }
      });
    }
    let dependenciesSchema = resolveDependencies(draft, schema, d);
    if (dependenciesSchema) {
      dependenciesSchema = mergeSchema(schema, dependenciesSchema);
      delete dependenciesSchema.dependencies;
      const dependencyData = getTemplate(draft, data, dependenciesSchema, `${pointer}/dependencies`, opts);
      Object.assign(d, dependencyData);
    }
    if (data) {
      if (opts.removeInvalidData === true && (schema.additionalProperties === false || getTypeOf(schema.additionalProperties) === "object")) {
        if (getTypeOf(schema.additionalProperties) === "object") {
          Object.keys(data).forEach((key) => {
            if (d[key] == null) {
              if (draft.isValid(data[key], schema.additionalProperties)) {
                d[key] = data[key];
              }
            }
          });
        }
      } else {
        Object.keys(data).forEach((key) => d[key] == null && (d[key] = data[key]));
      }
    }
    const ifSchema = resolveIfSchema(draft, schema, d);
    if (ifSchema) {
      const additionalData = getTemplate(draft, d, { type: "object", ...ifSchema }, pointer, opts);
      Object.assign(d, additionalData);
    }
    return d;
  },
  // build array type of items, ignores additionalItems
  array: (draft, schema, data, pointer, opts) => {
    var _a, _b;
    if (schema.items == null) {
      return data || [];
    }
    const template = schema.default === void 0 ? [] : schema.default;
    const d = data || template;
    const minItems = opts.extendDefaults === false && schema.default !== void 0 ? 0 : schema.minItems || 0;
    if (Array.isArray(schema.items)) {
      for (let i = 0, l = Math.max(minItems !== null && minItems !== void 0 ? minItems : 0, (_b = (_a = schema.items) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0); i < l; i += 1) {
        d[i] = getTemplate(draft, d[i] == null ? template[i] : d[i], schema.items[i], `${pointer}/items/${i}`, opts);
      }
      return d;
    }
    if (getTypeOf(schema.items) !== "object") {
      return d;
    }
    const templateSchema = createTemplateSchema(draft, schema.items, data, pointer, opts);
    if (templateSchema === false) {
      return d;
    }
    pointer = templateSchema.pointer || pointer;
    if (templateSchema.oneOf && d.length === 0) {
      const oneOfSchema = templateSchema.oneOf[0];
      for (let i = 0; i < minItems; i += 1) {
        d[i] = getTemplate(draft, d[i] == null ? template[i] : d[i], oneOfSchema, `${pointer}/oneOf/0`, opts);
      }
      return d;
    }
    if (templateSchema.oneOf && d.length > 0) {
      const itemCount = Math.max(minItems, d.length);
      for (let i = 0; i < itemCount; i += 1) {
        let value = d[i] == null ? template[i] : d[i];
        let one = resolveOneOfFuzzy(draft, value, templateSchema);
        if (one == null || isJsonError(one)) {
          if (value != null && opts.removeInvalidData !== true) {
            d[i] = value;
          } else {
            value = void 0;
            one = templateSchema.oneOf[0];
            d[i] = getTemplate(draft, value, one, `${pointer}/oneOf/${i}`, opts);
          }
        } else {
          d[i] = getTemplate(draft, value, one, `${pointer}/oneOf/${i}`, opts);
        }
      }
      return d;
    }
    if (templateSchema.type) {
      for (let i = 0, l = Math.max(minItems, d.length); i < l; i += 1) {
        d[i] = getTemplate(draft, d[i] == null ? template[i] : d[i], templateSchema, `${pointer}/items`, opts);
      }
      return d;
    }
    return d;
  }
};
function getDefault(schema, templateValue, initValue) {
  if (templateValue != null) {
    return templateValue;
  } else if (schema.const) {
    return schema.const;
  } else if (schema.default === void 0 && Array.isArray(schema.enum)) {
    return schema.enum[0];
  } else if (schema.default === void 0) {
    return initValue;
  }
  return schema.default;
}
var getTemplate_default = (draft, data, schema = draft.rootSchema, opts) => {
  cache = {};
  if (opts) {
    return getTemplate(draft, data, schema, "#", { ...defaultOptions, ...opts });
  }
  return getTemplate(draft, data, schema, "#", defaultOptions);
};

// node_modules/json-schema-library/dist/module/lib/isValid.js
function isValid(draft, value, schema = draft.rootSchema, pointer = "#") {
  return draft.validate(value, schema, pointer).length === 0;
}

// node_modules/json-schema-library/dist/module/lib/utils/punycode.ucs2decode.js
function ucs2decode(string) {
  const output = [];
  let counter = 0;
  const length = string.length;
  while (counter < length) {
    const value = string.charCodeAt(counter++);
    if (value >= 55296 && value <= 56319 && counter < length) {
      const extra = string.charCodeAt(counter++);
      if ((extra & 64512) == 56320) {
        output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}

// node_modules/json-schema-library/dist/module/lib/utils/getPrecision.js
function getPrecision(value) {
  const string = `${value}`;
  const index = string.indexOf(".");
  return index === -1 ? 0 : string.length - (index + 1);
}

// node_modules/json-schema-library/dist/module/lib/validation/keyword.js
import deepEqual from "../../fast-deep-equal@^3.1.3.js";
var hasOwnProperty2 = Object.prototype.hasOwnProperty;
var hasProperty = (value, property) => !(value[property] === void 0 || !hasOwnProperty2.call(value, property));
var KeywordValidation = {
  additionalProperties: (draft, schema, value, pointer) => {
    if (schema.additionalProperties === true || schema.additionalProperties == null) {
      return void 0;
    }
    if (getTypeOf(schema.patternProperties) === "object" && schema.additionalProperties === false) {
      return void 0;
    }
    const errors2 = [];
    let receivedProperties = Object.keys(value).filter((prop) => settings_default.propertyBlacklist.includes(prop) === false);
    const expectedProperties = Object.keys(schema.properties || {});
    if (getTypeOf(schema.patternProperties) === "object") {
      const patterns = Object.keys(schema.patternProperties).map((pattern) => new RegExp(pattern));
      receivedProperties = receivedProperties.filter((prop) => {
        for (let i = 0; i < patterns.length; i += 1) {
          if (patterns[i].test(prop)) {
            return false;
          }
        }
        return true;
      });
    }
    for (let i = 0, l = receivedProperties.length; i < l; i += 1) {
      const property = receivedProperties[i];
      if (expectedProperties.indexOf(property) === -1) {
        const additionalIsObject = isObject(schema.additionalProperties);
        if (additionalIsObject && Array.isArray(schema.additionalProperties.oneOf)) {
          const result = draft.resolveOneOf(value[property], schema.additionalProperties, `${pointer}/${property}`);
          if (isJsonError(result)) {
            errors2.push(draft.errors.additionalPropertiesError({
              pointer,
              schema: schema.additionalProperties,
              value,
              property: receivedProperties[i],
              properties: expectedProperties,
              // pass all validation errors
              errors: result.data.errors
            }));
          } else {
            errors2.push(...draft.validate(value[property], result, pointer));
          }
        } else if (additionalIsObject) {
          errors2.push(...draft.validate(value[property], schema.additionalProperties, `${pointer}/${property}`));
        } else {
          errors2.push(draft.errors.noAdditionalPropertiesError({
            pointer,
            schema,
            value,
            property: receivedProperties[i],
            properties: expectedProperties
          }));
        }
      }
    }
    return errors2;
  },
  allOf: validateAllOf,
  anyOf: validateAnyOf,
  dependencies: validateDependencies,
  enum: (draft, schema, value, pointer) => {
    const type = getTypeOf(value);
    if (type === "object" || type === "array") {
      const valueStr = JSON.stringify(value);
      for (let i = 0; i < schema.enum.length; i += 1) {
        if (JSON.stringify(schema.enum[i]) === valueStr) {
          return void 0;
        }
      }
    } else if (schema.enum.includes(value)) {
      return void 0;
    }
    return draft.errors.enumError({ pointer, schema, value, values: schema.enum });
  },
  format: (draft, schema, value, pointer) => {
    if (draft.validateFormat[schema.format]) {
      const errors2 = draft.validateFormat[schema.format](draft, schema, value, pointer);
      return errors2;
    }
    return void 0;
  },
  items: (draft, schema, value, pointer) => {
    if (schema.items === false) {
      if (Array.isArray(value) && value.length === 0) {
        return void 0;
      }
      return draft.errors.invalidDataError({ pointer, value, schema });
    }
    const errors2 = [];
    for (let i = 0; i < value.length; i += 1) {
      const itemData = value[i];
      const itemSchema = draft.step(i, schema, value, pointer);
      if (isJsonError(itemSchema)) {
        return [itemSchema];
      }
      const itemErrors = draft.validate(itemData, itemSchema, `${pointer}/${i}`);
      errors2.push(...itemErrors);
    }
    return errors2;
  },
  maximum: (draft, schema, value, pointer) => {
    if (isNaN(schema.maximum)) {
      return void 0;
    }
    if (schema.maximum && schema.maximum < value) {
      return draft.errors.maximumError({
        maximum: schema.maximum,
        length: value,
        value,
        pointer,
        schema
      });
    }
    if (schema.maximum && schema.exclusiveMaximum === true && schema.maximum === value) {
      return draft.errors.maximumError({
        maximum: schema.maximum,
        length: value,
        pointer,
        schema,
        value
      });
    }
    return void 0;
  },
  maxItems: (draft, schema, value, pointer) => {
    if (isNaN(schema.maxItems)) {
      return void 0;
    }
    if (schema.maxItems < value.length) {
      return draft.errors.maxItemsError({
        maximum: schema.maxItems,
        length: value.length,
        schema,
        value,
        pointer
      });
    }
    return void 0;
  },
  maxLength: (draft, schema, value, pointer) => {
    if (isNaN(schema.maxLength)) {
      return void 0;
    }
    const lengthOfString = ucs2decode(value).length;
    if (schema.maxLength < lengthOfString) {
      return draft.errors.maxLengthError({
        maxLength: schema.maxLength,
        length: lengthOfString,
        pointer,
        schema,
        value
      });
    }
    return void 0;
  },
  maxProperties: (draft, schema, value, pointer) => {
    const propertyCount = Object.keys(value).length;
    if (isNaN(schema.maxProperties) === false && schema.maxProperties < propertyCount) {
      return draft.errors.maxPropertiesError({
        maxProperties: schema.maxProperties,
        length: propertyCount,
        pointer,
        schema,
        value
      });
    }
    return void 0;
  },
  minLength: (draft, schema, value, pointer) => {
    if (isNaN(schema.minLength)) {
      return void 0;
    }
    const lengthOfString = ucs2decode(value).length;
    if (schema.minLength > lengthOfString) {
      if (schema.minLength === 1) {
        return draft.errors.minLengthOneError({
          minLength: schema.minLength,
          length: lengthOfString,
          pointer,
          schema,
          value
        });
      }
      return draft.errors.minLengthError({
        minLength: schema.minLength,
        length: lengthOfString,
        pointer,
        schema,
        value
      });
    }
    return void 0;
  },
  minimum: (draft, schema, value, pointer) => {
    if (isNaN(schema.minimum)) {
      return void 0;
    }
    if (schema.minimum > value) {
      return draft.errors.minimumError({
        minimum: schema.minimum,
        length: value,
        pointer,
        schema,
        value
      });
    }
    if (schema.exclusiveMinimum === true && schema.minimum === value) {
      return draft.errors.minimumError({
        minimum: schema.minimum,
        length: value,
        pointer,
        schema,
        value
      });
    }
    return void 0;
  },
  minItems: (draft, schema, value, pointer) => {
    if (isNaN(schema.minItems)) {
      return void 0;
    }
    if (schema.minItems > value.length) {
      if (schema.minItems === 1) {
        return draft.errors.minItemsOneError({
          minItems: schema.minItems,
          length: value.length,
          pointer,
          schema,
          value
        });
      }
      return draft.errors.minItemsError({
        minItems: schema.minItems,
        length: value.length,
        pointer,
        schema,
        value
      });
    }
    return void 0;
  },
  minProperties: (draft, schema, value, pointer) => {
    if (isNaN(schema.minProperties)) {
      return void 0;
    }
    const propertyCount = Object.keys(value).length;
    if (schema.minProperties > propertyCount) {
      return draft.errors.minPropertiesError({
        minProperties: schema.minProperties,
        length: propertyCount,
        pointer,
        schema,
        value
      });
    }
    return void 0;
  },
  multipleOf: (draft, schema, value, pointer) => {
    if (isNaN(schema.multipleOf) || typeof value !== "number") {
      return void 0;
    }
    const valuePrecision = getPrecision(value);
    const multiplePrecision = getPrecision(schema.multipleOf);
    if (valuePrecision > multiplePrecision) {
      return draft.errors.multipleOfError({
        multipleOf: schema.multipleOf,
        value,
        pointer,
        schema
      });
    }
    const precision = Math.pow(10, multiplePrecision);
    const val = Math.round(value * precision);
    const multiple = Math.round(schema.multipleOf * precision);
    if (val % multiple / precision !== 0) {
      return draft.errors.multipleOfError({
        multipleOf: schema.multipleOf,
        value,
        pointer,
        schema
      });
    }
    return void 0;
  },
  not: (draft, schema, value, pointer) => {
    const errors2 = [];
    if (draft.validate(value, schema.not, pointer).length === 0) {
      errors2.push(draft.errors.notError({ value, not: schema.not, pointer, schema }));
    }
    return errors2;
  },
  oneOf: validateOneOf,
  pattern: (draft, schema, value, pointer) => {
    const pattern = new RegExp(schema.pattern, "u");
    if (pattern.test(value) === false) {
      return draft.errors.patternError({
        pattern: schema.pattern,
        description: schema.patternExample || schema.pattern,
        received: value,
        schema,
        value,
        pointer
      });
    }
    return void 0;
  },
  patternProperties: (draft, schema, value, pointer) => {
    const properties = schema.properties || {};
    const pp = schema.patternProperties;
    if (getTypeOf(pp) !== "object") {
      return void 0;
    }
    const errors2 = [];
    const keys = Object.keys(value);
    const patterns = Object.keys(pp).map((expr) => ({
      regex: new RegExp(expr),
      patternSchema: pp[expr]
    }));
    keys.forEach((key) => {
      let patternFound = false;
      for (let i = 0, l = patterns.length; i < l; i += 1) {
        if (patterns[i].regex.test(key)) {
          patternFound = true;
          const valErrors = draft.validate(value[key], patterns[i].patternSchema, `${pointer}/${key}`);
          if (valErrors && valErrors.length > 0) {
            errors2.push(...valErrors);
          }
        }
      }
      if (properties[key]) {
        return;
      }
      if (patternFound === false && schema.additionalProperties === false) {
        errors2.push(draft.errors.patternPropertiesError({
          key,
          pointer,
          schema,
          value,
          patterns: Object.keys(pp).join(",")
        }));
      }
    });
    return errors2;
  },
  properties: (draft, schema, value, pointer) => {
    const errors2 = [];
    const keys = Object.keys(schema.properties || {});
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      if (hasProperty(value, key)) {
        const itemSchema = draft.step(key, schema, value, pointer);
        const keyErrors = draft.validate(value[key], itemSchema, `${pointer}/${key}`);
        errors2.push(...keyErrors);
      }
    }
    return errors2;
  },
  // @todo move to separate file: this is custom keyword validation for JsonEditor.properties keyword
  propertiesRequired: (draft, schema, value, pointer) => {
    const errors2 = [];
    const keys = Object.keys(schema.properties || {});
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      if (value[key] === void 0) {
        errors2.push(draft.errors.requiredPropertyError({ key, pointer, schema, value }));
      } else {
        const itemSchema = draft.step(key, schema, value, pointer);
        const keyErrors = draft.validate(value[key], itemSchema, `${pointer}/${key}`);
        errors2.push(...keyErrors);
      }
    }
    return errors2;
  },
  required: (draft, schema, value, pointer) => {
    if (Array.isArray(schema.required) === false) {
      return void 0;
    }
    return schema.required.map((property) => {
      if (!hasProperty(value, property)) {
        return draft.errors.requiredPropertyError({
          key: property,
          pointer,
          schema,
          value
        });
      }
      return void 0;
    });
  },
  // @todo move to separate file: this is custom keyword validation for JsonEditor.required keyword
  requiredNotEmpty: (draft, schema, value, pointer) => {
    if (Array.isArray(schema.required) === false) {
      return void 0;
    }
    return schema.required.map((property) => {
      if (value[property] == null || value[property] === "") {
        return draft.errors.valueNotEmptyError({
          property,
          pointer: `${pointer}/${property}`,
          schema,
          value
        });
      }
      return void 0;
    });
  },
  uniqueItems: (draft, schema, value, pointer) => {
    if ((Array.isArray(value) && schema.uniqueItems) === false) {
      return void 0;
    }
    const duplicates = [];
    const errors2 = [];
    value.forEach((item, index) => {
      for (let i = index + 1; i < value.length; i += 1) {
        if (deepEqual(item, value[i]) && !duplicates.includes(i)) {
          errors2.push(draft.errors.uniqueItemsError({
            pointer: `${pointer}/${i}`,
            duplicatePointer: `${pointer}/${index}`,
            arrayPointer: pointer,
            value: JSON.stringify(item),
            schema
          }));
          duplicates.push(i);
        }
      }
    });
    return errors2;
  }
};
var keyword_default = KeywordValidation;

// node_modules/json-schema-library/dist/module/lib/createSchemaOf.js
function createSchemaOf(data) {
  if (data === void 0) {
    return void 0;
  }
  const schema = {
    type: getTypeOf(data)
  };
  if (schema.type === "object" && isObject(data)) {
    schema.properties = {};
    Object.keys(data).forEach((key) => schema.properties[key] = createSchemaOf(data[key]));
  }
  if (schema.type === "array" && Array.isArray(data)) {
    if (data.length === 1) {
      schema.items = createSchemaOf(data[0]);
    } else {
      schema.items = data.map(createSchemaOf);
    }
  }
  return schema;
}

// node_modules/json-schema-library/dist/module/lib/step.js
var stepType = {
  array: (draft, key, schema, data, pointer) => {
    const itemValue = data === null || data === void 0 ? void 0 : data[key];
    const itemsType = getTypeOf(schema.items);
    if (itemsType === "object") {
      return reduceSchema(draft, schema.items, itemValue, `${pointer}/${key}`) || draft.resolveRef(schema.items);
    }
    if (itemsType === "array") {
      if (schema.items[key] === true) {
        return createSchemaOf(itemValue);
      }
      if (schema.items[key] === false) {
        return draft.errors.invalidDataError({
          key,
          value: itemValue,
          pointer,
          schema
        });
      }
      if (schema.items[key]) {
        return draft.resolveRef(schema.items[key]);
      }
      if (schema.additionalItems === false) {
        return draft.errors.additionalItemsError({
          key,
          value: itemValue,
          pointer,
          schema
        });
      }
      if (schema.additionalItems === true || schema.additionalItems === void 0) {
        return createSchemaOf(itemValue);
      }
      if (getTypeOf(schema.additionalItems) === "object") {
        return schema.additionalItems;
      }
      throw new Error(`Invalid schema ${JSON.stringify(schema, null, 2)} for ${JSON.stringify(data, null, 2)}`);
    }
    if (schema.additionalItems !== false && itemValue) {
      return createSchemaOf(itemValue);
    }
    return new Error(`Invalid array schema for ${key} at ${pointer}`);
  },
  object: (draft, key, schema, data, pointer) => {
    var _a;
    schema = reduceSchema(draft, schema, data, pointer);
    const property = (_a = schema === null || schema === void 0 ? void 0 : schema.properties) === null || _a === void 0 ? void 0 : _a[key];
    if (property !== void 0) {
      if (property === false) {
        return draft.errors.forbiddenPropertyError({
          property: key,
          value: data,
          pointer,
          schema
        });
      } else if (property === true) {
        return createSchemaOf(data === null || data === void 0 ? void 0 : data[key]);
      }
      const targetSchema = draft.resolveRef(property);
      if (isJsonError(targetSchema)) {
        return targetSchema;
      }
      if (targetSchema && Array.isArray(targetSchema.oneOf)) {
        const resolvedSchema = draft.resolveOneOf(data[key], targetSchema, `${pointer}/${key}`);
        for (const p in targetSchema) {
          if (p !== "oneOf" && resolvedSchema[p] === void 0) {
            resolvedSchema[p] = targetSchema[p];
          }
        }
        return resolvedSchema;
      }
      if (targetSchema) {
        return targetSchema;
      }
    }
    const { patternProperties } = schema;
    if (getTypeOf(patternProperties) === "object") {
      let regex;
      const patterns = Object.keys(patternProperties);
      for (let i = 0, l = patterns.length; i < l; i += 1) {
        regex = new RegExp(patterns[i]);
        if (regex.test(key)) {
          return patternProperties[patterns[i]];
        }
      }
    }
    const { additionalProperties } = schema;
    if (getTypeOf(additionalProperties) === "object") {
      return schema.additionalProperties;
    }
    if (data && (additionalProperties === void 0 || additionalProperties === true)) {
      return createSchemaOf(data[key]);
    }
    return draft.errors.unknownPropertyError({
      property: key,
      value: data,
      pointer: `${pointer}`,
      schema
    });
  }
};
function step(draft, key, schema, data, pointer = "#") {
  var _a;
  const typeOfData = getTypeOf(data);
  let schemaType = (_a = schema.type) !== null && _a !== void 0 ? _a : typeOfData;
  if (Array.isArray(schemaType)) {
    if (!schemaType.includes(typeOfData)) {
      return draft.errors.typeError({
        value: data,
        pointer,
        expected: schema.type,
        received: typeOfData,
        schema
      });
    }
    schemaType = typeOfData;
  }
  const stepFunction = stepType[schemaType];
  if (stepFunction) {
    const schemaResult = stepFunction(draft, `${key}`, schema, data, pointer);
    if (schemaResult === void 0) {
      return draft.errors.schemaWarning({
        pointer,
        value: data,
        schema,
        key
      });
    }
    return schemaResult;
  }
  return new Error(`Unsupported schema type ${schema.type} for key ${key}`);
}

// node_modules/json-schema-library/dist/module/lib/getChildSchemaSelection.js
function getChildSchemaSelection(draft, property, schema = draft.rootSchema) {
  var _a;
  if (schema.oneOf) {
    return schema.oneOf.map((item) => draft.resolveRef(item));
  }
  if ((_a = schema.items) === null || _a === void 0 ? void 0 : _a.oneOf) {
    return schema.items.oneOf.map((item) => draft.resolveRef(item));
  }
  const result = draft.step(property, schema, {}, "#");
  if (isJsonError(result)) {
    return result;
  }
  return [result];
}

// node_modules/json-schema-library/dist/module/lib/validation/type.js
var typeValidators = {
  array: (draft, schema, value, pointer) => draft.typeKeywords.array.filter((key) => schema && schema[key] != null).map((key) => draft.validateKeyword[key](draft, schema, value, pointer)),
  object: (draft, schema, value, pointer) => draft.typeKeywords.object.filter((key) => schema && schema[key] != null).map((key) => draft.validateKeyword[key](draft, schema, value, pointer)),
  string: (draft, schema, value, pointer) => draft.typeKeywords.string.filter((key) => schema && schema[key] != null).map((key) => draft.validateKeyword[key](draft, schema, value, pointer)),
  integer: (draft, schema, value, pointer) => draft.typeKeywords.number.filter((key) => schema && schema[key] != null).map((key) => draft.validateKeyword[key](draft, schema, value, pointer)),
  number: (draft, schema, value, pointer) => draft.typeKeywords.number.filter((key) => schema && schema[key] != null).map((key) => draft.validateKeyword[key](draft, schema, value, pointer)),
  boolean: (draft, schema, value, pointer) => draft.typeKeywords.boolean.filter((key) => schema && schema[key] != null).map((key) => draft.validateKeyword[key](draft, schema, value, pointer)),
  null: (draft, schema, value, pointer) => draft.typeKeywords.null.filter((key) => schema && schema[key] != null).map((key) => draft.validateKeyword[key](draft, schema, value, pointer))
};
var type_default = typeValidators;

// node_modules/json-schema-library/dist/module/lib/validate.js
import equal from "../../fast-deep-equal@^3.1.3.js";
function getJsonSchemaType(value, expectedType) {
  const jsType = getTypeOf(value);
  if (jsType === "number" && (expectedType === "integer" || Array.isArray(expectedType) && expectedType.includes("integer"))) {
    return Number.isInteger(value) || isNaN(value) ? "integer" : "number";
  }
  return jsType;
}
function validate(draft, value, schema = draft.rootSchema, pointer = "#") {
  schema = draft.resolveRef(schema);
  if (getTypeOf(schema) === "boolean") {
    if (schema) {
      return [];
    }
    return [draft.errors.invalidDataError({ pointer, schema, value })];
  }
  if (isJsonError(schema)) {
    return [schema];
  }
  if (schema.const !== void 0) {
    if (equal(schema.const, value)) {
      return [];
    }
    return [draft.errors.constError({ pointer, schema, value, expected: schema.const })];
  }
  const receivedType = getJsonSchemaType(value, schema.type);
  const expectedType = schema.type || receivedType;
  if (receivedType !== expectedType && (!Array.isArray(expectedType) || !expectedType.includes(receivedType))) {
    return [
      draft.errors.typeError({
        pointer,
        schema,
        value,
        received: receivedType,
        expected: expectedType
      })
    ];
  }
  if (draft.validateType[receivedType] == null) {
    return [draft.errors.invalidTypeError({ pointer, schema, value, receivedType })];
  }
  const errors2 = flattenArray(draft.validateType[receivedType](draft, schema, value, pointer));
  return errors2.filter(errorOrPromise);
}

// node_modules/json-schema-library/dist/module/lib/draft04/index.js
var draft04Config = {
  typeKeywords: {
    array: [
      "allOf",
      "anyOf",
      "enum",
      "items",
      "maxItems",
      "minItems",
      "not",
      "oneOf",
      "uniqueItems"
    ],
    boolean: ["enum", "not", "allOf", "anyOf", "oneOf"],
    object: [
      "additionalProperties",
      "dependencies",
      "enum",
      "format",
      "minProperties",
      "maxProperties",
      "patternProperties",
      "properties",
      "required",
      "not",
      "oneOf",
      "allOf",
      "anyOf"
    ],
    string: [
      "allOf",
      "anyOf",
      "enum",
      "format",
      "maxLength",
      "minLength",
      "not",
      "oneOf",
      "pattern"
    ],
    number: [
      "allOf",
      "anyOf",
      "enum",
      "format",
      "maximum",
      "minimum",
      "multipleOf",
      "not",
      "oneOf"
    ],
    null: ["allOf", "anyOf", "enum", "format", "not", "oneOf"]
  },
  validateKeyword: keyword_default,
  validateType: type_default,
  validateFormat: format_default,
  errors: errors_default,
  addRemoteSchema,
  compileSchema: compileSchema_default,
  createSchemaOf,
  each,
  eachSchema,
  getChildSchemaSelection,
  getSchema,
  getTemplate: getTemplate_default,
  isValid,
  resolveAllOf,
  resolveAnyOf,
  resolveOneOf,
  resolveRef,
  step,
  validate,
  templateDefaultOptions: settings_default.templateDefaultOptions
};
var Draft04 = class extends Draft {
  constructor(schema, config2 = {}) {
    super(merge_default(draft04Config, config2), schema);
  }
};

// node_modules/json-schema-library/dist/module/lib/draft06/compile/index.js
import { get as get4 } from "../../@sagold/json-pointer@^5.1.2.js";
var COMPILED2 = "__compiled";
var COMPILED_REF2 = "__ref";
var GET_REF2 = "getRef";
var GET_ROOT2 = "getRoot";
var suffixes5 = /(#|\/)+$/g;
function compileSchema2(draft, schemaToCompile, rootSchema = schemaToCompile, force = false) {
  if (schemaToCompile === true || schemaToCompile === false || schemaToCompile === void 0) {
    return schemaToCompile;
  }
  if (schemaToCompile[COMPILED2] !== void 0) {
    return schemaToCompile;
  }
  const context = { ids: {}, remotes: draft.remotes };
  const rootSchemaAsString = JSON.stringify(schemaToCompile);
  const compiledSchema = JSON.parse(rootSchemaAsString);
  Object.defineProperty(compiledSchema, COMPILED2, { enumerable: false, value: true });
  Object.defineProperty(compiledSchema, GET_REF2, {
    enumerable: false,
    value: getRef.bind(null, context, compiledSchema)
  });
  if (force === false && rootSchemaAsString.includes("$ref") === false) {
    return compiledSchema;
  }
  if (compiledSchema !== rootSchema) {
    Object.defineProperty(compiledSchema, "$defs", {
      enumerable: true,
      value: Object.assign({}, rootSchema.definitions, rootSchema.$defs, compiledSchema.definitions, compiledSchema.$defs)
    });
  }
  const scopes = {};
  const getRoot = () => compiledSchema;
  eachSchema(compiledSchema, (schema, pointer) => {
    var _a;
    if (schema.$id) {
      if (schema.$id.startsWith("http") && /(allOf|anyOf|oneOf)\/\d+$/.test(pointer)) {
        const parentPointer2 = pointer.replace(/\/(allOf|anyOf|oneOf)\/\d+$/, "");
        const parentSchema = get4(compiledSchema, parentPointer2);
        schema.$id = (_a = parentSchema.$id) !== null && _a !== void 0 ? _a : schema.$id;
      }
      context.ids[schema.$id.replace(suffixes5, "")] = pointer;
    }
    pointer = `#${pointer}`.replace(/##+/, "#");
    const previousPointer = pointer.replace(/\/[^/]+$/, "");
    const parentPointer = pointer.replace(/\/[^/]+\/[^/]+$/, "");
    const previousScope = scopes[previousPointer] || scopes[parentPointer];
    const scope = joinScope(previousScope, schema.$id);
    scopes[pointer] = scope;
    if (context.ids[scope] == null) {
      context.ids[scope] = pointer;
    }
    if (schema.$ref && !schema[COMPILED_REF2]) {
      Object.defineProperty(schema, COMPILED_REF2, {
        enumerable: false,
        value: joinScope(scope, schema.$ref)
      });
      Object.defineProperty(schema, GET_ROOT2, { enumerable: false, value: getRoot });
    }
  });
  return compiledSchema;
}

// node_modules/json-schema-library/dist/module/lib/draft06/validation/keyword.js
var KeywordValidation2 = {
  ...keyword_default,
  // @draft >= 6
  contains: (draft, schema, value, pointer) => {
    if (schema.contains === false) {
      return draft.errors.containsArrayError({ pointer, value, schema });
    }
    if (schema.contains === true) {
      if (Array.isArray(value) && value.length === 0) {
        return draft.errors.containsAnyError({ pointer, value, schema });
      }
      return void 0;
    }
    if (getTypeOf(schema.contains) !== "object") {
      return void 0;
    }
    for (let i = 0; i < value.length; i += 1) {
      if (draft.isValid(value[i], schema.contains)) {
        return void 0;
      }
    }
    return draft.errors.containsError({ pointer, schema, value });
  },
  exclusiveMaximum: (draft, schema, value, pointer) => {
    if (isNaN(schema.exclusiveMaximum)) {
      return void 0;
    }
    if (schema.exclusiveMaximum <= value) {
      return draft.errors.maximumError({
        maximum: schema.exclusiveMaximum,
        length: value,
        pointer,
        schema,
        value
      });
    }
    return void 0;
  },
  exclusiveMinimum: (draft, schema, value, pointer) => {
    if (isNaN(schema.exclusiveMinimum)) {
      return void 0;
    }
    if (schema.exclusiveMinimum >= value) {
      return draft.errors.minimumError({
        minimum: schema.exclusiveMinimum,
        length: value,
        pointer,
        schema,
        value
      });
    }
    return void 0;
  },
  // @feature if-then-else
  if: validateIf,
  maximum: (draft, schema, value, pointer) => {
    if (isNaN(schema.maximum)) {
      return void 0;
    }
    if (schema.maximum && schema.maximum < value) {
      return draft.errors.maximumError({
        maximum: schema.maximum,
        length: value,
        pointer,
        schema,
        value
      });
    }
    return void 0;
  },
  minimum: (draft, schema, value, pointer) => {
    if (isNaN(schema.minimum)) {
      return void 0;
    }
    if (schema.minimum > value) {
      return draft.errors.minimumError({
        minimum: schema.minimum,
        length: value,
        pointer,
        schema,
        value
      });
    }
    return void 0;
  },
  patternProperties: (draft, schema, value, pointer) => {
    const properties = schema.properties || {};
    const pp = schema.patternProperties;
    if (getTypeOf(pp) !== "object") {
      return void 0;
    }
    const errors2 = [];
    const keys = Object.keys(value);
    const patterns = Object.keys(pp).map((expr) => ({
      regex: new RegExp(expr),
      patternSchema: pp[expr]
    }));
    keys.forEach((key) => {
      let patternFound = false;
      for (let i = 0, l = patterns.length; i < l; i += 1) {
        if (patterns[i].regex.test(key)) {
          patternFound = true;
          if (patterns[i].patternSchema === false) {
            errors2.push(draft.errors.patternPropertiesError({
              key,
              pointer,
              patterns: Object.keys(pp).join(","),
              schema,
              value
            }));
            return;
          }
          const valErrors = draft.validate(value[key], patterns[i].patternSchema, `${pointer}/${key}`);
          if (valErrors && valErrors.length > 0) {
            errors2.push(...valErrors);
          }
        }
      }
      if (properties[key]) {
        return;
      }
      if (patternFound === false && schema.additionalProperties === false) {
        errors2.push(draft.errors.patternPropertiesError({
          key,
          pointer,
          patterns: Object.keys(pp).join(","),
          schema,
          value
        }));
      }
    });
    return errors2;
  },
  // @draft >= 6
  propertyNames: (draft, schema, value, pointer) => {
    if (schema.propertyNames === false) {
      if (Object.keys(value).length === 0) {
        return void 0;
      }
      return draft.errors.invalidPropertyNameError({
        property: Object.keys(value),
        pointer,
        value,
        schema
      });
    }
    if (schema.propertyNames === true) {
      return void 0;
    }
    if (getTypeOf(schema.propertyNames) !== "object") {
      return void 0;
    }
    const errors2 = [];
    const properties = Object.keys(value);
    const propertySchema = { ...schema.propertyNames, type: "string" };
    properties.forEach((prop) => {
      const validationResult = draft.validate(prop, propertySchema, `${pointer}/${prop}`);
      if (validationResult.length > 0) {
        errors2.push(draft.errors.invalidPropertyNameError({
          property: prop,
          pointer,
          validationError: validationResult[0],
          value: value[prop],
          schema
        }));
      }
    });
    return errors2;
  }
};
var keyword_default2 = KeywordValidation2;

// node_modules/json-schema-library/dist/module/lib/draft06/validation/type.js
var validationType = {
  array: (draft, schema, value, pointer) => draft.typeKeywords.array.filter((key) => schema && schema[key] != null).map((key) => draft.validateKeyword[key](draft, schema, value, pointer)),
  object: (draft, schema, value, pointer) => draft.typeKeywords.object.filter((key) => schema && schema[key] != null).map((key) => draft.validateKeyword[key](draft, schema, value, pointer)),
  string: (draft, schema, value, pointer) => draft.typeKeywords.string.filter((key) => schema && schema[key] != null).map((key) => draft.validateKeyword[key](draft, schema, value, pointer)),
  integer: (draft, schema, value, pointer) => draft.typeKeywords.number.filter((key) => schema && schema[key] != null).map((key) => draft.validateKeyword[key](draft, schema, value, pointer)),
  number: (draft, schema, value, pointer) => draft.typeKeywords.number.filter((key) => schema && schema[key] != null).map((key) => draft.validateKeyword[key](draft, schema, value, pointer)),
  boolean: (draft, schema, value, pointer) => draft.typeKeywords.boolean.filter((key) => schema && schema[key] != null).map((key) => draft.validateKeyword[key](draft, schema, value, pointer)),
  null: (draft, schema, value, pointer) => draft.typeKeywords.null.filter((key) => schema && schema[key] != null).map((key) => draft.validateKeyword[key](draft, schema, value, pointer))
};
var type_default2 = validationType;

// node_modules/json-schema-library/dist/module/lib/draft06/index.js
var draft06Config = {
  typeKeywords: {
    array: [
      "allOf",
      "anyOf",
      "contains",
      "enum",
      "if",
      "items",
      "maxItems",
      "minItems",
      "not",
      "oneOf",
      "uniqueItems"
    ],
    boolean: ["allOf", "anyOf", "enum", "not", "oneOf"],
    object: [
      "additionalProperties",
      "allOf",
      "anyOf",
      "dependencies",
      "enum",
      "format",
      "if",
      "maxProperties",
      "minProperties",
      "not",
      "oneOf",
      "patternProperties",
      "properties",
      "propertyNames",
      "required"
    ],
    string: [
      "allOf",
      "anyOf",
      "enum",
      "format",
      "if",
      "maxLength",
      "minLength",
      "not",
      "oneOf",
      "pattern"
    ],
    number: [
      "enum",
      "exclusiveMaximum",
      "exclusiveMinimum",
      "format",
      "maximum",
      "minimum",
      "multipleOf",
      "not",
      "oneOf",
      "allOf",
      "anyOf",
      "if"
    ],
    null: ["allOf", "anyOf", "enum", "format", "not", "oneOf"]
  },
  validateKeyword: keyword_default2,
  validateType: type_default2,
  validateFormat: format_default,
  errors: errors_default,
  addRemoteSchema,
  compileSchema: compileSchema2,
  createSchemaOf,
  each,
  eachSchema,
  getChildSchemaSelection,
  getSchema,
  getTemplate: getTemplate_default,
  isValid,
  resolveAllOf,
  resolveAnyOf,
  resolveOneOf,
  resolveRef,
  step,
  validate,
  templateDefaultOptions: settings_default.templateDefaultOptions
};
var Draft06 = class extends Draft {
  constructor(schema, config2 = {}) {
    super(merge_default(draft06Config, config2), schema);
  }
};

// node_modules/json-schema-library/dist/module/lib/draft07/index.js
var draft07Config = {
  typeKeywords: {
    array: [
      "allOf",
      "anyOf",
      "contains",
      "enum",
      "if",
      "items",
      "maxItems",
      "minItems",
      "not",
      "oneOf",
      "uniqueItems"
    ],
    boolean: ["allOf", "anyOf", "enum", "not", "oneOf"],
    object: [
      "additionalProperties",
      "allOf",
      "anyOf",
      "dependencies",
      "enum",
      "format",
      "if",
      "maxProperties",
      "minProperties",
      "not",
      "oneOf",
      "patternProperties",
      "properties",
      "propertyNames",
      "required"
    ],
    string: [
      "allOf",
      "anyOf",
      "enum",
      "format",
      "if",
      "maxLength",
      "minLength",
      "not",
      "oneOf",
      "pattern"
    ],
    number: [
      "allOf",
      "anyOf",
      "enum",
      "exclusiveMaximum",
      "exclusiveMinimum",
      "format",
      "if",
      "maximum",
      "minimum",
      "multipleOf",
      "not",
      "oneOf"
    ],
    null: ["allOf", "anyOf", "enum", "format", "not", "oneOf"]
  },
  validateKeyword: keyword_default2,
  validateType: type_default2,
  validateFormat: format_default,
  errors: errors_default,
  addRemoteSchema,
  compileSchema: compileSchema2,
  createSchemaOf,
  each,
  eachSchema,
  getChildSchemaSelection,
  getSchema,
  getTemplate: getTemplate_default,
  isValid,
  resolveAllOf,
  resolveAnyOf,
  resolveOneOf,
  resolveRef,
  step,
  validate,
  templateDefaultOptions: settings_default.templateDefaultOptions
};
var Draft07 = class extends Draft {
  constructor(schema, config2 = {}) {
    super(merge_default(draft07Config, config2), schema);
  }
};

// node_modules/json-schema-library/dist/module/lib/jsoneditor/index.js
var draftJsonEditorConfig = {
  ...draft07Config,
  resolveOneOf: resolveOneOfFuzzy,
  resolveRef: resolveRefMerge
};
var JsonEditor = class extends Draft {
  constructor(schema, config2 = {}) {
    super(merge_default(draftJsonEditorConfig, config2), schema);
  }
};

// node_modules/json-schema-library/dist/module/index.js
var config = { strings: strings_default };
export {
  Draft,
  Draft04,
  Draft06,
  Draft07,
  JsonEditor,
  config,
  createCustomError,
  createError,
  draft04Config,
  draft06Config,
  draft07Config,
  draftJsonEditorConfig,
  getTypeOf,
  isDynamicSchema,
  isJsonError,
  mergeSchema,
  reduceSchema,
  render,
  resolveAllOf,
  resolveDynamicSchema,
  resolveOneOf,
  resolveOneOfFuzzy,
  resolveRef,
  resolveRefMerge,
  settings_default as settings,
  validateAsync
};
//# sourceMappingURL=json-schema-library.development.mjs.map