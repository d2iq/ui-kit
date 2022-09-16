import { queryByAttribute } from "@testing-library/react";

// https://stackoverflow.com/a/53003981/3058839
export const getById = queryByAttribute.bind(null, "id");
