import Part from "./Part";

const Content = ({
  part1,
  exercises1,
  part2,
  exercises2,
  part3,
  exercises3,
}) => {
  return (
    <div>
      <Part name={part1} number={exercises1}></Part>
      <Part name={part2} number={exercises2}></Part>
      <Part name={part3} number={exercises3}></Part>
    
    </div>
  );
};

export default Content;
