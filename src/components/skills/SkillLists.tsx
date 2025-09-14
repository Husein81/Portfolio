import SkillCard from "./SkillCard";
import { SKILLS } from "../../lib/config";
import { Skill } from "../../app/models/Skill";

// Empty card component for keyboard spacing - responsive sizing
const EmptyCard: React.FC = () => (
  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gray-500/40 border border-gray-900 rounded-lg opacity-40"></div>
);

const SkillList: React.FC = () => {
  // Calculate how many skills we need for each row
  const topRowSkills = SKILLS.slice(0, 10);
  const secondRowSkills = SKILLS.slice(10, 18);
  const thirdRowSkills = SKILLS.slice(18, 26);
  const bottomRowSkills = SKILLS.slice(26);

  // Fill remaining slots with empty cards for keyboard effect, centering the skills
  const centerSkillsInRow = (
    skills: Skill[],
    desktopPositions: number
  ): (Skill | null)[] => {
    // Use desktop layout as base
    const totalPositions = desktopPositions;

    if (skills.length >= totalPositions) {
      return skills.slice(0, totalPositions);
    }

    const emptySlots = totalPositions - skills.length;
    const leftEmpty = Math.floor(emptySlots / 2);
    const rightEmpty = emptySlots - leftEmpty;

    return [
      ...Array(leftEmpty).fill(null),
      ...skills,
      ...Array(rightEmpty).fill(null),
    ];
  };

  const topRowComplete = centerSkillsInRow(topRowSkills, 12);
  const secondRowComplete = centerSkillsInRow(secondRowSkills, 10);
  const thirdRowComplete = centerSkillsInRow(thirdRowSkills, 8);
  const bottomRowComplete = centerSkillsInRow(bottomRowSkills, 6);

  return (
    <div className="w-full mx-auto space-y-2 md:space-y-4 flex flex-col items-center px-4 md:px-0">
      {/* Mobile Layout - 3 per row matching the image */}
      <div className="block md:hidden w-full max-w-sm mx-auto">
        <div className="grid grid-cols-3 gap-4 justify-items-center mb-6">
          {SKILLS.slice(0, 3).map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 justify-items-center mb-6">
          {SKILLS.slice(3, 6).map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 justify-items-center mb-6">
          {SKILLS.slice(6, 9).map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 justify-items-center mb-6">
          {SKILLS.slice(9, 12).map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
        {SKILLS.length > 12 && (
          <div className="grid grid-cols-3 gap-4 justify-items-center mb-6">
            {SKILLS.slice(12, 15).map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        )}
        {SKILLS.length > 15 && (
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            {SKILLS.slice(15).map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        )}
      </div>

      {/* Desktop/Tablet Keyboard Layout */}
      <div className="hidden md:block">
        {/* Top row - responsive sizing */}
        <div className="flex justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 items-center mb-2 md:mb-4 pb-2">
          <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-4 min-w-fit">
            {topRowComplete
              .slice(0, 8)
              .map((skill, index) =>
                skill ? (
                  <SkillCard key={skill.id} skill={skill} />
                ) : (
                  <EmptyCard key={`empty-top-${index}`} />
                )
              )}
            {/* Show more on larger screens */}
            <div className="hidden md:flex gap-3">
              {topRowComplete
                .slice(8)
                .map((skill, index) =>
                  skill ? (
                    <SkillCard key={skill.id} skill={skill} />
                  ) : (
                    <EmptyCard key={`empty-top-extra-${index}`} />
                  )
                )}
            </div>
          </div>
        </div>

        {/* Second row - responsive sizing */}
        <div className="flex justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 mb-2 md:mb-4">
          <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-4 min-w-fit">
            {secondRowComplete
              .slice(0, 7)
              .map((skill, index) =>
                skill ? (
                  <SkillCard key={skill.id} skill={skill} />
                ) : (
                  <EmptyCard key={`empty-second-${index}`} />
                )
              )}
            {/* Show more on larger screens */}
            <div className="hidden md:flex gap-3">
              {secondRowComplete
                .slice(7)
                .map((skill, index) =>
                  skill ? (
                    <SkillCard key={skill.id} skill={skill} />
                  ) : (
                    <EmptyCard key={`empty-second-extra-${index}`} />
                  )
                )}
            </div>
          </div>
        </div>

        {/* Third row - responsive sizing */}
        <div className="flex justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 mb-2 md:mb-4">
          <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-4 min-w-fit">
            {thirdRowComplete
              .slice(0, 6)
              .map((skill, index) =>
                skill ? (
                  <SkillCard key={skill.id} skill={skill} />
                ) : (
                  <EmptyCard key={`empty-third-${index}`} />
                )
              )}
            {/* Show more on larger screens */}
            <div className="hidden md:flex gap-3">
              {thirdRowComplete
                .slice(6)
                .map((skill, index) =>
                  skill ? (
                    <SkillCard key={skill.id} skill={skill} />
                  ) : (
                    <EmptyCard key={`empty-third-extra-${index}`} />
                  )
                )}
            </div>
          </div>
        </div>

        {/* Bottom row - responsive sizing */}
        <div className="flex justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 ">
          <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-4 lg:gap-4 min-w-fit">
            {bottomRowComplete
              .slice(0, 5)
              .map((skill, index) =>
                skill ? (
                  <SkillCard key={skill.id} skill={skill} />
                ) : (
                  <EmptyCard key={`empty-bottom-${index}`} />
                )
              )}
            {/* Show more on larger screens */}
            <div className="hidden md:flex gap-3 lg:gap-4">
              {bottomRowComplete
                .slice(5)
                .map((skill, index) =>
                  skill ? (
                    <SkillCard key={skill.id} skill={skill} />
                  ) : (
                    <EmptyCard key={`empty-bottom-extra-${index}`} />
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillList;
