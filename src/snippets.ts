export type TSnippet = {
  name: string;
  prefix: string;
  desc: string | string[];
  body: string[];
};

export const SNIPPETS: TSnippet[] = [
  {
    name: "main function",
    prefix: "main",
    desc: [
      "Generates a main function template.",
      "```lua",
      "function main()",
      "  while not SystemIsReady() do",
      "    Wait(0)",
      "  end",
      "  ",
      "  code",
      "  ",
      "  while true do",
      "    Wait(0)",
      "    ",
      "    code",
      "    ",
      "  end",
      "end",
      "```",
    ],
    body: [
      "function main()",
      "  while not SystemIsReady() do",
      "    Wait(0)",
      "  end",
      "  ",
      "  ${1:code}",
      "  ",
      "  while true do",
      "    Wait(0)",
      "    ",
      "    ${0:code}",
      "    ",
      "  end",
      "end",
    ],
  },
  {
    name: "STimeCycle",
    prefix: "stimecycle",
    desc: "Generates some functions that exist in STimeCycle.lur.",
    body: [
      "function F_AttendedClass()",
      '  if IsMissionCompleated("3_08") and not IsMissionCompleated("3_08_PostDummy") then',
      "    return",
      "  end",
      "  SetSkippedClass(false)",
      "  PlayerSetPunishmentPoints(0)",
      "end",
      "function F_MissedClass()",
      '  if IsMissionCompleated("3_08") and not IsMissionCompleated("3_08_PostDummy") then',
      "    return",
      "  end",
      "  SetSkippedClass(true)",
      "  StatAddToInt(166)",
      "end",
      "function F_AttendedCurfew()",
      "  if not PedInConversation(gPlayer) and not MissionActive() then",
      '    TextPrintString("You got home in time for curfew", 4)',
      "  end",
      "end",
      "function F_MissedCurfew()",
      "  if not PedInConversation(gPlayer) and not MissionActive() then",
      '    TextPrint("TM_TIRED5", 4, 2)',
      "  end",
      "end",
      "function F_StartClass()",
      '  if IsMissionCompleated("3_08") and not IsMissionCompleated("3_08_PostDummy") then',
      "    return",
      "  end",
      "  F_RingSchoolBell()",
      "  local current_punishment = PlayerGetPunishmentPoints()",
      "  current_punishment = current_punishment + GetSkippingPunishment()",
      "end",
      "function F_EndClass()",
      '  if IsMissionCompleated("3_08") and not IsMissionCompleated("3_08_PostDummy") then',
      "    return",
      "  end",
      "  F_RingSchoolBell()",
      "end",
      "function F_StartMorning()",
      "  F_UpdateTimeCycle()",
      "end",
      "function F_EndMorning()",
      "  F_UpdateTimeCycle()",
      "end",
      "function F_StartLunch()",
      '  if IsMissionCompleated("3_08") and not IsMissionCompleated("3_08_PostDummy") then',
      "    F_UpdateTimeCycle()",
      "    return",
      "  end",
      "  F_UpdateTimeCycle()",
      "end",
      "function F_EndLunch()",
      "  F_UpdateTimeCycle()",
      "end",
      "function F_StartAfternoon()",
      "  F_UpdateTimeCycle()",
      "end",
      "function F_EndAfternoon()",
      "  F_UpdateTimeCycle()",
      "end",
      "function F_StartEvening()",
      "  F_UpdateTimeCycle()",
      "end",
      "function F_EndEvening()",
      "  F_UpdateTimeCycle()",
      "end",
      "function F_StartCurfew_SlightlyTired()",
      "  F_UpdateTimeCycle()",
      "end",
      "function F_StartCurfew_Tired()",
      "  F_UpdateTimeCycle()",
      "end",
      "function F_StartCurfew_MoreTired()",
      "  F_UpdateTimeCycle()",
      "end",
      "function F_StartCurfew_TooTired()",
      "  F_UpdateTimeCycle()",
      "end",
      "function F_EndCurfew_TooTired()",
      "  F_UpdateTimeCycle()",
      "end",
      "function F_EndTired()",
      "  F_UpdateTimeCycle()",
      "end",
      "function F_Nothing()",
      "end",
      "function F_ClassWarning()",
      '  if IsMissionCompleated("3_08") and not IsMissionCompleated("3_08_PostDummy") then',
      "    return",
      "  end",
      "  local warnchoice = math.random(1, 2)",
      "end",
      "function F_UpdateTimeCycle()",
      '  if not IsMissionCompleated("1_B") then',
      "    local CurrentDay = GetCurrentDay(false)",
      "    if CurrentDay < 0 or 2 < CurrentDay then",
      "      SetCurrentDay(0)",
      "    end",
      "  end",
      "  F_UpdateCurfew()",
      "end",
      "function F_UpdateCurfew()",
      "  local rules = shared.gCurfewRules or F_CurfewDefaultRules",
      "  rules()",
      "end",
      "function F_CurfewDefaultRules()",
      "  local timeHour = ClockGet()",
      "  if 23 <= timeHour or timeHour < 7 then",
      "    shared.gCurfew = true",
      "  else",
      "    shared.gCurfew = false",
      "  end",
      "end",
    ],
  },
  {
    name: "while loop",
    prefix: "whileloop",
    desc: [
      "Generates a ```while``` loop statement.",
      "```lua",
      "while condition do",
      "  Wait(0)",
      "  ",
      "  code",
      "  ",
      "end",
      "```",
    ],
    body: [
      "while ${1:condition} do",
      "  Wait(0)",
      "  ",
      "  ${0:code}",
      "  ",
      "end",
    ],
  },
  {
    name: "repeat until loop",
    prefix: "repeatloop",
    desc: [
      "Generates a ```repeat until``` loop statement.",
      "```lua",
      "repeat",
      "  Wait(0)",
      "  ",
      "  code",
      "  ",
      "until condition",
      "```",
    ],
    body: [
      "repeat",
      "  Wait(0)",
      "  ",
      "  ${0:code}",
      "  ",
      "until ${1:condition}",
    ],
  },
];

export default SNIPPETS;
