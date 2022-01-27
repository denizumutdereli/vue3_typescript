import { TopLevel,Result } from "../types/shipmentContainer.interface.";
 
export const shipmentSearch = async (search: string): Promise<TopLevel> =>
  await fetch(
    `http://localhost:3004/${search}`
    //`http://localhost:3004/data`
  ).then(val => val.json());
 