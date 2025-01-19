import TeamCard from "./TeamCard";

export default function TeamCardSection() {
  const memberInfo = [
    {
      name: "Pam Beesly",
      role: "Head Of Sales",
      image: "/pam-member.jpg",
      attributes: [
        "Client communications",
        "Always Reaching for the stars",
        "May Surprise Us Someday",
      ],
      bg: "bg-[#986a5a]",
    },
    {
      name: "Michael Scott",
      role: "Founder & CEO",
      image: "/a.jpg",
      attributes: [
        "World's Best Boss",
        "Always has a plan",
        "Loves his employees",
      ],
      bg: "bg-indigo-500",
    },
    {
      name: "Ryan Howard",
      role: "Temp",
      image: "/ryan-member.jpg",
      attributes: [
        "Youngest VP in Dunder Mifflin history",
        "Recent Bowling Alley Employee",
        '"Lead me when im in the mood to be led"',
      ],
      bg: "bg-teal-700",
    },
  ];
  return (
    <div className="relative font-american-type-medium p-12 flex flex-col items-center">
      {memberInfo.map((member, idx) => (
        <TeamCard
          bg={member.bg}
          reverse={idx % 2 !== 0}
          key={member.name}
          name={member.name}
          role={member.role}
          image={member.image}
          attributes={member.attributes}
          idx={idx}
        />
      ))}
    </div>
  );
}
