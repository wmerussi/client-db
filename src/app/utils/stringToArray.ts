/**
 * Método para transformar o resultado da API em array
 *
 * Não foi possível utilizar o resultado direto da API,
 * o JSON.parse e o .json() já que
 * o retorno é uma string cheio de caracteres escondidos como
 * o \n (pula linha)
 *
 * Este método leva em consideração a tipagem de retorno
 * e o tipo de valor de cada propriedade do objeto
 */

export function stringToArray<T>(value: string): T[] {
  // Remove sujeira inicial e separa os objetos
  const semiArray = value.replace(/[\[\]\{(\n) ]/g, '').split('},');

  return semiArray.reduce((arrayResult: T[], strinObj: string) => {
    // Separa as propriedades do objeto
    const stringProps: string[] = strinObj.split(',');

    const objResult: T = stringProps.reduce((obj: T, stringProp: string) => {
      if (!stringProp) {
        return obj;
      }

      const [key, value] = stringProp.split(':');
      const normalizedKey: string = key.replace(/"/g, '');

      const typedValue: string | number =
        value[0] === '"' ? value.replace(/"/g, '') : +value;

      return {
        ...obj,
        [`${normalizedKey}`]: typedValue,
      };
    }, <T>{});

    if (!Object.keys(objResult as {}).length) {
      return arrayResult;
    }

    return arrayResult.concat(objResult);
  }, []);
}
