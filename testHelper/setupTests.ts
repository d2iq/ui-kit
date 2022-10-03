import "@testing-library/jest-dom";
import { configure } from "@testing-library/react";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ testIdAttribute: "data-cy" });
Enzyme.configure({ adapter: new Adapter() });
