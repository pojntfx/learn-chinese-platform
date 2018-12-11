import {
  getSimplifiedHanziForPinyin,
  getEnglishForHanzi,
  getTraditionalHanziForSimplifiedHanzi,
  getPinyinForHanzi,
  getPinyinForEnglish
} from "./translator";
import { getVectorForHanzi, IVector } from "./character";
import { getFemaleVoiceForHanzi, getMaleVoiceForHanzi } from "./voice";

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
  pinyin: string,
  precise?: boolean // TODO: Implement less precise version
): Promise<IContextForPinyin[]> => {
  const hanzi = await getSimplifiedHanziForPinyin(pinyin);
  return precise
    ? await Promise.all(
        hanzi
          .map(async hanzi => ({
            hanzi: {
              simplified: { text: hanzi },
              traditional: await getTraditionalHanziForSimplifiedHanzi(
                hanzi
              ).then(hanzi => ({ text: hanzi })),
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
          .filter(async hanzi => (await hanzi).pinyin.text === pinyin)
      )
    : await Promise.all(
        hanzi.map(async hanzi => ({
          hanzi: {
            simplified: { text: hanzi },
            traditional: await getTraditionalHanziForSimplifiedHanzi(
              hanzi
            ).then(hanzi => ({ text: hanzi })),
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

function flatten(arr: any[]): any[] {
  return arr.reduce(function(flat: any[], toFlatten: any[]) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}

const getContextForHanzi = async (
  hanzi: string,
  precise?: boolean
): Promise<IContextForPinyin[]> => {
  const pinyin = await getPinyinForHanzi(hanzi);
  return precise
    ? flatten(
        await Promise.all(
          pinyin.map(async pinyin =>
            (await getContextForPinyin(pinyin)).filter(
              pinyin => pinyin.hanzi.simplified.text === hanzi
            )
          )
        )
      )
    : flatten(
        await Promise.all(
          pinyin.map(async pinyin => await getContextForPinyin(pinyin))
        )
      );
};

const getContextForEnglish = async (
  english: string,
  precise?: boolean
): Promise<IContextForPinyin[]> => {
  const pinyin = await getPinyinForEnglish(english);
  return precise
    ? flatten(
        await Promise.all(
          pinyin.map(async pinyin =>
            (await getContextForPinyin(pinyin)).filter(pinyin =>
              pinyin.definitions.find(definition =>
                Boolean(
                  definition.text.find(definition =>
                    definition.includes(english)
                  )
                )
              )
            )
          )
        )
      )
    : flatten(
        await Promise.all(
          pinyin.map(async pinyin => await getContextForPinyin(pinyin))
        )
      );
};

export {
  getContextForPinyin,
  getContextForHanzi,
  getContextForEnglish,
  IContextForPinyin
};
