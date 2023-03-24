import { Accordion } from '@mantine/core';

function AccordionCustom(props) {
  return (
    <Accordion order={3}>
        
      <Accordion.Item value = "Knowledge">
        <Accordion.Control>Knowledge</Accordion.Control>
        <Accordion.Panel>{props.knowledge}</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value = "Skills">
        <Accordion.Control>Skills</Accordion.Control>
        <Accordion.Panel>{props.skills}</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value = "Abilities">
        <Accordion.Control>Abilities</Accordion.Control>
        <Accordion.Panel>{props.abilities}</Accordion.Panel>
      </Accordion.Item>

    </Accordion>
  );
};

export default AccordionCustom;