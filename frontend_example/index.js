import "./index.css";

import { getDatabase } from "@/js/database/database.js";
import { getPath } from "@/js/database/utils.js";

// const endpoint = getPath('api', 'cards', 'id',);
// console.log('endpoint', endpoint);

const { cards, profile, highline, message, request } = await getDatabase();
console.log('data', cards, profile, highline, message, request);