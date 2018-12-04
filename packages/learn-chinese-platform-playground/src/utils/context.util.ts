import {
  getSimplifiedHanziForPinyin,
  getEnglishForHanzi,
  getTraditionalHanziForSimplifiedHanzi
} from "./translator.util";
import { getVectorForHanzi, IVector } from "./character.util";
import { getFemaleVoiceForHanzi, getMaleVoiceForHanzi } from "./voice.util";

interface IContextForPinyin {
  hanzi: {
    simplified: { text: string };
    traditional: { text: string };
    stroke: IVector;
  };
  pinyin: {
    text: string;
    female: { voice: string };
    male: { voice: string };
  };
  definitions: {
    text: string[];
  }[];
}

const getContextForPinyin = async (
  pinyin: string
): Promise<IContextForPinyin[]> => {
  const hanzi = await getSimplifiedHanziForPinyin(pinyin);
  return await Promise.all(
    hanzi.map(async hanzi => ({
      hanzi: {
        simplified: { text: hanzi },
        traditional: await getTraditionalHanziForSimplifiedHanzi(hanzi).then(
          hanzi => ({ text: hanzi })
        ),
        stroke: await getVectorForHanzi(hanzi)
      },
      pinyin: {
        text: pinyin,
        female: { voice: await getFemaleVoiceForHanzi(hanzi) },
        male: { voice: await getMaleVoiceForHanzi(hanzi) }
      },
      definitions: await getEnglishForHanzi(hanzi).then(english =>
        english.map(english => ({ text: english }))
      )
    }))
  );
};

export { getContextForPinyin };
