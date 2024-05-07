import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const tutorial: SimpleTranslationEntries = {
    "intro": `欢迎来到PokéRogue!这是一款以战斗为重点,融合了Roguelite元素的口袋妖怪粉丝游戏.
    $这款游戏未进行货币化，我们不对口袋妖怪以及使用的受版权保护的资源提出所有权要求.
    $这款游戏仍在开发中，但已完全可玩.\n如需报告错误，请使用 Discord 社区.
    $如果游戏运行缓慢，请确保在浏览器设置中开启'硬件加速'.`,
    
    "accessMenu": `要访问菜单，请在等待输入时按 M 键或 Esc 键。\n菜单中包含设置和各种功能。`,
    
    "menu": `通过这个菜单，你可以访问设置。
    $在设置中，你可以更改游戏速度、窗口样式和其他选项。
    $这里还有其他各种功能，所以一定要全部查看！`,

    "starterSelect": `从这个屏幕上，你可以选择你的初始小队成员。
    $每个初始成员都有一个值。你的队伍最多可以有\n6个成员，只要总值不超过10。
    $你还可以根据你捕获或孵化的变体来选择性别、能力和形态。
    $一个物种的IVs也是你捕获或孵化的每一个成员中最好的，所以尽量多捕获相同图鉴！`,

    "pokerus": `每天随机的3个可选择的初始小队成员会有紫色边框。
    $如果你看到自己拥有的初始成员中有一个有紫色边框的，\n试着将其加入到你的队伍中。记得查看其摘要！`,

    "statChange": `属性变化在战斗之间会持续存在，只要你的口袋妖怪不被召回。
    $在与训练师战斗之前和进入新的宝可梦战斗前，你的口袋妖怪会被召回。
    $你还可以通过按住 C 键或 Shift 键查看场上口袋妖怪的属性变化。`,

    "selectItem": `每次战斗后，你将获得3个随机物品的选择。\n你只能选择一个。
    $这些物品从消耗品，到口袋妖怪持有物品，再到被动永久物品。
    $大多数非消耗品的效果会以各种方式叠加。
    $有些物品只有在可以使用的情况下才会出现，例如进化物品。
    $你还可以使用转移选项在口袋妖怪之间转移持有物品。
    $一旦你获得持有物品，转移选项会出现在右下角。
    $你可以用金钱购买消耗品，而且随着进度的推进，会有更多种类的物品可供选择。
    $确保在选择随机物品之前购买这些，因为一旦你选择，游戏将继续到下一场战斗。`,

    "eggGacha": `从这个屏幕上，你可以兑换你的优惠券以获取\n口袋妖怪蛋。
    $蛋需要孵化，并且在每次战斗后会加快孵化。稀有的蛋需要更长时间孵化。
    $孵化出来的口袋妖怪不会添加到你的队伍中，它们将\n被添加到你的初始小队中。
    $从蛋中孵化的口袋妖怪通常比野生口袋妖怪有更好的IVs。
    $有些口袋妖怪只能通过孵化蛋来获得。
    $这里有3台不同的机器可以抽取不同的\n奖励，所以选择最适合你的那台吧！`,
} as const;