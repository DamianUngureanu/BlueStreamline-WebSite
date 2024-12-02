import { FormulaStudentTests } from "@/enums/formula-student-tests";
import { TestType } from "@/enums/test-types";
import { AboutFormulaStudentType } from "@/types/about-formula-student";

export const AboutFormulaStudentData: AboutFormulaStudentType = {
  titleEN: "Formula Student since 1979",
  titleRO: "Formula Student din 1979",
  messageEN:
  "Formula Student is an international engineering competition, initiated by the Society of Automotive Engineers in 1979. The aim is to provide students with a practical platform to build and learn. Students develop technical, management, and teamwork skills. Points are awarded in both static and dynamic events, and the team with the most points wins. The competition's popularity has grown, attracting participants from over 20 countries and 600 universities. The BlueStreamline team is striving for a meritorious ranking in the competition.",
  messageRO:
  "Formula Student este o competiție internațională de inginerie, inițiată de Societatea Inginerilor Auto în 1979. Scopul este de a oferi studenților o platformă practică pentru a construi și a învăța. Elevii își dezvoltă abilități tehnice, de management și lucru în echipă. Punctele sunt acordate în evenimente statice și dinamice, iar echipa cu cele mai multe puncte câștigă. Popularitatea competiției a crescut, atrăgând participanți din peste 20 de țări și 600 de universități. Echipa BlueStreamline urmărește o clasare meritorie în competiție.",
  tests: [
    {
      id: FormulaStudentTests.Acceleration,
      titleEN: "Acceleration",
      titleRO: "Acelerație",
      value: 75,
      color: "#1a8cff",
      messageEN: "",
      messageRO: "",
      type: TestType.Dynamic,
    },
    {
      id: FormulaStudentTests.SkidPad,
      titleEN: "Skid Pad",
      titleRO: "Skid Pad",
      value: 75,
      color: "#1fa0ff",
      messageEN: "",
      messageRO: "",
      type: TestType.Dynamic,
    },
    {
      id: FormulaStudentTests.Autocross,
      titleEN: "Autocross",
      titleRO: "Autocross",
      value: 100,
      color: "#1833ff",
      messageEN:
      "The autocross event tests the dynamics of cars in a sprint lap. Two drivers have two attempts each. The goal is to evaluate the car's maneuverability on a tight course, without other vehicles. The event combines acceleration, braking, and cornering in a single race.",
      messageRO:
      "Proba de autocross testează dinamica mașinilor într-un tur de sprint. Doi șoferi au câte două încercări. Scopul este de a evalua manevrabilitatea mașinii pe un traseu strâmt, fără alte mașini. Evenimentul combină accelerația, frânarea și virajele într-o singură cursă.",
      type: TestType.Dynamic,
    },
    {
      id: FormulaStudentTests.Efficiency,
      titleEN: "Efficiency",
      titleRO: "Efficiency",
      value: 100,
      color: "#ccf2ff",
      messageEN: "",
      messageRO: "",
      type: TestType.Dynamic,
    },
    {
      id: FormulaStudentTests.Endurance,
      titleEN: "Endurance",
      titleRO: "Endurance",
      value: 325,
      color: "#addaff",
      messageEN: "",
      messageRO: "",
      type: TestType.Dynamic,
    },
    {
      id: FormulaStudentTests.CostReport,
      titleEN: "Cost Report",
      titleRO: "Raport de cost",
      value: 100,
      color: "#bfbfbf",
      messageEN:
        "Students prepare a cost report for materials, processes, and assembly. Points are awarded based on the total cost and the quality of the report. In the end, they must tackle a cost-reduction challenge in the areas specified by the organizers.",
      messageRO:
        "Elevii întocmesc un raport al costurilor pentru materiale, procese și asamblare. Punctele se acordă în funcție de costul total și calitatea raportului. La final, trebuie să rezolve o provocare de reducere a costurilor în zonele indicate de organizatori.",
      type: TestType.Static,
    },
    {
      id: FormulaStudentTests.BusinessPlan,
      titleEN: "Business Presentation",
      titleRO: "Prezentarea afacerii",
      value: 75,
      color: "#e6e6e6",
      messageEN:
        "The objective of the Business Presentation is to assess the team's ability to develop and deliver a comprehensive business plan that convinces corporate executives that the team's car design best meets the demands of the amateur market and weekend competitions.",
      messageRO:
        "Obiectivul Prezentării Afacerii este de a evalua capacitatea echipei de a dezvolta și furniza un plan de afaceri cuprinzător care să convingă directorii unei corporații că designul mașinii echipei îndeplinește cel mai bine cerințele pieței de amatori, competițiilor de weekend.",
      type: TestType.Static,
    },
    {
      id: FormulaStudentTests.Design,
      titleEN: "Design",
      titleRO: "Proiectare",
      value: 150,
      color: "#fefefe",
      messageEN:
        "At this event, students present their knowledge of cars and engineering to a jury. The event includes multiple design rounds with increasingly difficult questions. The first round tests the fundamental knowledge of all teams, but only the best make it to the finals.",
      messageRO:
        "La acest eveniment, studenții își prezintă cunoștințele despre mașini și inginerie unui juriu. Evenimentul include mai multe runde de design cu întrebări tot mai dificile. Prima rundă testează cunoștințele de bază ale tuturor echipelor, dar doar cele mai bune ajung în finală.",
      type: TestType.Static,
    },
  ],
};
