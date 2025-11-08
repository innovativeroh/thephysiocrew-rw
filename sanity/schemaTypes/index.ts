import { type SchemaTypeDefinition } from "sanity";
import { blog } from "./blog";
import { team } from "./team";
import service from "./service";
import { teamImage } from "./teamImage";
import { heroVideo } from "./heroVideo";
import { aboutVideo } from "./aboutVideo";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroVideo, aboutVideo, blog, team, service, teamImage],
};
