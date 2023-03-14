import CareerSurvey from "../CareerSurvey";
import { render } from "@testing-library/react";

describe(CareerSurvey, () => {
    it("List has correct children", () => {
        const {getByTestId} = render(<CareerSurvey />);
        const list = getByTestId("CS-List").children;
        expect(list[0].textContent).toEqual(" Survey 1");
        expect(list[1].textContent).toEqual(" Survey 2");
        expect(list[2].textContent).toEqual(" Survey 3");

    });
})