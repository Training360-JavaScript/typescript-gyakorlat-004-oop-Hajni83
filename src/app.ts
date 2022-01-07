// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [ new HumanHero(1, 'Bob', 'male', 15, 2), new HumanHero(2, 'Joe', 'male', 15, 2), new HumanHero(3, 'Alice', 'female', 15, 2) ];


/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [new TransformerHero(1, 'Megatron', 2, 4, "álca"), new TransformerHero(2, 'Optimus', 2, 4, "autobot"), new TransformerHero(3, 'Űrdongó', 2, 4, "autobot")];
