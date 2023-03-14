import CareerDynamicBox from "../CareerDynamicBox";
import {render} from "@testing-library/react";

describe(CareerDynamicBox, () => {

    it("Title displays correct text", () => {
        const {getByTestId} = render(<CareerDynamicBox />);
        const titleVal = getByTestId("CDB-Title").textContent;
        expect(titleVal).toEqual(" Software Engineering ");
    });

    it("Progress displays correct value", () => {
        const {getByTestId} = render(<CareerDynamicBox />);
        const progressVal = getByTestId("CBD-InterestScore").textContent;
        expect(progressVal).toEqual(" 50% Interest Match! ");
    });

    it("Progress List displays correct information", () => {
        const {getByTestId} = render(<CareerDynamicBox />);
        const list = getByTestId("CDB-List").children;
        expect(list[0].textContent).toEqual(" Average anual salary" +
        " of $89,086");
        expect(list[1].textContent).toEqual(" High demand career with a wide variety of career options");
        expect(list[2].textContent).toEqual(" High possibility for remote work and travel");
        expect(list[3].textContent).toEqual(" Constant demand to refresh current skills or learn new skills ");
        expect(list[4].textContent).toEqual(" Juggling an overwhelming amount of project");

    });

    it("Side header displays correct text", () => {
        const {getByTestId} = render(<CareerDynamicBox />);
        const sideHeaderVal = getByTestId("CDB-SideHead").textContent;
        expect(sideHeaderVal).toEqual(" Our Personalized Picks: ");
    })
});