import { queryByAttribute } from "@testing-library/react";

export const getById = queryByAttribute.bind(null, "id");
