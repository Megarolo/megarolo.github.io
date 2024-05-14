import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "¡{{bossName}} te corta el paso!",
  "trainerAppeared": "¡{{trainerName}}\nte desafía!",
  "singleWildAppeared": "¡Un {{pokemonName}} salvaje te corta el paso!",
  "multiWildAppeared": "¡Un {{pokemonName1}} y un {{pokemonName2}} salvajes\nte cortan el paso!",
  "playerComeBack": "¡{{pokemonName}}, ven aquí!",
  "trainerComeBack": "¡{{trainerName}} retira a {{pokemonName}} del combate!",
  "playerGo": "¡Adelante, {{pokemonName}}!",
  "trainerGo": "¡{{trainerName}} saca a {{pokemonName}}!",
  "switchQuestion": "¿Quieres cambiar a\n{{pokemonName}}?",
  "trainerDefeated": "¡Has derrotado a\n{{trainerName}}!",
  "pokemonCaught": "¡{{pokemonName}} atrapado!",
  "pokemon": "Pokémon",
  "sendOutPokemon": "¡Adelante, {{pokemonName}}!",
  "hitResultCriticalHit": "!Un golpe crítico!",
  "hitResultSuperEffective": "!Es muy eficaz!",
  "hitResultNotVeryEffective": "No es muy eficaz…",
  "hitResultNoEffect": "No afecta a {{pokemonName}}!",
  "hitResultOneHitKO": "!KO en 1 golpe!",
  "attackFailed": "¡Pero ha fallado!",
  "attackHitsCount": `N.º de golpes: {{count}}.`,
  "expGain": "{{pokemonName}} ha ganado\n{{exp}} puntos de experiencia.",
  "levelUp": "¡{{pokemonName}} ha subido al \nNv. {{level}}!",
  "learnMove": "¡{{pokemonName}} ha aprendido {{moveName}}!",
  "learnMovePrompt": "{{pokemonName}} quiere aprender\n{{moveName}}.",
  "learnMoveLimitReached": "Pero, {{pokemonName}} ya conoce\ncuatro movimientos.",
  "learnMoveReplaceQuestion": "¿Quieres sustituir uno de sus movimientos por {{moveName}}?",
  "learnMoveStopTeaching": "¿Prefieres que no aprenda\n{{moveName}}?",
  "learnMoveNotLearned": "{{pokemonName}} no ha aprendido {{moveName}}.",
  "learnMoveForgetQuestion": "¿Qué movimiento quieres que olvide?",
  "learnMoveForgetSuccess": "{{pokemonName}} ha olvidado cómo utilizar {{moveName}}.",
  "levelCapUp": "¡Se ha incrementado el\nnivel máximo a {{levelCap}}!",
  "moveNotImplemented": "{{moveName}} aún no está implementado y no se puede seleccionar.",
  "moveNoPP": "There's no PP left for\nthis move!",
  "moveDisabled": "!No puede usar {{moveName}} porque ha sido anulado!",
  "noPokeballForce": "Una fuerza misteriosa\nte impide usar Poké Balls.",
  "noPokeballTrainer": "¡No puedes atrapar a los\nPokémon de los demás!",
  "noPokeballMulti": "¡No se pueden lanzar Poké Balls\ncuando hay más de un Pokémon!",
  "noPokeballStrong": "¡Este Pokémon es demasiado fuerte para ser capturado!\nNecesitas bajarle los PS primero!",
  "noEscapeForce": "Una fuerza misteriosa\nte impide huir.",
  "noEscapeTrainer": "¡No puedes huir de los\ncombates contra Entrenadores!",
  "noEscapePokemon": "¡El movimiento {{moveName}} de {{pokemonName}} impide la huida!",
  "runAwaySuccess": "¡Escapas sin problemas!",
  "runAwayCannotEscape": "¡No has podido escapar!",
  "escapeVerbSwitch": "cambiar",
  "escapeVerbFlee": "huir",
  "notDisabled": "¡El movimiento {{moveName}} de {{pokemonName}}\nya no está anulado!",
  "skipItemQuestion": "¿Estás seguro de que no quieres coger un objeto?",
  "eggHatching": "¿Y esto?",
  "ivScannerUseQuestion": "¿Quieres usar el Escáner de IVs en {{pokemonName}}?"
} as const;