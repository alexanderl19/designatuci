import clsx from "clsx";
import { getBoard } from "./getBoard";
import { Text } from "@/lib/components";
import { Section } from "@/lib/components/Symbols";

import Profile from "./Profile";

const Board = async () => {
  const board = await getBoard();

  return (
    <Section className="board center">
      <Text size="XL">Board Members</Text>
      <div className="center row">
        {board.members.map((member) => (
          <Profile key={member._key} member={member} />
        ))}
      </div>
      <Text size="XL">Board Interns</Text>
      <div className="center row">
        {board.interns.map((member) => (
          <Profile key={member._key} member={member} />
        ))}
      </div>
    </Section>
  );
};

export default Board;
