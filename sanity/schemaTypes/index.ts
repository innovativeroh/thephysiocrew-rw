import { type SchemaTypeDefinition } from "sanity";
import { blog } from "./blog";
import { team } from "./team";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, team],
};
