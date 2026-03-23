'use client';

const SkillsCard = ({ skill }) => {

  const handleClick = () => {
    if (skill.skillLink) {
      window.open(skill.skillLink, "_blank");
    }
  };

  const Icon = skill.skillIcon;

  return (
    <div
      onClick={handleClick}
      className="
      flex items-center gap-4
      w-[200px] h-[70px] px-4
      text-white
      bg-black/50 backdrop-blur-md
      border border-white/10
      rounded-xl
      shadow-lg
      transition-all duration-200
      hover:border-white/30
      hover:bg-black/70
      hover:scale-[1.03]
      "
    >
      {/* Icon */}
      <div className="flex items-center justify-center text-xl text-white/90">
        <Icon />
      </div>

      {/* Divider */}
      <div className="h-6 w-px bg-white/20"></div>

      {/* Text */}
      <div className="flex items-center">
        <h1 className="text-sm font-medium tracking-wide">
          {skill.skillName}
        </h1>
      </div>
    </div>
  );
};

export default SkillsCard;