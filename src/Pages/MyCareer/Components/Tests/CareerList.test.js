import CareerList from "../CareerList";
import { render } from "@testing-library/react";

describe(CareerList, () => {
    it("Header displays correct text", () => {
        const {getByTestId} = render(<CareerList />);
        const headerVal = getByTestId("CL-Title").textContent;
        expect(headerVal).toEqual(" Career List ");
    });

    it("List displays correct value", () => {
        const {getByTestId} = render(<CareerList />);
        const list = getByTestId("CL-List").children;
        expect(list[0].textContent).toEqual(" Career 1");
        expect(list[1].textContent).toEqual(" Career 2");
        expect(list[2].textContent).toEqual(" Career 3");
        expect(list[3].textContent).toEqual(" Career 4");
        expect(list[4].textContent).toEqual(" Career 5");
        expect(list[5].textContent).toEqual(" Career 6");
    })
})