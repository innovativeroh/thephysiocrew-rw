import { type SchemaTypeDefinition } from "sanity";
import { blog } from "./blog";
import { team } from "./team";
import service from "./service";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, team, service],
};
