import { styleTags, tags as t } from "@lezer/highlight";

export const jsonHighlighting = styleTags({
  String: t.string,
  Number: t.number,
  "True False": t.bool,
  PropertyName: t.propertyName,
  Null: t.null,
  BlockComment: t.blockComment,
  LineComment: t.lineComment,
  ", :": t.separator,
  "[ ]": t.squareBracket,
  "{ }": t.brace,
});
